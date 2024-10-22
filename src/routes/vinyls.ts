import { Request, Response, Router } from 'express';
import { dbGet } from '../database/dbRequests';

const router = Router();

router.get('/vinyls', async (req: Request, res: Response) => {
    try {
      const data = await dbGet('vinyls', {
        join: [
          {
            relatedTable: 'genres',
            foreignKey: 'genre_id',
            columns: 'genre'
          },
          {
            relatedTable: 'conditions',
            foreignKey: 'condition_id',
            columns: 'condition'
          },
          {
            relatedTable: 'price_ranges',
            foreignKey: 'price_range_id',
            columns: 'price_range'
          },
          {
            relatedTable: 'collection_types',
            foreignKey: 'collection_type_id',
            columns: 'collection_type'
          },
          {
            relatedTable: 'time_periods',
            foreignKey: 'time_period_id',
            columns: 'time_period'
          },
          {
            relatedTable: 'labels',
            foreignKey: 'label_id',
            columns: 'label'
          }
        ]
      });
      res.status(200).json(data);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: `Error fetching vinyls data` });
    }
});

export default router;