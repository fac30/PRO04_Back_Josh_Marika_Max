import request from 'supertest';
import { app } from '../src/index';

describe('GET /vinyls', () => {
    it('should retrieve a list of all vinyl records', async () => {
      const response = await request(app).get('/vinyls');
      expect(response.status).toBe(200);
      expect(Array.isArray(response.body)).toBe(true);
    });
});

describe('GET /vinyls/:id', () => {
    it('should retrieve a vinyl by ID', async () => {
      const vinylId = 1;
      const response = await request(app).get(`/vinyls/${vinylId}`);
      expect(response.status).toBe(200);
      expect(response.body.id).toBe(vinylId);
    });
});

describe('POST /vinyls', () => {
    it('should create a new vinyl record', async () => {
      const newVinyl = {
        stock: 10,
        description: 'A great vinyl record',
        price: 29.99,
        artist: 'Test Artist',
        title: 'Test Title',
        release_date: '2023-01-01',
        limited_edition: false,
        genre_id: 1,
        condition_id: 1,
        price_range_id: 1,
        album_or_single_id: 1,
        new_release_id: true,
        time_range_id: 1,
        label_id: 1,
        image_url: 'http://example.com/vinyl.jpg',
        discount: 5,
        on_sale: true
      };
      const response = await request(app).post('/vinyls').send(newVinyl);
      expect(response.status).toBe(201);
      expect(response.body.title).toBe(newVinyl.title);
    });
});