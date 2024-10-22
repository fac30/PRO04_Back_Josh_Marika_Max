import express, { Request, Response } from "express";
import cors from "cors";
import { dbGet, dbPost, dbPatch, dbDelete } from "./database/dbRequests";
import endpoints from "./database/endpoints.json"
import { Customer, Session } from "./utils/schemaTypes"

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

Object.entries(endpoints).forEach(([endpoint, methods]) => {
  if (methods.GET) {
    app.get(`/${endpoint}`, async (_req: Request, res: Response) => {
      try {
        const data = await dbGet(endpoint);
        res.status(200).json(data);
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: `Error fetching ${endpoint} data` });
      }
    });
  }
  if (methods.POST) {
    app.post(`/${endpoint}`, async (req: Request, res: Response) => {
      try {
        const data = await dbPost(endpoint, req.body);
        res.status(201).json(data);
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: `Error posting to ${endpoint}` });
      }
    });
  }
  if (methods.PATCH) {
    app.patch(`/${endpoint}/:id`, async (req: Request, res: Response) => {
      const { id } = req.params;
      try {
        const data = await dbPatch(endpoint, id, req.body);
        res.status(200).json(data);
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: `Error patching ${endpoint} with ID: ${id}` });
      }
    });
  }
  if (methods.DELETE) {
    app.delete(`/${endpoint}/:id`, async (req: Request, res: Response) => {
      const { id } = req.params;
      try {
        const data = await dbDelete(endpoint, id);
        res.status(200).json({ message: `${endpoint} with ID ${id} deleted successfully` });
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: `Error deleting from ${endpoint} with ID: ${id}` });
      }
    });
  }
});

app.post('/register', async (req: Request, res: Response) => {
  try {
    const customer = await dbPost('customers', req.body);
    if (!customer) {
      throw new Error('Failed to insert customer');
    }
    const session = await dbPost('sessions', { customer_id: customer.id });
    res.status(201).json({ customer, session });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: `Error registering customer and creating session`, error });
  }
});

app.post('/login', async (req: Request, res: Response) => {
  try {
    const { username, password_hash } = req.body;
    
    const customers: Customer[] = await dbGet<Customer>('customers', { where: { username, password_hash } });

    if (customers.length === 0) {
      res.status(401).json({ message: 'Invalid username or password' });
      res.end();
    } else {
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
    }
  } catch (error) {
    console.error(error);

    if (error instanceof Error && 'code' in error) {
      const typedError = error as { code: string };
      if (typedError.code === '23505') {
        res.status(400).json({ message: 'Duplicate key value', error });
      }
    }

    res.status(500).json({ message: 'Error during login', error });
  }
});

app.get('/checkSession/:id', async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const currentDate = new Date();
    const sessions: Session[] = await dbGet<Session>('sessions', { where: { id } });
    if (sessions.length === 0) {
      res.status(404).json({ message: 'No session found' });
      res.end();
    } else {
      const session = sessions[0];
      if (session.expires_at && new Date(session.expires_at) > currentDate) {
        const customers: Customer[] = await dbGet<Customer>('customers', { where: { id: session.customer_id } });
        if (customers.length === 0) {
          res.status(404).json({ message: 'Customer not found' });
          res.end();
        } else {
          const customer = customers[0];
          res.status(200).json({ message: 'Session valid', customer, session });
        }
      } else {
        res.status(401).json({ message: 'Session expired' });
      }
    }
  } catch (error: unknown) {
    console.error(error);
    if (error instanceof Error && 'code' in error) {
      const typedError = error as { code: string };
      if (typedError.code === '23505') {
        res.status(400).json({ message: 'Duplicate key value', error });
      }
    }
    res.status(500).json({ message: 'Error during session check', error });
  }
});





app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

export { app };
