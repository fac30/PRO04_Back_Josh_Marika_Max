import { supabase } from "./supabaseClient";

export default async function dbRequest(table: string) {
    const { data } = await supabase.from(table).select("*");
    return data || [];
};