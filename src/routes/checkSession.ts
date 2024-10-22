import { Request, Response, Router } from 'express';
import { dbGet } from '../database/dbRequests';
import { Customer, Session } from "../utils/schemaTypes"

const router = Router();

router.get('/checkSession/:id', async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const currentDate = new Date();
      const sessions: Session[] = await dbGet<Session>('sessions', { where: { id } });
      
      if (sessions.length === 0) {
        res.status(404).json({ message: 'No session found' });
        return;
      }
  
      const session = sessions[0];
      if (session.expires_at && new Date(session.expires_at) > currentDate) {
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
          res.status(200).json({ message: 'Session valid', customer, session });
        }
      } else {
        res.status(401).json({ message: 'Session expired' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error during session check', error });
    }
});

export default router;