import { Request, Response, Router } from 'express';
import { dbGet } from '../database/dbRequests';
import { Transaction } from "../utils/schemaTypes"

const router = Router();

router.get('/transactions/:id', async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const transactions: Transaction[] = await dbGet<Transaction>('customers');
      res.status(200).json(transactions);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error during session check', error });
    }
});

export default router;