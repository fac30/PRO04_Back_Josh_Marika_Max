# PRO04_Back_Josh_Marika_Max
Back End For E-commerce Site Selling Vinyl Store

## Database Schema

This document describes the latest schema of the database for the vinyl records management application. The database consists of several tables representing different entities, including customers, vinyl records, reviews, and transactions.

### Schema Diagram

![database schema](./docs/database-schema.svg)

### Schema Breakdown

#### 1. Locations Table
- **id**: Integer, primary key.
- **country**: Varchar, country name.
- **region**: Varchar, region within the country.
- **created_at**: Timestamp, date and time when the location was added.

#### 2. Customers Table
- **id**: Integer, primary key.
- **username**: Varchar, the customer's username.
- **password**: Varchar, the customer's password.
- **email**: Varchar, the customer's email address.
- **phone_number**: Varchar, contact number for the customer.
- **payment_details**: Varchar, customer's payment details.
- **date_of_birth**: Timestamp, the customer's date of birth.
- **street_address**: Varchar, street address of the customer.
- **location_id**: Integer, references the **locations** table.
- **created_at**: Timestamp, date and time when the customer was created.

#### 3. Genres Table
- **id**: Integer, primary key.
- **genre**: Varchar, genre of the vinyl.

#### 4. Condition Table
- **id**: Integer, primary key.
- **condition**: Varchar, condition of the vinyl (e.g., new, used).

#### 5. Price Range Table
- **id**: Integer, primary key.
- **price_range**: Varchar, price range category.

#### 6. Album or Single Table
- **id**: Integer, primary key.
- **album_or_single**: Varchar, indicates if the vinyl is an album or a single.

#### 7. New Release Table
- **id**: Integer, primary key.
- **new_release**: Varchar, information about new releases.

#### 8. Time Range Table
- **id**: Integer, primary key.
- **time_range**: Varchar, time range category.

#### 9. Label Table
- **id**: Integer, primary key.
- **label**: Varchar, name of the record label.

#### 10. Vinyls Table
- **id**: Integer, primary key.
- **stock**: Integer, number of vinyl records in stock.
- **description**: Varchar, description of the vinyl.
- **price**: Float, price of the vinyl.
- **artist**: Varchar, name of the artist.
- **title**: Varchar, title of the vinyl.
- **release_date**: Timestamp, release date of the vinyl.
- **limited_edition**: Boolean, indicates if the vinyl is a limited edition.
- **genre_id**: Integer, references the **genres** table.
- **condition_id**: Integer, references the **condition** table.
- **price_range_id**: Integer, references the **price_range** table.
- **album_or_single_id**: Integer, references the **album_or_single** table.
- **new_release_id**: Boolean, indicates if it is a new release.
- **time_range_id**: Integer, references the **time_range** table.
- **label_id**: Integer, references the **label** table.
- **discount**: Integer, discount on the vinyl.
- **on_sale**: Boolean, indicates if the vinyl is on sale.

#### 11. Format Table
- **id**: Integer, primary key.
- **format**: Varchar, format of the disc (e.g., LP, EP).

#### 12. Discs Table
- **id**: Integer, primary key.
- **vinyl_id**: Integer, references the **vinyls** table.
- **side_a**: Varchar, contents of side A of the disc.
- **side_b**: Varchar, contents of side B of the disc.
- **format_id**: Integer, references the **format** table.
- **duration**: Integer, duration of the disc.

#### 13. Status Table
- **id**: Integer, primary key.
- **status**: Varchar, status of the transaction.

#### 14. Transactions Table
- **id**: Integer, primary key.
- **date**: Timestamp, date of the transaction.
- **status_id**: Integer, references the **status** table.
- **delivery_time**: Interval, estimated delivery time.
- **buy_or_sell**: Varchar, indicates if it is a buy or sell transaction.
- **transaction_number**: Varchar, unique transaction identifier.
- **customer_id**: Integer, references the **customers** table.
- **created_at**: Timestamp, date and time when the transaction was created.
- **tracking_number**: Integer, tracking number for delivery.

#### 15. Reviews Table
- **id**: Integer, primary key.
- **score**: Integer, rating score given by the customer.
- **description**: Varchar, review description.
- **vinyl_id**: Integer, references the **vinyls** table.
- **created_at**: Timestamp, date and time when the review was created.
- **transaction_id**: Integer, references the **transactions** table.

#### 16. Transactions Vinyls Table
- **id**: Integer, primary key.
- **transactions_id**: Integer, references the **transactions** table.
- **vinyl_id**: Integer, references the **vinyls** table.

#### 17. Shipping Options Table
- **id**: Integer, primary key.
- **price**: Float, price of the shipping option.
- **lead_time**: Timestamp, estimated lead time for delivery.
- **location_id**: Integer, references the **locations** table.

#### 18. Deliveries Table
- **id**: Integer, primary key.
- **tracking_number**: Varchar, tracking number for the delivery.
- **transaction_id**: Integer, references the **transactions** table.
- **shipping_id**: Integer, references the **shipping_options** table.

#### 19. Shipping Locations Table
- **id**: Integer, primary key.
- **shipping_options_id**: Integer, references the **shipping_options** table.
- **location_id**: Integer, references the **locations** table.

#### 20. Shopping Cart Table
- **id**: Integer, primary key.
- **vinyl_id**: Integer, references the **vinyls** table.
- **quantity**: Integer, number of vinyls in the shopping cart.
- **customer_id**: Integer, references the **customers** table.

#### 21. Shopping Vinyls Table
- **id**: Integer, primary key.
- **shopping_cart_id**: Integer, references the **shopping_cart** table.
- **vinyl_id**: Integer, references the **vinyls** table.


