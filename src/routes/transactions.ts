import { Request, Response, Router } from 'express';
import { dbGet } from '../database/dbRequests';
import { Transaction } from "../utils/schemaTypes"

const router = Router();

router.get('/transactions/:customer_id', async (req: Request, res: Response) => {
    try {
      const { customer_id } = req.params;
      const transactions: Transaction[] = await dbGet<Transaction>('customers', {
        where: { customer_id },
        join: [
            {
              relatedTable: 'statuses',
              foreignKey: 'status_id',
              columns: 'status'
            },
            {
              relatedTable: 'shipping_options',
              foreignKey: 'shipping_option_id',
              columns: 'shipping_option'
            }
        ]
      });
      res.status(200).json(transactions);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error during session check', error });
    }
});

export default router;