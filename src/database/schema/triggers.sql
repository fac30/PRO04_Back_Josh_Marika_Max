CREATE OR REPLACE FUNCTION update_price_range()
RETURNS TRIGGER AS $$
DECLARE
    final_price NUMERIC;
BEGIN
    IF NEW.on_sale THEN
        final_price := NEW.price * (1 - NEW.discount / 100);
    ELSE
        final_price := NEW.price;
    END IF;
    NEW.price_range_id := (SELECT id FROM price_ranges
                           WHERE final_price BETWEEN range_start AND range_end);
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE OR REPLACE FUNCTION update_time_period() RETURNS TRIGGER AS $$
BEGIN
    NEW.time_period_id := (SELECT id FROM time_periods
                          WHERE EXTRACT(YEAR FROM NEW.release_date) BETWEEN period_start AND period_end);
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE OR REPLACE FUNCTION update_new_release() RETURNS TRIGGER AS $$
BEGIN
    NEW.new_release := EXISTS (
        SELECT 1 FROM new_release
        WHERE NEW.release_date >= (CURRENT_DATE - INTERVAL '1 month' * threshold_months)
    );
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trigger_update_price_range
    BEFORE INSERT OR UPDATE ON vinyls
    FOR EACH ROW
    EXECUTE FUNCTION update_price_range();

CREATE TRIGGER trigger_update_time_period
    BEFORE INSERT OR UPDATE ON vinyls
    FOR EACH ROW
    EXECUTE FUNCTION update_time_period();

CREATE TRIGGER trigger_update_new_release
    BEFORE INSERT OR UPDATE ON vinyls
    FOR EACH ROW
    EXECUTE FUNCTION update_new_release();