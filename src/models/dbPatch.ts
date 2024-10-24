import { supabase } from "../database/supabaseClient";

export async function dbPatch(table: string, id: string | number, data: any) {
    const { data: updatedData, error } = await supabase.from(table).update(data).eq('id', id);
    if (error) throw error;
    return updatedData || [];
}