import request from 'supertest';
import { app } from '../src/main';

describe('GET /transactions', () => {
    it('should retrieve a list of all transactions', async () => {
      const response = await request(app).get('/transactions');
      expect(response.status).toBe(200);
      expect(Array.isArray(response.body)).toBe(true);
    });
});

describe('POST /transactions', () => {
    it('should create a new transaction', async () => {
      const newTransaction = {
        date: '2023-02-01',
        status_id: 1,
        delivery_time: '3 days',
        is_sell: true,
        transaction_number: 'TX123456',
        customer_id: 1,
        shipping_options_id: 1
      };
      const response = await request(app).post('/transactions').send(newTransaction);
      expect(response.status).toBe(201);
      expect(response.body.transaction_number).toBe(newTransaction.transaction_number);
    });
});