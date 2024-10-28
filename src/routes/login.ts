import { Router, Request, Response } from 'express';
import { supabase } from "../database/supabaseClient";
import { Customer } from "../utils/schemaTypes";

const router = Router();

declare module 'express-session' {
  interface SessionData {
      userId: string;
  }
}

type LoginRequestBody = Pick<Customer, 'email' | 'password_hash'>;

export default router.post('/login', async (req: Request<{}, {}, LoginRequestBody>, res: Response) => {
    const { email, password_hash } = req.body;
    const { data, error } = await supabase.auth.signInWithPassword({ email, password: password_hash });
    if (data?.session) {
        req.session.userId = data.user.id;
        res.status(200).json({ message: 'Login successful' });
    } else {
      res.status(400).json({ error: error?.message || 'Login failed' });
    }
})
