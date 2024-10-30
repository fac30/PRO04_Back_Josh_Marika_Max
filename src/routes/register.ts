import { Router, Request, Response } from "express";
import { supabase } from "../database/supabaseClient";
import { Customer } from "../utils/schemaTypes";
import bcrypt from "bcryptjs";

const router = Router();

const registerHandler = async (req: Request, res: Response) => {
  const { password, ...rest } = req.body as Partial<Customer>;

  if (!password) {
    res.status(400).json({ message: "Password is required" });
    return;
  }

  const password_hash = await bcrypt.hash(password, 10);
  const customerData = { ...rest, password_hash };

  const { data, error } = await supabase
    .from("customers")
    .insert([customerData])
    .select("*");
  if (error) {
    res.status(400).json({ message: "Registration failed", error });
  } else if (data && data.length > 0) {
    const { password_hash, ...customer } = data[0];
    res.status(201).json({ message: "Signup successful", customer });
  } else {
    res.status(500).json({ message: "Unexpected error occurred" });
  }
};

export default router.post("/register", registerHandler);
