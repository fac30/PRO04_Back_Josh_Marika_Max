import { Router, Request, Response } from 'express';
import { supabase } from "../database/supabaseClient";
import { Customer } from "../utils/schemaTypes";

const router = Router();

type LoginRequestBody = Pick<Customer, 'username' | 'password_hash'>;

export default router.post('/login', async (req: Request<{}, {}, LoginRequestBody>, res: Response) => {
    const { username, password_hash } = req.body;
    const { data: customer, error } = await supabase
        .from('customers')
        .select('*, locations (region, country)')
        .eq('username', username)
        .eq('password_hash', password_hash)
        .single();
    if (error || !customer) {
      res.status(400).json({ error: 'Invalid login credentials' });
    } else {
      req.session.userId = customer.id;
      res.status(200).json({ message: 'Login successful', customer: { ...customer, password_hash: undefined } });
    }
})
