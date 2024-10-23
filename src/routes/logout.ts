import { Request, Response, Router } from 'express';
import { dbDelete, dbGet } from '../database/dbRequests';
import { Session } from '../utils/schemaTypes';

const router = Router();

router.delete('/logout', async (req: Request, res: Response) => {
  try {
    const { customer_id, session_id } = req.body;

    const sessions = await dbGet<Session>('sessions', { where: { id: session_id, customer_id } });
    
    if (sessions.length === 0) {
      res.status(404).json({ message: 'Session not found or does not belong to this customer' });
      return;
    }

    await dbDelete('sessions', session_id);

    res.status(200).json({ message: 'Successfully logged out' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error during logout', error });
  }
});

export default router;