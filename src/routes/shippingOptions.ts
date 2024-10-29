import { Router } from 'express';
import { getShippingOptions } from '../controllers/getShippingOptions';

const router = Router();

export default router.get('/shipping-options/:id?', async (req, res) => {
  try {
    const { id } = req.params;
    const data = await getShippingOptions(id || undefined);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching vinyls data', error });
  }
});