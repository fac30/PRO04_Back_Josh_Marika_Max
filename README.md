# FHR API

Back End For E-commerce Site Selling Vinyl Store

## Team

### Marika
Scrum Manager

### Josh
DevOps

### Max
QA

## Database Schema

This document describes the latest schema of the database for the vinyl records shop Font Hill Records. The database consists of several tables representing different entities, including customers, vinyl records, reviews, and transactions.

### Schema Diagram

![database schema](./docs/database-schema.svg)

### Schema Breakdown

#### 1. Locations Table
- **id**: Integer, primary key.
- **country**: Varchar, country name (default is 'United Kingdom').
- **region**: Varchar, unique region within the country.
- **created_at**: Timestamp, date and time when the location was added (default is now).

#### 2. Customers Table
- **id**: Integer, primary key.
- **username**: Varchar, the customer's username (unique).
- **password**: Varchar, the customer's password.
- **email**: Varchar, the customer's email address (unique).
- **phone_number**: Varchar, contact number for the customer.
- **payment_details**: Varchar, customer's payment details.
- **date_of_birth**: Timestamp, the customer's date of birth.
- **street_address**: Varchar, street address of the customer.
- **location_id**: Integer, references the **locations** table (not null).
- **created_at**: Timestamp, date and time when the customer was created (default is now).

#### 3. Genres Table
- **id**: Integer, primary key.
- **genre**: Varchar, genre of the vinyl (unique).

#### 4. Conditions Table
- **id**: Integer, primary key.
- **condition**: Varchar, condition of the vinyl (e.g., new, used) (unique).

#### 5. Price Ranges Table
- **id**: Integer, primary key.
- **range_start**: Integer, starting value of the price range (unique).
- **range_end**: Integer, ending value of the price range (unique).
- **price_range**: Varchar, description of the price range (unique).

#### 6. Collection Types Table
- **id**: Integer, primary key.
- **collection_type**: Varchar, type of the collection (e.g., album, single) (unique).

#### 7. New Release Table
- **id**: Integer, primary key.
- **threshold_months**: Integer, threshold in months to determine if the release is new (unique).
- **new_release**: Varchar, description of the new release status (unique).

#### 8. Time Periods Table
- **id**: Integer, primary key.
- **period_start**: Integer, starting value of the time period (unique).
- **period_end**: Integer, ending value of the time period (unique).
- **time_range**: Varchar, description of the time range (unique).

#### 9. Labels Table
- **id**: Integer, primary key.
- **label**: Varchar, name of the record label (unique).

#### 10. Vinyls Table
- **id**: Integer, primary key.
- **stock**: Integer, number of vinyl records in stock (not null).
- **description**: Varchar, description of the vinyl.
- **price**: Float, price of the vinyl (not null).
- **artist**: Varchar, name of the artist (not null).
- **title**: Varchar, title of the vinyl (not null).
- **release_date**: Timestamp, release date of the vinyl.
- **limited_edition**: Boolean, indicates if the vinyl is a limited edition (default is false).
- **genre_id**: Integer, references the **genres** table (not null).
- **condition_id**: Integer, references the **conditions** table (not null).
- **price_range_id**: Integer, references the **price_ranges** table (not null).
- **collection_type_id**: Integer, references the **collection_types** table (not null).
- **new_release_id**: Boolean, indicates if it is a new release (not null).
- **time_period_id**: Integer, references the **time_periods** table (not null).
- **label_id**: Integer, references the **labels** table (not null).
- **image_url**: Varchar, URL of the vinyl image.
- **discount**: Integer, discount on the vinyl (default is 0).
- **on_sale**: Boolean, indicates if the vinyl is on sale (not null, default is false).

#### 11. Formats Table
- **id**: Integer, primary key.
- **format**: Varchar, format of the disc (e.g., LP, EP) (unique).

#### 12. Discs Table
- **id**: Integer, primary key.
- **vinyl_id**: Integer, references the **vinyls** table.
- **side_a**: Varchar, contents of side A of the disc.
- **side_b**: Varchar, contents of side B of the disc.
- **format_id**: Integer, references the **formats** table.
- **duration**: Integer, duration of the disc.

#### 13. Statuses Table
- **id**: Integer, primary key.
- **status**: Varchar, status of the transaction (unique).

#### 14. Shipping Options Table
- **id**: Integer, primary key.
- **price**: Float, price of the shipping option (not null).
- **lead_time**: Timestamp, estimated lead time for delivery.
- **location_id**: Integer, references the **locations** table.

#### 15. Transactions Table
- **id**: Integer, primary key.
- **date**: Timestamp, date of the transaction (not null).
- **status_id**: Integer, references the **statuses** table.
- **delivery_time**: Interval, estimated delivery time.
- **is_sell**: Boolean, indicates if it is a sell transaction (not null, default is true).
- **transaction_number**: Varchar, unique transaction identifier (not null).
- **customer_id**: Integer, references the **customers** table.
- **created_at**: Timestamp, date and time when the transaction was created (default is now).
- **tracking_number**: Integer, tracking number for delivery.
- **shipping_options_id**: Integer, references the **shipping_options** table.

#### 16. Reviews Table
- **id**: Integer, primary key.
- **score**: Integer, rating score given by the customer (not null).
- **description**: Varchar, review description.
- **vinyl_id**: Integer, references the **vinyls** table.
- **created_at**: Timestamp, date and time when the review was created (default is now).
- **transaction_id**: Integer, references the **transactions** table.

#### 17. Transactions Vinyls Table
- **id**: Integer, primary key.
- **transactions_id**: Integer, references the **transactions** table (not null).
- **vinyl_id**: Integer, references the **vinyls** table (not null).

#### 18. Shipping Locations Table
- **id**: Integer, primary key.
- **shipping_options_id**: Integer, references the **shipping_options** table.
- **location_id**: Integer, references the **locations** table.


## Deployment

### AWS EC2 Deployment via CDK

#### CDK Setup
The `Pro04BackendCdkStack` folder in this repository contains the AWS CDK configuration for deploying the backend on an EC2 instance. Key configurations include:
- **Instance Type**: Define the EC2 instance size based on expected project load.
- **Security Group**: Configures inbound/outbound rules, such as allowing inbound traffic on the specified `PORT`.
- **IAM Roles and Permissions**: Manages access permissions required for the application.

#### Environment Variables
Create a `.env` file in the root directory with any required environment variables, such as:
- **PORT**: Port number on which the server will run (e.g., `PORT=3000`).
- **Database URL**: Database connection string or credentials.
- **JWT_SECRET**: Secret key for authentication, if applicable.

#### Build and Deploy Commands

1. **Build the Project**:
   ```
   npm run build
   ```

#### Deploy Using AWS CDK:

```cdk deploy```

Start the server on the specified port:

```npm start```



