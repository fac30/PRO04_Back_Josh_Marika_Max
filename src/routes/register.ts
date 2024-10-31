import { Router, Request, Response } from "express";
import { supabase } from "../database/supabaseClient";
import { Customer } from "../utils/schemaTypes";
import bcrypt from "bcryptjs";

const router = Router();

const registerHandler = async (req: Request, res: Response) => {
  const { password, ...rest } = req.body as Partial<Customer>;

  if (!password) {
    res
      .status(400)
      .json({ message: "Password is required", isLoggedIn: false });
    return;
  }

  try {
    const password_hash = await bcrypt.hash(password, 10);
    const customerData = { ...rest, password_hash };

    const { data: insertData, error: insertError } = await supabase
      .from("customers")
      .insert([customerData])
      .select("*");

    if (insertError) {
      res.status(400).json({
        message: "Registration failed",
        error: insertError.message,
        isLoggedIn: false,
      });
      return;
    }

    if (!insertData || insertData.length === 0) {
      res.status(500).json({
        message: "No customer data returned after registration",
        isLoggedIn: false,
      });
      return;
    }

    const { data: customer, error: customerError } = await supabase
      .from("customers")
      .select("*, locations (region, country)")
      .eq("username", customerData.username)
      .single();

    if (customerError) {
      res.status(500).json({
        message: "Failed to retrieve customer data after registration",
        error: customerError.message,
        isLoggedIn: false,
      });
      return;
    }

    res
      .status(201)
      .json({ message: "Signup successful", customer, isLoggedIn: true });
  } catch (error) {
    res.status(500).json({
      message: "An unexpected error occurred",
      error: (error as Error).message,
      isLoggedIn: false,
    });
  }
};

export default router.post("/register", registerHandler);
