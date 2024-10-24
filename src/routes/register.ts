import { Request, Response, Router } from 'express';
import { dbGet } from '../models/dbGet';
import { dbPost } from '../models/dbPost';
import { Customer } from "../utils/schemaTypes";

const router = Router();

router.post('/register', async (req: Request, res: Response) => {
    try {
      const customer = await dbPost('customers', req.body);
      if (!customer || !customer.id) {
        throw new Error('Failed to insert customer');
      }
      const updatedCustomer = await dbGet<Customer>('customers', {
        where: { id: customer.id },
        join: {
          relatedTable: 'locations',
          foreignKey: 'location_id',
          columns: ['region', 'country']
        }
      });
      console.log(updatedCustomer);
      const session = await dbPost('sessions', { customer_id: customer.id });
      res.status(201).json({ customer: updatedCustomer[0], session });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: `Error registering customer and creating session`, error });
    }
});

export default router;