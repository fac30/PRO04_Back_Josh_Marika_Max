import axios from 'axios';

const BASE_URL = 'http://localhost:3000'; // Replace with your actual base URL

async function populateDatabase() {
  try {
    // Insert some customers
    const customers = [
      {
        username: 'john_doe',
        password_hash: 'hashed_password_1',
        email: 'john@example.com',
        phone_number: '+123456789',
        payment_details: 'VISA **** **** **** 1234',
        date_of_birth: '1990-05-14T00:00:00Z',
        street_address: '123 Main St',
        city: 'New York',
        location_id: 1 // Pre-populated location
      },
      {
        username: 'jane_doe',
        password_hash: 'hashed_password_2',
        email: 'jane@example.com',
        phone_number: '+987654321',
        payment_details: 'VISA **** **** **** 5678',
        date_of_birth: '1985-08-10T00:00:00Z',
        street_address: '456 Maple St',
        city: 'San Francisco',
        location_id: 2 // Pre-populated location
      }
    ];

    const customerPromises = customers.map((customer) =>
      axios.post(`${BASE_URL}/customers`, customer)
    );
    const insertedCustomers = await Promise.all(customerPromises);

    const customerIds = insertedCustomers.map((res) => res.data.id);

    // Insert transactions for each customer
    const transactions = [
      {
        customer_id: customerIds[0], // John Doe
        status_id: 1, // Assume status 'Completed' exists
        date: '2024-10-22T12:00:00Z',
        shipping_option_id: 1, // Pre-populated shipping option
        transaction_number: 'TRANS001',
        tracking_number: 12345,
        is_sell: true
      },
      {
        customer_id: customerIds[1], // Jane Doe
        status_id: 2, // Assume status 'Pending' exists
        date: '2024-10-23T14:00:00Z',
        shipping_option_id: 2, // Pre-populated shipping option
        transaction_number: 'TRANS002',
        tracking_number: 67890,
        is_sell: true
      }
    ];

    const transactionPromises = transactions.map((transaction) =>
      axios.post(`${BASE_URL}/transactions`, transaction)
    );
    const insertedTransactions = await Promise.all(transactionPromises);

    const transactionIds = insertedTransactions.map((res) => res.data.id);

    // Insert into transaction_vinyls (many-to-many table)
    const transactionVinyls = [
      {
        transaction_id: transactionIds[0], // John's transaction
        vinyl_id: 1 // Pre-populated vinyl with ID 1
      },
      {
        transaction_id: transactionIds[0], // John's transaction
        vinyl_id: 2 // Pre-populated vinyl with ID 2
      },
      {
        transaction_id: transactionIds[1], // Jane's transaction
        vinyl_id: 3 // Pre-populated vinyl with ID 3
      }
    ];

    const transactionVinylPromises = transactionVinyls.map((tv) =>
      axios.post(`${BASE_URL}/transactions_vinyls`, tv)
    );
    await Promise.all(transactionVinylPromises);

    console.log('Data population complete!');
  } catch (error) {
    console.error('Error populating database:', error);
  }
}

populateDatabase();