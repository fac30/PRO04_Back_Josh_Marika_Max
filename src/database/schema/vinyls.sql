INSERT INTO vinyls (
    stock,
    description,
    price,
    artist,
    title,
    release_date,
    limited_edition,
    genre_id,
    condition_id,
    collection_type_id,
    label_id,
    image_url,
    discount,
    on_sale
) VALUES
    -- The Wall
    (50, 'A classic album by Pink Floyd', 25.99, 'Pink Floyd', 'The Wall', '1979-11-30', false, 1, 1, 3, 1, 'https://i.scdn.co/image/ab67616d0000b2735d48e2f56d691f9a4e4b0bdf', 15, true),
    
    -- Kind of Blue
    (50, 'A classic jazz album by Miles Davis', 20.99, 'Miles Davis', 'Kind of Blue', '1959-08-17', false, 2, 1, 3, 1, 'https://i.scdn.co/image/ab67616d0000b2737ab89c25093ea3787b1995b4', 0, false),

    -- 25
    (50, 'A modern pop album by Adele', 19.99, 'Adele', '25', '2015-11-20', false, 3, 1, 3, 1, 'https://m.media-amazon.com/images/I/71VcJXBDgEL._UF1000,1000_QL80_.jpg', 20, true),

    -- Born to Run
    (50, 'A legendary rock album by Bruce Springsteen', 22.99, 'Bruce Springsteen', 'Born to Run', '1975-08-25', false, 1, 1, 3, 1, 'https://i.scdn.co/image/ab67616d0000b273503143a281a3f30268dcd9f9', 0, false),

    -- Highway 61 Revisited
    (50, 'A classic rock album by Bob Dylan', 23.99, 'Bob Dylan', 'Highway 61 Revisited', '1965-08-30', false, 1, 1, 3, 1, 'https://i.scdn.co/image/ab67616d0000b27341720ef0ae31e10d39e43ca2', 10, true),

    -- The Rise and Fall of Ziggy Stardust
    (50, 'A groundbreaking album by David Bowie', 21.99, 'David Bowie', 'The Rise and Fall of Ziggy Stardust', '1972-06-16', false, 1, 1, 3, 2, 'https://i.scdn.co/image/ab67616d0000b273c41f4e1133b0e6c5fcf58680', 0, false),

    -- Elvis Presley
    (50, 'A classic album by Elvis Presley', 24.99, 'Elvis Presley', 'Elvis Presley', '1956-03-23', false, 3, 1, 3, 2, 'https://i.scdn.co/image/ab67616d0000b273b6cb10f041544fa1625f31f7', 0, false),

    -- The Man-Machine
    (50, 'An iconic electronic album by Kraftwerk', 18.99, 'Kraftwerk', 'The Man-Machine', '1978-05-19', false, 4, 1, 3, 2, 'https://i.scdn.co/image/ab67616d0000b273e4c3295cd6464ed5bc0f6c2c', 0, false),

    -- Wasting Light
    (50, 'A modern rock album by Foo Fighters', 22.99, 'Foo Fighters', 'Wasting Light', '2011-04-12', false, 1, 1, 3, 2, 'https://i.scdn.co/image/ab67616d0000b273cdac19bbaee5cc123edcc26f', 30, true),

    -- Because the Internet
    (50, 'A popular hip-hop album by Childish Gambino', 21.99, 'Childish Gambino', 'Because the Internet', '2013-12-10', false, 5, 1, 3, 2, 'https://i.scdn.co/image/ab67616d0000b27326d64b6150aa3d9b6b67d857', 0, false),

    -- The Essential Pavarotti
    (50, 'A collection of Luciano Pavarotti''s best', 24.99, 'Luciano Pavarotti', 'The Essential Pavarotti', '1990-10-31', false, 6, 1, 3, 3, 'https://i.scdn.co/image/ab67616d0000b273289f4dc7e7f51d324d07d50b', 25, true),

    -- Let It Bleed
    (50, 'A classic album by The Rolling Stones', 23.99, 'The Rolling Stones', 'Let It Bleed', '1969-12-05', false, 1, 1, 3, 3, 'https://i.scdn.co/image/ab67616d0000b2732af30c881bb23cfb82a8cf99', 0, false),

    -- It''s Not Unusual
    (50, 'A pop album by Tom Jones', 20.99, 'Tom Jones', 'It''s Not Unusual', '1965-01-01', false, 3, 1, 3, 3, 'https://i.scdn.co/image/ab67616d0000b273cfe16d3b440dffb1220328f7', 10, true),

    -- Hello, Dolly!
    (50, 'A classic jazz album by Louis Armstrong', 19.99, 'Louis Armstrong', 'Hello, Dolly!', '1964-01-01', false, 2, 1, 3, 3, 'https://i.scdn.co/image/ab67616d0000b273ff47cd27d409588ecc01d81f', 0, false),

    -- Blues Breakers with Eric Clapton
    (50, 'A blues album by John Mayall', 24.99, 'John Mayall', 'Blues Breakers with Eric Clapton', '1966-07-22', false, 7, 1, 3, 3, 'https://i.scdn.co/image/ab67616d0000b273c40ff56a16cebb8f30af1f66', 0, false),

    -- Abbey Road
    (50, 'A legendary album by The Beatles', 27.99, 'The Beatles', 'Abbey Road', '1969-09-26', false, 1, 1, 3, 4, 'https://i.scdn.co/image/ab67616d0000b273dc30583ba717007b00cceb25', 15, true),

    -- Discovery
    (50, 'An iconic electronic album by Daft Punk', 21.99, 'Daft Punk', 'Discovery', '2001-02-26', false, 4, 1, 3, 4, 'https://i.scdn.co/image/ab67616d0000b2736610c21366e613bfd9f5d197', 0, false),

    -- OK Computer
    (50, 'A groundbreaking alternative album by Radiohead', 25.99, 'Radiohead', 'OK Computer', '1997-05-21', false, 1, 1, 3, 4, 'https://i.scdn.co/image/ab67616d0000b273c8b444df094279e70d0ed856', 10, true),

    -- Teenage Dream
    (50, 'A popular album by Katy Perry', 19.99, 'Katy Perry', 'Teenage Dream', '2010-08-24', false, 3, 1, 3, 4, 'https://i.scdn.co/image/ab67616d0000b273d20c38f295039520d688a888', 0, false),

    -- The Number of the Beast
    (50, 'A classic metal album by Iron Maiden', 26.99, 'Iron Maiden', 'The Number of the Beast', '1982-03-22', false, 8, 1, 3, 4, 'https://i.scdn.co/image/ab67616d0000b2730910e39b1092e8ec44626aa3', 20, true),

    -- Blue Train
    (50, 'A legendary jazz album by John Coltrane', 22.99, 'John Coltrane', 'Blue Train', '1958-01-01', false, 2, 1, 3, 5, 'https://i.scdn.co/image/ab67616d0000b273611ea3fb281f7956ffd33b77', 0, false),

    -- Maiden Voyage
    (50, 'A classic jazz album by Herbie Hancock', 23.99, 'Herbie Hancock', 'Maiden Voyage', '1965-05-17', false, 2, 1, 3, 5, 'https://i.scdn.co/image/ab67616d0000b27344e77f19a8f35955870d4907', 15, true),

    -- Moanin'
    (50, 'A classic jazz album by Art Blakey', 20.99, 'Art Blakey', 'Moanin''', '1959-01-01', false, 2, 1, 3, 5, 'https://i.scdn.co/image/ab67616d0000b273c653150f8ed1f6a12348ba79', 0, false),

    -- Genius of Modern Music: Volume 1
    (50, 'A legendary album by Thelonious Monk', 21.99, 'Thelonious Monk', 'Genius of Modern Music: Volume 1', '1947-01-01', false, 2, 1, 3, 5, 'https://i.scdn.co/image/ab67616d0000b273c4c99d6b212f741ba28c5a61', 0, false),

    -- Song for My Father
    (50, 'A jazz classic by Horace Silver', 19.99, 'Horace Silver', 'Song for My Father', '1965-01-01', false, 2, 1, 3, 5, 'https://i.scdn.co/image/ab67616d0000b2739453839d1e3569bdebc9ffab', 20, true),

    -- Who's Next
    (50, 'A legendary rock album by The Who', 25.99, 'The Who', 'Who''s Next', '1971-08-14', false, 1, 1, 3, 6, 'https://i.scdn.co/image/ab67616d0000b273d993d0cd47c0b948d36553c8', 0, false),

    -- Arrival
    (50, 'A pop album by ABBA', 18.99, 'ABBA', 'Arrival', '1976-10-11', false, 3, 1, 3, 6, 'https://i.scdn.co/image/ab67616d0000b27300a86f72f75086f7fb441899', 10, true),

    -- Technique
    (50, 'An electronic album by New Order', 19.99, 'New Order', 'Technique', '1989-01-30', false, 4, 1, 3, 6, 'https://i.scdn.co/image/ab67616d0000b2735ac2c6a71a5882025e438424', 0, false),

    -- Disraeli Gears
    (50, 'A rock classic by Cream', 20.99, 'Cream', 'Disraeli Gears', '1967-11-02', false, 1, 1, 3, 6, 'https://i.scdn.co/image/ab67616d0000b273db1fb2dede292908e86d94d7', 0, false),

    -- The Fame
    (50, 'A pop album by Lady Gaga', 24.99, 'Lady Gaga', 'The Fame', '2008-08-19', false, 3, 1, 3, 6, 'https://i.scdn.co/image/ab67616d0000b273613aaa3ae566d9f36008aed0', 0, false),

    -- Crazy Blues
    (50, 'A blues album by Mamie Smith', 17.99, 'Mamie Smith', 'Crazy Blues', '1920-08-10', false, 7, 1, 3, 7, 'https://i.scdn.co/image/ab67616d0000b273a0a0111739741dc48f57bd82', 30, true),

    -- West End Blues
    (50, 'A classic jazz album by Louis Armstrong', 21.99, 'Louis Armstrong', 'West End Blues', '1928-06-28', false, 2, 1, 3, 7, 'https://i.scdn.co/image/ab67616d0000b2733c1f30436ab89be9dd55bc43', 0, false),

    -- Black Snake Moan
    (50, 'A blues album by Blind Lemon Jefferson', 18.99, 'Blind Lemon Jefferson', 'Black Snake Moan', '1926-01-01', false, 7, 1, 3, 7, 'https://i.scdn.co/image/ab67616d0000b273784e255a3beab1cc84d3d56e', 0, false),

    -- Downhearted Blues
    (50, 'A blues album by Bessie Smith', 16.99, 'Bessie Smith', 'Downhearted Blues', '1923-02-16', false, 7, 1, 3, 7, 'https://i.scdn.co/image/ab67616d0000b2735e15b3819f2050cd720975ff', 0, false),

    -- The Mooche
    (50, 'A jazz album by Duke Ellington', 20.99, 'Duke Ellington', 'The Mooche', '1928-10-01', false, 2, 1, 3, 7, 'https://i.scdn.co/image/ab67616d0000b27386cc9d6681c1bfab58d10856', 0, false),

    -- Sing, Sing, Sing
    (50, 'A jazz album by Benny Goodman', 19.99, 'Benny Goodman', 'Sing, Sing, Sing', '1937-07-06', false, 2, 1, 3, 8, 'https://i.scdn.co/image/ab67616d0000b273f5776ac73cc0befaa3f32ce0', 25, true),

    -- Minnie the Moocher
    (50, 'A jazz album by Cab Calloway', 20.99, 'Cab Calloway', 'Minnie the Moocher', '1931-03-03', false, 2, 1, 3, 8, 'https://i.scdn.co/image/ab67616d0000b27313e8308b63ffbb082e85bb01', 0, false),

    -- One O''Clock Jump
    (50, 'A jazz album by Count Basie', 21.99, 'Count Basie', 'One O''Clock Jump', '1937-07-07', false, 2, 1, 3, 8, 'https://i.scdn.co/image/ab67616d0000b2739f9f4fa2b478764e97ac15f4', 0, false),

    -- Strange Fruit
    (50, 'A jazz album by Billie Holiday', 22.99, 'Billie Holiday', 'Strange Fruit', '1939-04-20', false, 2, 1, 3, 8, 'https://i.scdn.co/image/ab67616d0000b27342eaf8e2d503d28e99ad03a1', 10, true),

    -- In the Mood
    (50, 'A jazz album by Glenn Miller', 18.99, 'Glenn Miller', 'In the Mood', '1939-09-15', false, 2, 1, 3, 8, 'https://i.scdn.co/image/ab67616d0000b273bbb26699bc7cb61bf07a57fd', 0, false),

    -- Pet Sounds
    (50, 'A legendary rock album by The Beach Boys', 26.99, 'The Beach Boys', 'Pet Sounds', '1966-05-16', false, 1, 1, 3, 9, 'https://i.scdn.co/image/ab67616d0000b27350eb0c521d2d3b2f599bff04', 0, false),

    -- Come Fly with Me
    (50, 'A pop classic by Frank Sinatra', 22.99, 'Frank Sinatra', 'Come Fly with Me', '1958-01-06', false, 3, 1, 3, 9, 'https://i.scdn.co/image/ab67616d0000b273068a5559744d17bd5e871740', 0, false),

    -- Californication
    (50, 'A rock album by Red Hot Chili Peppers', 27.99, 'Red Hot Chili Peppers', 'Californication', '1999-06-08', false, 1, 1, 3, 9, 'https://i.scdn.co/image/ab67616d0000b273a9249ebb15ca7a5b75f16a90', 30, true),

    -- Licensed to Ill
    (50, 'A hip hop album by Beastie Boys', 23.99, 'Beastie Boys', 'Licensed to Ill', '1986-11-15', false, 5, 1, 3, 9, 'https://i.scdn.co/image/ab67616d0000b273a7ea08ab3914c5fb2084a8ac', 0, false),

    -- No Fences
    (50, 'A country album by Garth Brooks', 22.99, 'Garth Brooks', 'No Fences', '1990-08-27', false, 6, 1, 3, 9, 'https://i.scdn.co/image/ab67616d0000b2730a82ac9e1a8e509dd3d9252f', 0, false),

    -- 1989
    (50, 'A pop album by Taylor Swift', 24.99, 'Taylor Swift', '1989', '2014-10-27', false, 3, 1, 3, 10, 'https://i.scdn.co/image/ab67616d0000b273dc2bacae1dca83d26e2b1949', 10, true),

    -- After Hours
    (50, 'A modern R&B album by The Weeknd', 22.99, 'The Weeknd', 'After Hours', '2020-03-20', false, 5, 1, 3, 10, 'https://i.scdn.co/image/ab67616d0000b2738863bc11d2aa12b54f5aeb36', 0, false),

    -- The Joshua Tree
    (50, 'A rock album by U2', 23.99, 'U2', 'The Joshua Tree', '1987-03-09', false, 1, 1, 3, 10, 'https://i.scdn.co/image/ab67616d0000b273f8996a3f97e80d9d700635c3', 0, false),

    -- DAMN.
    (50, 'A hip hop album by Kendrick Lamar', 23.99, 'Kendrick Lamar', 'DAMN.', '2017-04-14', false, 5, 1, 3, 10, 'https://i.scdn.co/image/ab67616d0000b2738b52c6b9bc4e43d873869699', 0, false),

    -- Chromatica
    (50, 'A pop album by Lady Gaga', 23.99, 'Lady Gaga', 'Chromatica', '2020-05-29', false, 3, 1, 3, 10, 'https://i.scdn.co/image/ab67616d0000b2736040effba89b9b00a6f6743a', 30, true),

    -- Solar Power
    (50, 'The third studio album by Lorde', 24.99, 'Lorde', 'Solar Power', '2021-08-20', false, 3, 1, 3, 10, 'https://i.scdn.co/image/ab67616d00001e02a5603d487cfa2c30a05cdfaa', 0, false),

    -- Happier Than Ever
    (50, 'Second studio album by Billie Eilish', 22.99, 'Billie Eilish', 'Happier Than Ever', '2021-07-30', false, 3, 1, 3, 9, 'https://i.scdn.co/image/ab67616d00001e022a038d3bf875d23e4aeaa84e', 10, true),

    -- Montero
    (50, 'Debut studio album by Lil Nas X', 21.99, 'Lil Nas X', 'Montero', '2021-09-17', false, 5, 1, 3, 8, 'https://i.scdn.co/image/ab67616d00001e02be82673b5f79d9658ec0a9fd', 0, false),

    -- Certified Lover Boy
    (50, 'Sixth studio album by Drake', 25.99, 'Drake', 'Certified Lover Boy', '2021-09-03', false, 5, 1, 3, 7, 'https://i.scdn.co/image/ab67616d00001e02cd945b4e3de57edd28481a3f', 15, true),

    -- If I Can't Have Love, I Want Power
    (50, 'Fourth studio album by Halsey', 23.99, 'Halsey', 'If I Can''t Have Love, I Want Power', '2021-08-27', false, 3, 1, 3, 6, 'https://i.scdn.co/image/ab67616d00001e021f9f8d93bf43b569817af0a4', 0, false),

    -- Sometimes I Might Be Introvert
    (50, 'Fourth studio album by Little Simz', 22.99, 'Little Simz', 'Sometimes I Might Be Introvert', '2021-09-03', false, 5, 1, 3, 5, 'https://i.scdn.co/image/ab67616d00001e02aede85ed28c2237a33b63dba', 20, true),

    -- Star-Crossed
    (50, 'Fifth studio album by Kacey Musgraves', 21.99, 'Kacey Musgraves', 'Star-Crossed', '2021-09-10', false, 6, 1, 3, 4, 'https://i.scdn.co/image/ab67616d00001e024e99b9f7b53886701fa147c5', 0, false),

    -- Senjutsu
    (50, 'Seventeenth studio album by Iron Maiden', 26.99, 'Iron Maiden', 'Senjutsu', '2021-09-03', false, 8, 1, 3, 3, 'https://i.scdn.co/image/ab67616d00001e02710ebb0c7d0e81e89b947c7f', 0, false),

    -- Donda
    (50, 'Tenth studio album by Kanye West', 27.99, 'Kanye West', 'Donda', '2021-08-29', false, 5, 1, 3, 2, 'https://i.scdn.co/image/ab67616d00001e02cad190f1a73c024e5a40dddd', 25, true),

    -- Equals
    (50, 'Fifth studio album by Ed Sheeran', 24.99, 'Ed Sheeran', '=', '2021-10-29', false, 3, 1, 3, 1, 'https://i.scdn.co/image/ab67616d00001e02ef24c3fdbf856340d55cfeb2', 0, false);

