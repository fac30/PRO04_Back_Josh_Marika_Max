import { createClient, SupabaseClient } from "@supabase/supabase-js";
import dotenv from "dotenv";
dotenv.config();

interface ProcessEnv {
  SUPABASE_URL: string;
  SUPABASE_KEY: string;
}

const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_KEY = process.env.SUPABASE_KEY;
if (!SUPABASE_URL || !SUPABASE_KEY) {
  throw new Error("Missing Supabase environment variables");
}

export const supabase: SupabaseClient = createClient(
  SUPABASE_URL,
  SUPABASE_KEY
);
