export interface BaseEntity {
    id: number;
    created_at?: Date;
}

export interface Location extends BaseEntity {
    country: string;
    region?: string;
}
  
export interface Customer extends BaseEntity {
    username: string;
    password_hash: string;
    email: string;
    phone_number?: string;
    payment_details?: string;
    date_of_birth?: Date;
    street_address: string;
    city: string;
    location_id: number; // foreign key reference to locations
}

export interface Session extends BaseEntity {
    customer_id: number; // foreign key reference to customers
    expires_at: string;
}

export interface Genre extends BaseEntity {
    genre: string;
}

export interface Condition extends BaseEntity {
    condition: string;
}

export interface PriceRange extends BaseEntity {
    range_start: number;
    range_end: number;
    price_range: string;
}

export interface CollectionType extends BaseEntity {
    collection_type: string;
}

export interface NewRelease extends BaseEntity {
    threshold_months: number;
    new_release: string;
}

export interface TimePeriod extends BaseEntity {
    period_start: number;
    period_end: number;
    time_period: string;
}

export interface Label extends BaseEntity {
    label: string;
}

export interface Vinyl extends BaseEntity {
    stock: number;
    description?: string;
    price: number;
    artist: string;
    title: string;
    release_date?: Date;
    limited_edition: boolean;
    genre_id: number; // foreign key to genres
    condition_id: number; // foreign key to conditions
    price_range_id: number; // foreign key to price_ranges
    collection_type_id: number; // foreign key to collection_types
    new_release: boolean;
    time_period_id: number; // foreign key to time_periods
    label_id: number; // foreign key to labels
    image_url?: string;
    discount?: number;
    on_sale: boolean;
}

export interface Format extends BaseEntity {
    format: string;
}

export interface Disc extends BaseEntity {
    vinyl_id: number; // foreign key to vinyls
    image_url?: string;
    side_a?: string;
    side_b?: string;
    format_id?: number; // foreign key to formats
    duration?: number;
}

export interface Status extends BaseEntity {
    status: string;
}

export interface ShippingOption extends BaseEntity {
    shipping_option: string;
    price: number;
    lead_time_days?: Date;
}

export interface Transaction extends BaseEntity {
    date: Date;
    status_id?: number; // foreign key to statuses
    delivery_time?: string;
    is_sell: boolean;
    transaction_number: string;
    customer_id?: number; // foreign key to customers
    tracking_number?: number;
    shipping_options_id?: number; // foreign key to shipping_options
}

export interface Review extends BaseEntity {
    score: number;
    description?: string;
    vinyl_id?: number; // foreign key to vinyls
    transaction_id?: number; // foreign key to transactions
}

export interface TransactionVinyl extends BaseEntity {
    transactions_id: number; // foreign key to transactions
    vinyl_id: number; // foreign key to vinyls
}

export interface ShippingLocation extends BaseEntity {
    shipping_options_id: number; // foreign key to shipping_options
    location_id: number; // foreign key to locations
}