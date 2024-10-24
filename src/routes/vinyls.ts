import { Router } from 'express';
import { getVinyls } from '../controllers/getVinyls'; // Import the controller

const router = Router();

router.get('/vinyls/:id?', async (req, res) => {
  try {
    const { id } = req.params;

    // Log to check if the route is hit and if we are passing the right values
    console.log(`Hit /vinyls route with id: ${id}`);

    const data = await getVinyls(id ? [Number(id)] : undefined);

    res.status(200).json(data); // Return the result
  } catch (error) {
    res.status(500).json({ message: 'Error fetching vinyls data', error });
  }
});

export default router;
