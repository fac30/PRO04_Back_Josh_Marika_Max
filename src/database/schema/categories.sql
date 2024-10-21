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

INSERT INTO new_release (threshold_months, new_release)
VALUES 
(3, 'New Release');

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
('North West '),
('Yorkshire and the Humber'),
('East Midlands'),
('West Midlands'),
('East of England'),
('London'),
('South East'),
('South West');

INSERT INTO formats (format)
VALUES 
('7-inch'),
('10-inch'),
('12-inch');