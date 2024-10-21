-- Create a trigger function to update price_range_id and time_period_id in the vinyls table based on conditions

-- Create function to calculate price_range_id based on price
CREATE OR REPLACE FUNCTION update_price_range() RETURNS TRIGGER AS $$
BEGIN
    NEW.price_range_id := (SELECT id FROM price_ranges
                          WHERE NEW.price BETWEEN range_start AND range_end);
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create function to calculate time_period_id based on release_date
CREATE OR REPLACE FUNCTION update_time_period() RETURNS TRIGGER AS $$
BEGIN
    NEW.time_period_id := (SELECT id FROM time_periods
                          WHERE EXTRACT(YEAR FROM NEW.release_date) BETWEEN period_start AND period_end);
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create function to calculate new_release based on release_date
CREATE OR REPLACE FUNCTION update_new_release() RETURNS TRIGGER AS $$
BEGIN
    NEW.new_release := EXISTS (
        SELECT 1 FROM new_release
        WHERE NEW.release_date >= (CURRENT_DATE - INTERVAL '1 month' * threshold_months)
    );
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Drop existing triggers to allow rerunning with updated triggers
DROP TRIGGER IF EXISTS trigger_update_price_range ON vinyls;
DROP TRIGGER IF EXISTS trigger_update_time_period ON vinyls;
DROP TRIGGER IF EXISTS trigger_update_new_release ON vinyls;

-- Create triggers for the vinyls table to automatically update price_range_id, time_period_id, and new_release
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