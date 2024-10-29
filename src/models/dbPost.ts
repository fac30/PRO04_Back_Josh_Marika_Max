import { supabase } from "../database/supabaseClient";

export async function dbPost(table: string, data: any) {
    const { data: insertedData, error } = await supabase.from(table).insert([data]).select();;
    if (error) throw error;
    return insertedData ? insertedData[0] : null;
}