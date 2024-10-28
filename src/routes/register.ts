import { Router, Request, Response } from 'express';
import { supabase } from "../database/supabaseClient";
import { Customer } from "../utils/schemaTypes";

const router = Router();

export default router.post('/register', async (req: Request<{}, {}, Partial<Customer>>, res: Response) => {
    const { data, error } = await supabase.from('customers').insert([req.body]).select('*');
    if (error) {
        res.status(400).json({ message: 'Registration failed', error });
    } else if (data && data.length > 0) {
        const { password_hash, ...customerData } = data[0];
        res.status(201).json({ message: 'Signup successful', customer: customerData });
    } else {
        res.status(500).json({ message: 'Unexpected error occurred' });
    }
});