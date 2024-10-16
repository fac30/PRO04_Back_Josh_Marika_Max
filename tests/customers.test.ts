import request from 'supertest';
import { app } from '../src/index';

describe('GET /customers', () => {
  it('should retrieve a list of all customers', async () => {
    const response = await request(app).get('/customers');
    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
  });
});

describe('GET /customers/:id', () => {
    it('should retrieve a customer by ID', async () => {
      const customerId = 1;
      const response = await request(app).get(`/customers/${customerId}`);
      expect(response.status).toBe(200);
      expect(response.body.id).toBe(customerId);
    });
});

describe('POST /customers', () => {
    it('should create a new customer', async () => {
      const newCustomer = {
        username: 'testuser',
        password: 'password123',
        email: 'testuser@example.com',
        phone_number: '1234567890',
        payment_details: 'Visa',
        date_of_birth: '1990-01-01',
        street_address: '123 Test St',
        location_id: 1
      };
      const response = await request(app).post('/customers').send(newCustomer);
      expect(response.status).toBe(201);
      expect(response.body.username).toBe(newCustomer.username);
    });
});

