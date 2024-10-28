import { Request, Response, Router } from 'express';
import { getTransactions } from '../controllers/getTransactions';

const router = Router();

router.get('/transactions/:customer_id?', async (req: Request, res: Response) => {
  try {
    const { customer_id } = req.params;
    const transactions = await getTransactions(customer_id || undefined);
    res.status(200).json(transactions);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching transaction data', error });
  }
});

export default router;