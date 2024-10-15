import { createClient, SupabaseClient } from "@supabase/supabase-js";
import dotenv from "dotenv";

dotenv.config();

interface ProcessEnv {
  SUPABASE_URL: string;
  SUPABASE_KEY: string;
}

const { SUPABASE_URL, SUPABASE_KEY } = process.env as unknown as ProcessEnv;

export const supabase: SupabaseClient = createClient(
  SUPABASE_URL,
  SUPABASE_KEY
);
