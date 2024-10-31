import { Router, Request, Response } from "express";
import { supabase } from "../database/supabaseClient";

const router = Router();

export default router.get(
  "/check-session",
  async (req: Request, res: Response) => {
    if (req.session.userId) {
      const { data: customerData, error } = await supabase
        .from("customers")
        .select("*, locations (region, country)")
        .eq("id", req.session.userId)
        .single();
      if (error || !customerData) {
        res
          .status(400)
          .json({ error: "User does not exist", isLoggedIn: false });
        return;
      } else {
        const { password_hash, ...customer } = customerData;
        res
          .status(200)
          .json({ message: "User is logged in", isLoggedIn: true, customer });
      }
    } else {
      res.status(401).json({ isLoggedIn: false, message: "Not logged in" });
    }
  }
);
