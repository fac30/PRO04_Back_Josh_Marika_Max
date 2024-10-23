INSERT INTO genres (genre)
VALUES 
('Alternative'),
('Blues'),
('Classical'),
('Country'),
('Electronic'),
('Folk'),
('Gospel'),
('Hip Hop'),
('Indie'),
('Jazz'),
('K-pop'),
('Latin'),
('Metal'),
('Pop'),
('Punk'),
('R&B'),
('Reggae'),
('Rock'),
('Soul'),
('World');

INSERT INTO conditions (condition)
VALUES 
('New and Sealed'),
('Like New'),
('Excellent'),
('Good'),
('Used');

INSERT INTO price_ranges (range_start, range_end, price_range)
VALUES 
(0, 5, 'Less than £5'),
(5, 10, 'Between £5 and £10'),
(10, 20, 'Between £10 and £20'),
(20, 999, 'More than £20');

INSERT INTO collection_types (collection_type)
VALUES 
('Single'),
('EP'),
('Album'),
('Live');

INSERT INTO new_release (threshold_months)
VALUES 
(3);

INSERT INTO time_periods (period_start, period_end, time_period)
VALUES
(1000, 1919, 'Golden Oldies'),
(1920, 1929, 'The Roaring 20s'),
(1930, 1939, 'The Swinging 30s'),
(1940, 1949, 'The Big Band 40s'),
(1950, 1959, 'The Rock n Roll 50s'),
(1960, 1969, 'The Psychedelic 60s'),
(1970, 1979, 'The Funky 70s'),
(1980, 1989, 'The Electric 80s'),
(1990, 1999, 'The Grungy 90s'),
(2000, 2009, 'The Digital 2000s'),
(2010, 2019, 'The Indie 2010s'),
(2020, 2029, 'The Eclectic 20s');

INSERT INTO labels (label)
VALUES 
('Columbia'),
('RCA'),
('Decca'),
('EMI'),
('Blue Note'),
('Polydor'),
('Okeh'),
('Brunswick'),
('Capitol'),
('Universal Music Group');

INSERT INTO locations (region)
VALUES 
('North East'),
('North West'),
('Yorkshire and the Humber'),
('East Midlands'),
('West Midlands'),
('East of England'),
('London'),
('South East'),
('South West');

INSERT INTO locations (country)
VALUES 
('France'),
('Spain'),
('Italy'),
('Germany'),
('Sweden'),
('Denmark'),
('Netherlands'),
('Norway'),
('Croatia');

INSERT INTO formats (format)
VALUES 
('7-inch'),
('10-inch'),
('12-inch');

INSERT INTO statuses (status)
VALUES 
('In cart'),
('Ordered'),
('Dispatched'),
('In transit'),
('Delivered');

INSERT INTO shipping_options (shipping_option, price, lead_time_days)
VALUES 
('Standard', 0.00, 4),
('Express', 4.99, 2),
('International', 9.99, 5);

INSERT INTO shipping_locations (shipping_option_id, location_id)
VALUES
((SELECT id FROM shipping_options WHERE shipping_option = 'Standard'), (SELECT id FROM locations WHERE region = 'North East')),
((SELECT id FROM shipping_options WHERE shipping_option = 'Standard'), (SELECT id FROM locations WHERE region = 'North West')),
((SELECT id FROM shipping_options WHERE shipping_option = 'Standard'), (SELECT id FROM locations WHERE region = 'Yorkshire and the Humber')),
((SELECT id FROM shipping_options WHERE shipping_option = 'Standard'), (SELECT id FROM locations WHERE region = 'East Midlands')),
((SELECT id FROM shipping_options WHERE shipping_option = 'Standard'), (SELECT id FROM locations WHERE region = 'West Midlands')),
((SELECT id FROM shipping_options WHERE shipping_option = 'Standard'), (SELECT id FROM locations WHERE region = 'East of England')),
((SELECT id FROM shipping_options WHERE shipping_option = 'Standard'), (SELECT id FROM locations WHERE region = 'London')),
((SELECT id FROM shipping_options WHERE shipping_option = 'Standard'), (SELECT id FROM locations WHERE region = 'South East')),
((SELECT id FROM shipping_options WHERE shipping_option = 'Standard'), (SELECT id FROM locations WHERE region = 'South West')),

((SELECT id FROM shipping_options WHERE shipping_option = 'Express'), (SELECT id FROM locations WHERE region = 'North East')),
((SELECT id FROM shipping_options WHERE shipping_option = 'Express'), (SELECT id FROM locations WHERE region = 'North West')),
((SELECT id FROM shipping_options WHERE shipping_option = 'Express'), (SELECT id FROM locations WHERE region = 'Yorkshire and the Humber')),
((SELECT id FROM shipping_options WHERE shipping_option = 'Express'), (SELECT id FROM locations WHERE region = 'East Midlands')),
((SELECT id FROM shipping_options WHERE shipping_option = 'Express'), (SELECT id FROM locations WHERE region = 'West Midlands')),
((SELECT id FROM shipping_options WHERE shipping_option = 'Express'), (SELECT id FROM locations WHERE region = 'East of England')),
((SELECT id FROM shipping_options WHERE shipping_option = 'Express'), (SELECT id FROM locations WHERE region = 'London')),
((SELECT id FROM shipping_options WHERE shipping_option = 'Express'), (SELECT id FROM locations WHERE region = 'South East')),
((SELECT id FROM shipping_options WHERE shipping_option = 'Express'), (SELECT id FROM locations WHERE region = 'South West')),

((SELECT id FROM shipping_options WHERE shipping_option = 'International'), (SELECT id FROM locations WHERE country = 'France')),
((SELECT id FROM shipping_options WHERE shipping_option = 'International'), (SELECT id FROM locations WHERE country = 'Spain')),
((SELECT id FROM shipping_options WHERE shipping_option = 'International'), (SELECT id FROM locations WHERE country = 'Italy')),
((SELECT id FROM shipping_options WHERE shipping_option = 'International'), (SELECT id FROM locations WHERE country = 'Germany')),
((SELECT id FROM shipping_options WHERE shipping_option = 'International'), (SELECT id FROM locations WHERE country = 'Sweden')),
((SELECT id FROM shipping_options WHERE shipping_option = 'International'), (SELECT id FROM locations WHERE country = 'Denmark')),
((SELECT id FROM shipping_options WHERE shipping_option = 'International'), (SELECT id FROM locations WHERE country = 'Netherlands')),
((SELECT id FROM shipping_options WHERE shipping_option = 'International'), (SELECT id FROM locations WHERE country = 'Norway')),
((SELECT id FROM shipping_options WHERE shipping_option = 'International'), (SELECT id FROM locations WHERE country = 'Croatia'));