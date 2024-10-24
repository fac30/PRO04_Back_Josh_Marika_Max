import { Request, Response, Router } from 'express';
import { dbGet, dbPatch } from '../database/dbRequests';
import { Customer, Session } from "../utils/schemaTypes"

const router = Router();

router.patch('/checksession', async (req: Request, res: Response) => {
  try {
    const { customer_id, session_id } = req.body;
    const currentDate = new Date();

    const sessions: Session[] = await dbGet<Session>('sessions', { where: { id: session_id, customer_id } });
    
    if (sessions.length === 0) {
      res.status(404).json({ message: 'Session not found or does not match the customer' });
      return;
    }

    const session = sessions[0];

    if (session.expires_at && new Date(session.expires_at) > currentDate) {
      const newExpiry = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);
      await dbPatch('sessions', session_id, { expires_at: newExpiry });

      const customers: Customer[] = await dbGet<Customer>('customers', {
        where: { id: session.customer_id },
        join: {
          relatedTable: 'locations',
          foreignKey: 'location_id',
          columns: ['region', 'country']
        }
      });

      if (customers.length === 0) {
        res.status(404).json({ message: 'Customer not found' });
      } else {
        const customer = customers[0];
        res.status(200).json({ message: 'Session extended successfully', customer, session: { ...session, expires_at: newExpiry } });
      }
    } else {
      res.status(401).json({ message: 'Session expired' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error during session check and extension', error });
  }
});

export default router;