import { Router } from 'express';
import { getVinyls } from '../controllers/getVinyls';

const router = Router();

export default router.get('/vinyls/:id?', async (req, res) => {
  try {
    const { id } = req.params;
    const data = await getVinyls(id || undefined);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching vinyls data', error });
  }
});