INSERT INTO discs (
    vinyl_id,
    side_a,
    side_b,
    format_id,
    duration
) VALUES
    -- Columbia Records
    (
        (SELECT id FROM vinyls WHERE artist = 'Pink Floyd' AND title = 'The Wall'),
        'Track 1: In the Flesh?, Track 2: The Thin Ice, Track 3: Another Brick in the Wall, Part 1, Track 4: The Happiest Days of Our Lives, Track 5: Another Brick in the Wall, Part 2',
        'Track 1: Hey You, Track 2: Is There Anybody Out There?, Track 3: Nobody Home, Track 4: Vera, Track 5: Comfortably Numb',
        (SELECT id FROM formats WHERE format = '12-inch'),
        81 * 60  -- Duration in seconds
    ),
    (
        (SELECT id FROM vinyls WHERE artist = 'Miles Davis' AND title = 'Kind of Blue'),
        'Track 1: So What, Track 2: Freddie Freeloader, Track 3: Blue in Green',
        'Track 1: All Blues, Track 2: Flamenco Sketches',
        (SELECT id FROM formats WHERE format = '12-inch'),
        46 * 60
    ),
    (
        (SELECT id FROM vinyls WHERE artist = 'Adele' AND title = '25'),
        'Track 1: Hello, Track 2: Send My Love (To Your New Lover), Track 3: I Miss You, Track 4: When We Were Young',
        'Track 1: Remedy, Track 2: Water Under the Bridge, Track 3: River Lea, Track 4: Love in the Dark',
        (SELECT id FROM formats WHERE format = '12-inch'),
        48 * 60
    ),
    (
        (SELECT id FROM vinyls WHERE artist = 'Bruce Springsteen' AND title = 'Born to Run'),
        'Track 1: Thunder Road, Track 2: Tenth Avenue Freeze-Out, Track 3: Night',
        'Track 1: Born to Run, Track 2: She''s the One, Track 3: Meeting Across the River, Track 4: Jungleland',
        (SELECT id FROM formats WHERE format = '12-inch'),
        39 * 60
    ),
    (
        (SELECT id FROM vinyls WHERE artist = 'Bob Dylan' AND title = 'Highway 61 Revisited'),
        'Track 1: Like a Rolling Stone, Track 2: Tombstone Blues, Track 3: It Takes a Lot to Laugh, It Takes a Train to Cry',
        'Track 1: Ballad of a Thin Man, Track 2: Queen Jane Approximately, Track 3: Highway 61 Revisited',
        (SELECT id FROM formats WHERE format = '12-inch'),
        51 * 60
    ),
    -- RCA Records
    (
        (SELECT id FROM vinyls WHERE artist = 'David Bowie' AND title = 'The Rise and Fall of Ziggy Stardust'),
        'Track 1: Five Years, Track 2: Soul Love, Track 3: Moonage Daydream',
        'Track 1: Starman, Track 2: It Ain''t Easy, Track 3: Lady Stardust, Track 4: Star',
        (SELECT id FROM formats WHERE format = '12-inch'),
        38 * 60
    ),
    (
        (SELECT id FROM vinyls WHERE artist = 'Elvis Presley' AND title = 'Elvis Presley'),
        'Track 1: Blue Suede Shoes, Track 2: I''m Counting on You, Track 3: I Got a Woman',
        'Track 1: Tutti Frutti, Track 2: Tryin'' to Get to You, Track 3: I''m Gonna Sit Right Down and Cry (Over You)',
        (SELECT id FROM formats WHERE format = '12-inch'),
        28 * 60
    ),
    (
        (SELECT id FROM vinyls WHERE artist = 'Kraftwerk' AND title = 'The Man-Machine'),
        'Track 1: The Robots, Track 2: Spacelab, Track 3: Metropolis',
        'Track 1: The Model, Track 2: Neon Lights, Track 3: The Man-Machine',
        (SELECT id FROM formats WHERE format = '12-inch'),
        36 * 60
    ),
    (
        (SELECT id FROM vinyls WHERE artist = 'Foo Fighters' AND title = 'Wasting Light'),
        'Track 1: Bridge Burning, Track 2: Rope, Track 3: Dear Rosemary',
        'Track 1: White Limo, Track 2: Arlandria, Track 3: These Days',
        (SELECT id FROM formats WHERE format = '12-inch'),
        48 * 60
    ),
    (
        (SELECT id FROM vinyls WHERE artist = 'Childish Gambino' AND title = 'Because the Internet'),
        'Track 1: Crawl, Track 2: Worldstar, Track 3: Dial Up',
        'Track 1: Sweatpants, Track 2: 3005, Track 3: The Party',
        (SELECT id FROM formats WHERE format = '12-inch'),
        58 * 60
    ),
    -- Decca Records
    (
        (SELECT id FROM vinyls WHERE artist = 'Luciano Pavarotti' AND title = 'The Essential Pavarotti'),
        'Track 1: La donna è mobile, Track 2: Nessun dorma, Track 3: O Sole Mio',
        'Track 1: Ave Maria, Track 2: Granada, Track 3: Funiculì Funiculà',
        (SELECT id FROM formats WHERE format = '12-inch'),
        60 * 60
    ),
    (
        (SELECT id FROM vinyls WHERE artist = 'The Rolling Stones' AND title = 'Let It Bleed'),
        'Track 1: Gimme Shelter, Track 2: Love in Vain, Track 3: Country Honk, Track 4: Live with Me',
        'Track 1: Let It Bleed, Track 2: Midnight Rambler, Track 3: You Got the Silver, Track 4: You Can''t Always Get What You Want',
        (SELECT id FROM formats WHERE format = '12-inch'),
        42 * 60
    ),
    (
        (SELECT id FROM vinyls WHERE artist = 'Tom Jones' AND title = 'It''s Not Unusual'),
        'Track 1: It''s Not Unusual, Track 2: Memphis, Track 3: What''s New Pussycat?',
        'Track 1: I''ve Got a Heart, Track 2: The Rose, Track 3: If You Need Me',
        (SELECT id FROM formats WHERE format = '12-inch'),
        35 * 60
    ),
    (
        (SELECT id FROM vinyls WHERE artist = 'Louis Armstrong' AND title = 'Hello, Dolly!'),
        'Track 1: Hello, Dolly!, Track 2: It''s Been a Long, Long Time, Track 3: A Lot of Livin'' to Do',
        'Track 1: Someday, Track 2: A Kiss to Build a Dream On, Track 3: Blueberry Hill',
        (SELECT id FROM formats WHERE format = '12-inch'),
        38 * 60
    ),
    (
        (SELECT id FROM vinyls WHERE artist = 'John Mayall' AND title = 'Blues Breakers with Eric Clapton'),
        'Track 1: All Your Love, Track 2: Hideaway, Track 3: Little Girl',
        'Track 1: Another Man, Track 2: Double Crossing Time, Track 3: What''d I Say',
        (SELECT id FROM formats WHERE format = '12-inch'),
        37 * 60
    ),
    -- EMI Records
    (
        (SELECT id FROM vinyls WHERE artist = 'The Beatles' AND title = 'Abbey Road'),
        'Track 1: Come Together, Track 2: Something, Track 3: Maxwell''s Silver Hammer, Track 4: Oh! Darling, Track 5: Octopus''s Garden',
        'Track 1: Here Comes the Sun, Track 2: Because, Track 3: You Never Give Me Your Money, Track 4: Sun King, Track 5: The End',
        (SELECT id FROM formats WHERE format = '12-inch'),
        47 * 60
    ),
    (
        (SELECT id FROM vinyls WHERE artist = 'Daft Punk' AND title = 'Discovery'),
        'Track 1: One More Time, Track 2: Aerodynamic, Track 3: Digital Love',
        'Track 1: Harder, Better, Faster, Stronger, Track 2: Crescendolls, Track 3: Nightvision',
        (SELECT id FROM formats WHERE format = '12-inch'),
        60 * 60
    ),
    (
        (SELECT id FROM vinyls WHERE artist = 'Radiohead' AND title = 'OK Computer'),
        'Track 1: Airbag, Track 2: Paranoid Android, Track 3: Subterranean Homesick Alien',
        'Track 1: Exit Music (For a Film), Track 2: Let Down, Track 3: Karma Police',
        (SELECT id FROM formats WHERE format = '12-inch'),
        53 * 60
    ),
    (
        (SELECT id FROM vinyls WHERE artist = 'Katy Perry' AND title = 'Teenage Dream'),
        'Track 1: Teenage Dream, Track 2: Last Friday Night (T.G.I.F.), Track 3: California Gurls',
        'Track 1: Firework, Track 2: Peacock, Track 3: Circle the Drain',
        (SELECT id FROM formats WHERE format = '12-inch'),
        46 * 60
    ),
    (
        (SELECT id FROM vinyls WHERE artist = 'Iron Maiden' AND title = 'The Number of the Beast'),
        'Track 1: Invaders, Track 2: Children of the Damned, Track 3: The Prisoner',
        'Track 1: 22 Acacia Avenue, Track 2: The Number of the Beast, Track 3: Run to the Hills',
        (SELECT id FROM formats WHERE format = '12-inch'),
        40 * 60
    ),
    -- Blue Note Records
    (
        (SELECT id FROM vinyls WHERE artist = 'John Coltrane' AND title = 'Blue Train'),
        'Track 1: Blue Train, Track 2: Moment''s Notice',
        'Track 1: Locomotion, Track 2: I''m Old Fashioned, Track 3: Lazy Bird',
        (SELECT id FROM formats WHERE format = '12-inch'),
        42 * 60
    ),
    (
        (SELECT id FROM vinyls WHERE artist = 'Herbie Hancock' AND title = 'Maiden Voyage'),
        'Track 1: Maiden Voyage, Track 2: The Eye of the Hurricane',
        'Track 1: Little One, Track 2: Survival of the Fittest, Track 3: Dolphin Dance',
        (SELECT id FROM formats WHERE format = '12-inch'),
        42 * 60
    ),
    (
        (SELECT id FROM vinyls WHERE artist = 'Art Blakey' AND title = 'Moanin'''),
        'Track 1: Moanin'', Track 2: Are You Real, Track 3: Along Came Betty',
        'Track 1: The Drum Thunder Suite, Track 2: Blues March, Track 3: Come Rain or Come Shine',
        (SELECT id FROM formats WHERE format = '12-inch'),
        40 * 60
    ),
    (
        (SELECT id FROM vinyls WHERE artist = 'Thelonious Monk' AND title = 'Genius of Modern Music: Volume 1'),
        'Track 1: Round Midnight, Track 2: Off Minor, Track 3: Ruby, My Dear',
        'Track 1: Well, You Needn''t, Track 2: April in Paris, Track 3: In Walked Bud',
        (SELECT id FROM formats WHERE format = '12-inch'),
        39 * 60
    ),
    (
        (SELECT id FROM vinyls WHERE artist = 'Horace Silver' AND title = 'Song for My Father'),
        'Track 1: Song for My Father, Track 2: The Natives Are Restless Tonight',
        'Track 1: Calcutta Cutie, Track 2: Que Pasa?, Track 3: Lonely Woman',
        (SELECT id FROM formats WHERE format = '12-inch'),
        41 * 60
    ),
    -- Polydor Records
    (
        (SELECT id FROM vinyls WHERE artist = 'The Who' AND title = 'Who''s Next'),
        'Track 1: Baba O''Riley, Track 2: Bargain, Track 3: Love Ain''t for Keeping',
        'Track 1: My Wife, Track 2: The Song Is Over, Track 3: Getting in Tune, Track 4: Behind Blue Eyes',
        (SELECT id FROM formats WHERE format = '12-inch'),
        43 * 60
    ),
    (
        (SELECT id FROM vinyls WHERE artist = 'ABBA' AND title = 'Arrival'),
        'Track 1: When I Kissed the Teacher, Track 2: Dancing Queen, Track 3: My Love, My Life',
        'Track 1: Dum Dum Diddle, Track 2: Knowing Me, Knowing You, Track 3: Money, Money, Money',
        (SELECT id FROM formats WHERE format = '12-inch'),
        40 * 60
    ),
    (
        (SELECT id FROM vinyls WHERE artist = 'New Order' AND title = 'Technique'),
        'Track 1: Fine Time, Track 2: All the Way, Track 3: Love Less',
        'Track 1: Round & Round, Track 2: Guilty Partner, Track 3: Run',
        (SELECT id FROM formats WHERE format = '12-inch'),
        38 * 60
    ),
    (
        (SELECT id FROM vinyls WHERE artist = 'Cream' AND title = 'Disraeli Gears'),
        'Track 1: Strange Brew, Track 2: Sunshine of Your Love, Track 3: World of Pain',
        'Track 1: Dance the Night Away, Track 2: Blue Condition, Track 3: Tales of Brave Ulysses',
        (SELECT id FROM formats WHERE format = '12-inch'),
        41 * 60
    ),
    (
        (SELECT id FROM vinyls WHERE artist = 'Lady Gaga' AND title = 'The Fame'),
        'Track 1: Just Dance, Track 2: LoveGame, Track 3: Paparazzi',
        'Track 1: Poker Face, Track 2: Eh, Eh (Nothing Else I Can Say), Track 3: Beautiful, Dirty, Rich',
        (SELECT id FROM formats WHERE format = '12-inch'),
        54 * 60
    ),
    -- Okeh Records
    (
        (SELECT id FROM vinyls WHERE artist = 'Mamie Smith' AND title = 'Crazy Blues'),
        'Track 1: Crazy Blues, Track 2: It''s Right Here for You',
        'Track 1: Fare Thee Honey Blues',
        (SELECT id FROM formats WHERE format = '12-inch'),
        29 * 60
    ),
    (
        (SELECT id FROM vinyls WHERE artist = 'Louis Armstrong' AND title = 'West End Blues'),
        'Track 1: West End Blues, Track 2: Fireworks',
        'Track 1: Weather Bird, Track 2: Saint Louis Blues',
        (SELECT id FROM formats WHERE format = '12-inch'),
        35 * 60
    ),
    (
        (SELECT id FROM vinyls WHERE artist = 'Blind Lemon Jefferson' AND title = 'Black Snake Moan'),
        'Track 1: Black Snake Moan, Track 2: Matchbox Blues',
        'Track 1: Rising High Water Blues',
        (SELECT id FROM formats WHERE format = '12-inch'),
        31 * 60
    ),
    (
        (SELECT id FROM vinyls WHERE artist = 'Bessie Smith' AND title = 'Downhearted Blues'),
        'Track 1: Downhearted Blues, Track 2: Gulf Coast Blues',
        'Track 1: Baby Won''t You Please Come Home',
        (SELECT id FROM formats WHERE format = '12-inch'),
        33 * 60
    ),
    (
        (SELECT id FROM vinyls WHERE artist = 'Duke Ellington' AND title = 'The Mooche'),
        'Track 1: The Mooche, Track 2: Black and Tan Fantasy',
        'Track 1: Creole Love Call',
        (SELECT id FROM formats WHERE format = '12-inch'),
        34 * 60
    ),
    -- Brunswick Records
    (
        (SELECT id FROM vinyls WHERE artist = 'Benny Goodman' AND title = 'Sing, Sing, Sing'),
        'Track 1: Sing, Sing, Sing (With a Swing), Track 2: China Boy',
        'Track 1: Stompin'' at the Savoy, Track 2: Moonglow',
        (SELECT id FROM formats WHERE format = '12-inch'),
        37 * 60
    ),
    (
        (SELECT id FROM vinyls WHERE artist = 'Cab Calloway' AND title = 'Minnie the Moocher'),
        'Track 1: Minnie the Moocher, Track 2: Kickin'' the Gong Around',
        'Track 1: Reefer Man, Track 2: St. James Infirmary',
        (SELECT id FROM formats WHERE format = '12-inch'),
        36 * 60
    ),
    (
        (SELECT id FROM vinyls WHERE artist = 'Count Basie' AND title = 'One O''Clock Jump'),
        'Track 1: One O''Clock Jump, Track 2: Swingin'' the Blues',
        'Track 1: Jumpin'' at the Woodside, Track 2: Blue and Sentimental',
        (SELECT id FROM formats WHERE format = '12-inch'),
        34 * 60
    ),
    (
        (SELECT id FROM vinyls WHERE artist = 'Billie Holiday' AND title = 'Strange Fruit'),
        'Track 1: Strange Fruit, Track 2: Yesterdays',
        'Track 1: Fine and Mellow, Track 2: I Gotta Right to Sing the Blues',
        (SELECT id FROM formats WHERE format = '12-inch'),
        33 * 60
    ),
    (
        (SELECT id FROM vinyls WHERE artist = 'Glenn Miller' AND title = 'In the Mood'),
        'Track 1: In the Mood, Track 2: Tuxedo Junction',
        'Track 1: Moonlight Serenade, Track 2: Chattanooga Choo Choo',
        (SELECT id FROM formats WHERE format = '12-inch'),
        35 * 60
    ),
    -- Capitol Records
    (
        (SELECT id FROM vinyls WHERE artist = 'The Beach Boys' AND title = 'Pet Sounds'),
        'Track 1: Wouldn''t It Be Nice, Track 2: You Still Believe in Me, Track 3: That''s Not Me',
        'Track 1: God Only Knows, Track 2: I Know There''s an Answer, Track 3: Caroline, No',
        (SELECT id FROM formats WHERE format = '12-inch'),
        36 * 60
    ),
    (
        (SELECT id FROM vinyls WHERE artist = 'Frank Sinatra' AND title = 'Come Fly with Me'),
        'Track 1: Come Fly with Me, Track 2: Around the World, Track 3: Isle of Capri',
        'Track 1: Moonlight in Vermont, Track 2: Let''s Get Away from It All, Track 3: Autumn in New York',
        (SELECT id FROM formats WHERE format = '12-inch'),
        38 * 60
    ),
    (
        (SELECT id FROM vinyls WHERE artist = 'Red Hot Chili Peppers' AND title = 'Californication'),
        'Track 1: Around the World, Track 2: Parallel Universe, Track 3: Scar Tissue',
        'Track 1: Californication, Track 2: Easily, Track 3: Get on Top',
        (SELECT id FROM formats WHERE format = '12-inch'),
        56 * 60
    ),
    (
        (SELECT id FROM vinyls WHERE artist = 'Beastie Boys' AND title = 'Licensed to Ill'),
        'Track 1: Rhymin & Stealin, Track 2: The New Style, Track 3: She''s Crafty',
        'Track 1: No Sleep Till Brooklyn, Track 2: Paul Revere, Track 3: Brass Monkey',
        (SELECT id FROM formats WHERE format = '12-inch'),
        45 * 60
    ),
    (
        (SELECT id FROM vinyls WHERE artist = 'Garth Brooks' AND title = 'No Fences'),
        'Track 1: The Thunder Rolls, Track 2: New Way to Fly, Track 3: Two of a Kind, Workin'' on a Full House',
        'Track 1: Friends in Low Places, Track 2: Wild Horses, Track 3: Unanswered Prayers',
        (SELECT id FROM formats WHERE format = '12-inch'),
        48 * 60
    ),
    -- Universal Music Group
    (
        (SELECT id FROM vinyls WHERE artist = 'Taylor Swift' AND title = '1989'),
        'Track 1: Welcome to New York, Track 2: Blank Space, Track 3: Style',
        'Track 1: Out of the Woods, Track 2: Shake It Off, Track 3: Bad Blood',
        (SELECT id FROM formats WHERE format = '12-inch'),
        50 * 60
    ),
    (
        (SELECT id FROM vinyls WHERE artist = 'The Weeknd' AND title = 'After Hours'),
        'Track 1: Alone Again, Track 2: Too Late, Track 3: Hardest to Love',
        'Track 1: Scared to Live, Track 2: Snowchild, Track 3: Escape from LA',
        (SELECT id FROM formats WHERE format = '12-inch'),
        56 * 60
    ),
    (
        (SELECT id FROM vinyls WHERE artist = 'U2' AND title = 'The Joshua Tree'),
        'Track 1: Where the Streets Have No Name, Track 2: I Still Haven''t Found What I''m Looking For, Track 3: With or Without You',
        'Track 1: Bullet the Blue Sky, Track 2: Running to Stand Still, Track 3: Red Hill Mining Town',
        (SELECT id FROM formats WHERE format = '12-inch'),
        50 * 60
    ),
    (
        (SELECT id FROM vinyls WHERE artist = 'Kendrick Lamar' AND title = 'DAMN.'),
        'Track 1: BLOOD., Track 2: DNA., Track 3: YAH.',
        'Track 1: ELEMENT., Track 2: FEEL., Track 3: LOYALTY.',
        (SELECT id FROM formats WHERE format = '12-inch'),
        55 * 60
    ),
    (
        (SELECT id FROM vinyls WHERE artist = 'Lady Gaga' AND title = 'Chromatica'),
        'Track 1: Chromatica I, Track 2: Alice, Track 3: Stupid Love',
        'Track 1: Rain on Me, Track 2: Free Woman, Track 3: Fun Tonight',
        (SELECT id FROM formats WHERE format = '12-inch'),
        43 * 60
    ),
    (
        (SELECT id FROM vinyls WHERE artist = 'Lorde' AND title = 'Solar Power'),
        'Track 1: The Path, Track 2: Solar Power, Track 3: California, Track 4: Stoned at the Nail Salon',
        'Track 1: Fallen Fruit, Track 2: Secrets from a Girl, Track 3: Mood Ring, Track 4: Oceanic Feeling',
        (SELECT id FROM formats WHERE format = '12-inch'),
        43 * 60
    ),
    (
        (SELECT id FROM vinyls WHERE artist = 'Billie Eilish' AND title = 'Happier Than Ever'),
        'Track 1: Getting Older, Track 2: I Didn''t Change My Number, Track 3: Billie Bossa Nova',
        'Track 1: NDA, Track 2: Therefore I Am, Track 3: Happier Than Ever',
        (SELECT id FROM formats WHERE format = '12-inch'),
        56 * 60
    ),
    (
        (SELECT id FROM vinyls WHERE artist = 'Lil Nas X' AND title = 'Montero'),
        'Track 1: Montero (Call Me By Your Name), Track 2: Dead Right Now, Track 3: Industry Baby',
        'Track 1: That''s What I Want, Track 2: Scoop, Track 3: Lost in the Citadel',
        (SELECT id FROM formats WHERE format = '12-inch'),
        42 * 60
    ),
    (
        (SELECT id FROM vinyls WHERE artist = 'Drake' AND title = 'Certified Lover Boy'),
        'Track 1: Champagne Poetry, Track 2: Papi''s Home, Track 3: Girls Want Girls',
        'Track 1: Way 2 Sexy, Track 2: TSU, Track 3: In the Bible',
        (SELECT id FROM formats WHERE format = '12-inch'),
        86 * 60
    ),
    (
        (SELECT id FROM vinyls WHERE artist = 'Halsey' AND title = 'If I Can''t Have Love, I Want Power'),
        'Track 1: The Tradition, Track 2: Bells in Santa Fe, Track 3: Easier than Lying',
        'Track 1: Girl is a Gun, Track 2: You asked for this, Track 3: Honey',
        (SELECT id FROM formats WHERE format = '12-inch'),
        43 * 60
    ),
    (
        (SELECT id FROM vinyls WHERE artist = 'Little Simz' AND title = 'Sometimes I Might Be Introvert'),
        'Track 1: Introvert, Track 2: Woman, Track 3: Two Worlds Apart',
        'Track 1: I Love You, I Hate You, Track 2: Little Q, Pt. 2, Track 3: Gems',
        (SELECT id FROM formats WHERE format = '12-inch'),
        65 * 60
    ),
    (
        (SELECT id FROM vinyls WHERE artist = 'Kacey Musgraves' AND title = 'Star-Crossed'),
        'Track 1: Star-Crossed, Track 2: Good Wife, Track 3: Cherry Blossom',
        'Track 1: Simple Times, Track 2: Justified, Track 3: Angel',
        (SELECT id FROM formats WHERE format = '12-inch'),
        47 * 60
    ),
    (
        (SELECT id FROM vinyls WHERE artist = 'Iron Maiden' AND title = 'Senjutsu'),
        'Track 1: Senjutsu, Track 2: Stratego, Track 3: The Writing on the Wall',
        'Track 1: Lost in a Lost World, Track 2: Days of Future Past, Track 3: The Time Machine',
        (SELECT id FROM formats WHERE format = '12-inch'),
        82 * 60
    ),
    (
        (SELECT id FROM vinyls WHERE artist = 'Kanye West' AND title = 'Donda'),
        'Track 1: Jail, Track 2: God Breathed, Track 3: Off the Grid',
        'Track 1: Hurricane, Track 2: Praise God, Track 3: Jonah',
        (SELECT id FROM formats WHERE format = '12-inch'),
        108 * 60
    ),
    (
        (SELECT id FROM vinyls WHERE artist = 'Ed Sheeran' AND title = '='),
        'Track 1: Tides, Track 2: Shivers, Track 3: First Times',
        'Track 1: Bad Habits, Track 2: Overpass Graffiti, Track 3: The Joker and the Queen',
        (SELECT id FROM formats WHERE format = '12-inch'),
        48 * 60
    );