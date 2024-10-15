# PRO04_Back_Josh_Marika_Max
Back End For E-commerce Site Selling Vinyl Store

## Database Schema

```mermaid
graph LR
  customers -->|location_id| locations
  customers -->|customer_id| transactions
  customers -->|customer_id| shopping_cart
  vinyls -->|vinyl_id| transactions_vinyls
  vinyls -->|genre_id| genres
  vinyls -->|condition_id| condition
  vinyls -->|price_range_id| price_range
  vinyls -->|album_or_single_id| album_or_single
  vinyls -->|new_release_id| new_release
  vinyls -->|time_range_id| time_range
  vinyls -->|label_id| label
  vinyls -->|vinyl_id| reviews
  vinyls -->|vinyl_id| shopping_vinyls
  discs -->|vinyl_id| vinyls
  discs -->|format_id| format
  format -->|id| discs
  label -->|id| vinyls
  reviews -->|transaction_id| transactions
  reviews -->|vinyl_id| vinyls
  transactions -->|transactions_id| transactions_vinyls
  transactions -->|transaction_id| deliveries
  transactions -->|customer_id| customers
  transactions -->|shipping_id| shipping_options
  transactions -->|status_id| status
  deliveries -->|shipping_id| shipping_options
  shipping_options -->|location_id| locations
  shipping_locations -->|shipping_options_id| shipping_options
  shipping_locations -->|location_id| locations
  shopping_cart -->|customer_id| customers
  shopping_cart -->|vinyl_id| shopping_vinyls
  shopping_cart -->|shopping_cart_id| shopping_vinyls
  shopping_vinyls -->|vinyl_id| vinyls
  ```
![database schema](./docs/database-schema.svg)
