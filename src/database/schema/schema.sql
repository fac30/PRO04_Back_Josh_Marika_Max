CREATE TABLE locations (
  id SERIAL PRIMARY KEY,
  country VARCHAR NOT NULL DEFAULT 'United Kingdom',
  region VARCHAR UNIQUE NULL,
  created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE customers (
  id SERIAL PRIMARY KEY,
  username VARCHAR NOT NULL UNIQUE,
  password_hash VARCHAR NOT NULL,
  email VARCHAR NOT NULL UNIQUE,
  phone_number VARCHAR,
  payment_details VARCHAR,
  date_of_birth TIMESTAMP,
  street_address VARCHAR NOT NULL,
  city VARCHAR NOT NULL,
  location_id INTEGER REFERENCES locations NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE sessions (
  id SERIAL PRIMARY KEY,
  customer_id INTEGER REFERENCES customers(id) NOT NULL,
  created_at TIMESTAMP DEFAULT NOW(),
  expires_at TIMESTAMP DEFAULT NOW() + INTERVAL '7 days'
);

CREATE TABLE genres (
  id SERIAL PRIMARY KEY,
  genre VARCHAR NOT NULL UNIQUE
);

CREATE TABLE conditions (
  id SERIAL PRIMARY KEY,
  condition VARCHAR NOT NULL UNIQUE
);

CREATE TABLE price_ranges (
  id SERIAL PRIMARY KEY,
  range_start INTEGER NOT NULL UNIQUE,
  range_end INTEGER NOT NULL UNIQUE,
  price_range VARCHAR NOT NULL UNIQUE
);

CREATE TABLE collection_types (
  id SERIAL PRIMARY KEY,
  collection_type VARCHAR NOT NULL UNIQUE
);

CREATE TABLE new_release (
  id SERIAL PRIMARY KEY,
  threshold_months INTEGER NOT NULL UNIQUE,
  new_release BOOLEAN DEFAULT true
);

CREATE TABLE time_periods (
  id SERIAL PRIMARY KEY,
  period_start INTEGER NOT NULL UNIQUE,
  period_end INTEGER NOT NULL UNIQUE,
  time_period VARCHAR NOT NULL UNIQUE
);

CREATE TABLE labels (
  id SERIAL PRIMARY KEY,
  label VARCHAR NOT NULL UNIQUE
);

CREATE TABLE vinyls (
  id SERIAL PRIMARY KEY,
  stock INTEGER NOT NULL,
  description VARCHAR,
  price FLOAT NOT NULL,
  artist VARCHAR NOT NULL,
  title VARCHAR NOT NULL,
  release_date TIMESTAMP,
  limited_edition BOOLEAN DEFAULT false,
  genre_id INTEGER REFERENCES genres NOT NULL,
  condition_id INTEGER REFERENCES conditions NOT NULL,
  price_range_id INTEGER REFERENCES price_ranges NOT NULL,
  collection_type_id INTEGER REFERENCES collection_types NOT NULL,
  new_release BOOLEAN NOT NULL,
  time_period_id INTEGER REFERENCES time_periods NOT NULL,
  label_id INTEGER REFERENCES labels NOT NULL,
  image_url VARCHAR,
  discount INTEGER DEFAULT 0,
  on_sale BOOLEAN NOT NULL DEFAULT false
);

CREATE TABLE formats (
  id SERIAL PRIMARY KEY,
  format VARCHAR NOT NULL UNIQUE
);

CREATE TABLE discs (
  id SERIAL PRIMARY KEY,
  vinyl_id INTEGER REFERENCES vinyls,
  image_url VARCHAR,
  side_a VARCHAR,
  side_b VARCHAR,
  format_id INTEGER REFERENCES formats,
  duration INTEGER
);

CREATE TABLE statuses (
  id SERIAL PRIMARY KEY,
  status VARCHAR NOT NULL UNIQUE
);

CREATE TABLE shipping_options (
  id SERIAL PRIMARY KEY,
  shipping_option VARCHAR NOT NULL UNIQUE,
  price FLOAT NOT NULL,
  lead_time_days INTEGER
);

CREATE TABLE shipping_locations (
  shipping_option_id INTEGER REFERENCES shipping_options,
  location_id INTEGER REFERENCES locations,
  PRIMARY KEY (shipping_option_id, location_id)
);

CREATE TABLE transactions (
  id SERIAL PRIMARY KEY,
  date TIMESTAMP NOT NULL,
  status_id INTEGER REFERENCES statuses,
  delivery_date TIMESTAMP DEFAULT NOW() + INTERVAL '4 days',
  is_sell BOOLEAN NOT NULL DEFAULT true,
  transaction_number VARCHAR NOT NULL UNIQUE,
  customer_id INTEGER REFERENCES customers,
  created_at TIMESTAMP DEFAULT NOW(),
  tracking_number INTEGER,
  shipping_option_id INTEGER REFERENCES shipping_options
);

CREATE TABLE reviews (
  id SERIAL PRIMARY KEY,
  score INTEGER NOT NULL,
  description VARCHAR,
  vinyl_id INTEGER REFERENCES vinyls,
  created_at TIMESTAMP DEFAULT NOW(),
  transaction_id INTEGER REFERENCES transactions
);

CREATE TABLE transactions_vinyls (
  transaction_id INTEGER REFERENCES transactions,
  vinyl_id INTEGER REFERENCES vinyls,
  PRIMARY KEY (transaction_id, vinyl_id)
);