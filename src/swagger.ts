import swaggerJsdoc from 'swagger-jsdoc'
import swaggerUi from 'swagger-ui-express'
import { Express } from 'express'

const swaggerOptions = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Vinyl Store API',
            version: '1.0.0',
            description: 'API documentation for the Vinyl Store backend',
        },
        components: {
            schemas: {
                Customer: {
                    type: 'object',
                    properties: {
                        id: { type: 'integer' },
                        email: { type: 'string' },
                        username: { type: 'string' },
                        phone_number: { type: 'string', nullable: true },
                        date_of_birth: { type: 'string', format: 'date', nullable: true },
                        street_address: { type: 'string' },
                        city: { type: 'string' },
                        location_id: { type: 'integer' },
                    },
                },
                CustomerWithPassword: {
                    allOf: [
                        { $ref: '#/components/schemas/Customer' },
                        {
                            type: 'object',
                            properties: {
                                password_hash: { type: 'string' },
                            },
                        },
                    ],
                },
                Vinyl: {
                    type: 'object',
                    properties: {
                        id: { type: 'integer' },
                        artist: { type: 'string' },
                        title: { type: 'string' },
                        release_date: { type: 'string', format: 'date-time' },
                        stock: { type: 'integer' },
                        description: { type: 'string', nullable: true },
                        price: { type: 'number' },
                        genre_id: { type: 'integer' },
                        genres: {
                            type: 'object',
                            properties: {
                                genre: { type: 'string' },
                            },
                        },
                        condition_id: { type: 'integer' },
                        conditions: {
                            type: 'object',
                            properties: {
                                condition: { type: 'string' },
                            },
                        },
                        label_id: { type: 'integer' },
                        labels: {
                            type: 'object',
                            properties: {
                                label: { type: 'string' },
                            },
                        },
                        price_range_id: { type: 'integer' },
                        price_ranges: {
                            type: 'object',
                            properties: {
                                price_range: { type: 'string' },
                            },
                        },
                        time_period_id: { type: 'integer' },
                        time_periods: {
                            type: 'object',
                            properties: {
                                time_period: { type: 'string' },
                            },
                        },
                        collection_type_id: { type: 'integer' },
                        collection_types: {
                            type: 'object',
                            properties: {
                                collection_type: { type: 'string' },
                            },
                        },
                        discount: { type: 'integer' },
                        on_sale: { type: 'boolean' },
                        limited_edition: { type: 'boolean' },
                        image_url: { type: 'string', nullable: true },
                    },
                },
                Transaction: {
                    type: 'object',
                    properties: {
                        id: { type: 'integer' },
                        transaction_number: { type: 'string' },
                        customer_id: { type: 'integer' },
                        status_id: { type: 'integer' },
                        date: { type: 'string', format: 'date-time' },
                        delivery_date: { type: 'string', format: 'date-time' },
                        is_sell: { type: 'boolean' },
                        tracking_number: { type: 'integer' },
                        shipping_option_id: { type: 'integer' },
                        shipping_options: {
                            type: 'object',
                            items: {
                                $ref: '#/components/schemas/ShippingOption',
                            },
                        },
                        vinyls: {
                            type: 'array',
                            items: {
                                $ref: '#/components/schemas/Vinyl',
                            },
                        },
                    },
                },
                ShippingOption: {
                    type: 'object',
                    properties: {
                        id: { type: 'integer' },
                        shipping_option: { type: 'string' },
                        price: { type: 'number' },
                        lead_time_days: { type: 'integer' },
                        locations: {
                            type: 'array',
                            properties: {
                                region: { type: 'string' },
                                country: { type: 'string' },
                            },
                        },
                    },
                },
            },
        },
        paths: {
            '/register': {
                post: {
                    summary: 'Register a new user',
                    description: 'Creates a new user account in the customers table.',
                    requestBody: {
                        required: true,
                        content: {
                            'application/json': {
                                schema: {
                                    type: 'object',
                                    properties: {
                                        email: { type: 'string' },
                                        username: { type: 'string' },
                                        password: { type: 'string' },
                                        street_address: { type: 'string' },
                                        city: { type: 'string' },
                                        location_id: { type: 'integer' },
                                    },
                                    required: ['email', 'username', 'password', 'street_address', 'city', 'location_id'],
                                },
                            },
                        },
                    },
                    responses: {
                        201: {
                            description: 'User registered successfully.',
                            content: {
                                'application/json': {
                                    schema: { $ref: '#/components/schemas/Customer' },
                                },
                            },
                        },
                        400: {
                            description: 'Invalid input or registration error.',
                        },
                    },
                },
            },
            '/login': {
                post: {
                    summary: 'Log in a user',
                    description: 'Authenticates a user and starts a session. Returns customer data excluding password_hash.',
                    requestBody: {
                        required: true,
                        content: {
                            'application/json': {
                                schema: {
                                    type: 'object',
                                    properties: {
                                        username: { type: 'string' },
                                        password: { type: 'string' },
                                    },
                                    required: ['username', 'password'],
                                },
                            },
                        },
                    },
                    responses: {
                        200: {
                            description: 'Login successful.',
                            content: {
                                'application/json': {
                                    schema: {
                                        type: 'object',
                                        properties: {
                                            message: { type: 'string', example: 'Login successful' },
                                            customer: { $ref: '#/components/schemas/Customer' },
                                        },
                                    },
                                },
                            },
                        },
                        400: {
                            description: 'Invalid login credentials.',
                        },
                    },
                },
            },
            '/logout': {
                delete: {
                    summary: 'Log out a user',
                    description: 'Ends the user session.',
                    responses: {
                        200: {
                            description: 'Logged out successfully.',
                        },
                        400: {
                            description: 'User is not logged in.',
                        },
                    },
                },
            },
            '/checkSession': {
                get: {
                    summary: 'Check if a user is logged in',
                    description: 'Verifies if a user session is active.',
                    responses: {
                        200: {
                            description: 'User is logged in.',
                            content: {
                                'application/json': {
                                    schema: {
                                        type: 'object',
                                        properties: {
                                            loggedIn: { type: 'boolean' },
                                            user: { $ref: '#/components/schemas/Customer' },
                                        },
                                    },
                                },
                            },
                        },
                        401: {
                            description: 'User is not logged in.',
                        },
                    },
                },
            },
            '/vinyls': {
                get: {
                    summary: 'Get all vinyl records',
                    description: 'Retrieves all vinyl records from the vinyls table.',
                    responses: {
                        200: {
                            description: 'A list of vinyl records.',
                            content: {
                                'application/json': {
                                    schema: {
                                        type: 'array',
                                        items: { $ref: '#/components/schemas/Vinyl' },
                                    },
                                },
                            },
                        },
                        500: {
                            description: 'Error fetching vinyls data.',
                        },
                    },
                },
            },
            '/shipping-options/{id}': {
                get: {
                    summary: 'Get shipping options',
                    description: 'Fetches shipping options from the shipping_options table.',
                    parameters: [
                        {
                            name: 'id',
                            in: 'path',
                            required: false,
                            schema: { type: 'integer' },
                        },
                    ],
                    responses: {
                        200: {
                            description: 'A list of shipping options or a single option if ID is provided.',
                            content: {
                                'application/json': {
                                    schema: {
                                        type: 'array',
                                        items: { $ref: '#/components/schemas/ShippingOption' },
                                    },
                                },
                            },
                        },
                        500: {
                            description: 'Error fetching shipping options.',
                        },
                    },
                },
            },
            '/transactions': {
                get: {
                    summary: 'Get all transactions for a customer',
                    description: 'Fetches all transactions for a given customer ID and optional status.',
                    parameters: [
                        {
                            name: 'customer_id',
                            in: 'query',
                            required: true,
                            schema: { type: 'integer' },
                        },
                        {
                            name: 'status_id',
                            in: 'query',
                            required: false,
                            schema: { type: 'integer' },
                        },
                    ],
                    responses: {
                        200: {
                            description: 'A list of transactions for the specified customer.',
                            content: {
                                'application/json': {
                                    schema: {
                                        type: 'array',
                                        items: { $ref: '#/components/schemas/Transaction' },
                                    },
                                },
                            },
                        },
                        400: {
                            description: 'Invalid customer ID or status ID.',
                        },
                        500: {
                            description: 'Error fetching transactions.',
                        },
                    },
                },
            },
            '/status/{status}/{customer_id}': {
                get: {
                    summary: 'Get transactions by status',
                    description: 'Fetches transactions based on status and optional customer ID.',
                    parameters: [
                        {
                            name: 'status',
                            in: 'path',
                            required: true,
                            schema: { type: 'string' },
                        },
                        {
                            name: 'customer_id',
                            in: 'path',
                            required: false,
                            schema: { type: 'integer' },
                        },
                    ],
                    responses: {
                        200: {
                            description: 'A list of transactions filtered by status.',
                            content: {
                                'application/json': {
                                    schema: {
                                        type: 'array',
                                        items: { $ref: '#/components/schemas/Transaction' },
                                    },
                                },
                            },
                        },
                        500: {
                            description: 'Error fetching transactions by status.',
                        },
                    },
                },
            },
        },
    },
    apis: [],
}

const swaggerDocs = swaggerJsdoc(swaggerOptions)

export default (app: Express) => {
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs))
}
