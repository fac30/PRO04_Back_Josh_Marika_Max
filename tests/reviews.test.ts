import request from 'supertest';
import { app } from '../src/main';

describe('POST /reviews', () => {
    it('should create a new review', async () => {
      const newReview = {
        score: 5,
        description: 'Great vinyl!',
        vinyl_id: 1,
        transaction_id: 1
      };
      const response = await request(app).post('/reviews').send(newReview);
      expect(response.status).toBe(201);
      expect(response.body.score).toBe(newReview.score);
    });
});