import { Router, Request, Response } from "express";
import { supabase } from "../database/supabaseClient";
import bcrypt from "bcryptjs";

const router = Router();

type LoginRequestBody = { username: string; password: string };

export default router.post(
  "/login",
  async (req: Request<{}, {}, LoginRequestBody>, res: Response) => {
    const { username, password } = req.body;

    const { data: customer, error } = await supabase
      .from("customers")
      .select("*, locations (region, country)")
      .eq("username", username)
      .single();

    if (error || !customer) {
      res.status(400).json({ error: "Invalid login credentials" });
      return;
    }

    const passwordMatch = await bcrypt.compare(
      password,
      customer.password_hash
    );
    if (!passwordMatch) {
      res.status(400).json({ error: "Invalid login credentials" });
      return;
    }

    req.session.userId = customer.id;
    res.status(200).json({
      message: "Login successful",
      customer: { ...customer, password_hash: undefined },
    });
  }
);
