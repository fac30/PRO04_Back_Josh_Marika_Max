import { Request, Response, Router } from 'express';
import { dbGet } from '../models/dbGet';
import { dbPost } from '../models/dbPost';
import { dbDelete } from '../models/dbDelete';
import { Customer, Session } from "../utils/schemaTypes";

const router = Router();

router.post('/login', async (req: Request, res: Response) => {
    try {
      const { username, password_hash } = req.body;
      
      const customers: Customer[] = await dbGet<Customer>('customers', {
        where: { username },
        join: {
          relatedTable: 'locations',
          foreignKey: 'location_id',
          columns: ['region', 'country']
        }
      });
  
      if (customers.length === 0 || customers[0].password_hash != password_hash) {
        res.status(401).json({ message: 'Invalid username or password' });
        return;
      }
  
      const customer = customers[0];
      const sessions = await dbGet<Session>('sessions', { where: { customer_id: customer.id } });
  
      if (sessions.length > 0) {
        const session = sessions[0];
        await dbDelete('sessions', session.id);
      }
  
      const newSession = await dbPost('sessions', {
        customer_id: customer.id,
        expires_at: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
      });
  
      res.status(201).json({ message: 'Login successful', customer, session: newSession });
    } catch (error) {
      console.error(error);
  
      res.status(500).json({ message: 'Error during login', error });
    }
});

export default router;