import { supabase } from "../database/supabaseClient";

export async function dbDelete(table: string, id: string | number) {
    const { data: deletedData, error } = await supabase.from(table).delete().eq('id', id);
    if (error) throw error;
    return deletedData || [];
}