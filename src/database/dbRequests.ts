import { supabase } from "./supabaseClient";

export async function dbGet(table: string) {
    const { data, error } = await supabase.from(table).select("*");
    if (error) throw error;
    return data || [];
}

export async function dbPost(table: string, data: any) {
    const { data: insertedData, error } = await supabase.from(table).insert([data]);
    if (error) throw error;
    return insertedData || [];
}

export async function dbPatch(table: string, id: string | number, data: any) {
    const { data: updatedData, error } = await supabase.from(table).update(data).eq('id', id);
    if (error) throw error;
    return updatedData || [];
}

export async function dbDelete(table: string, id: string | number) {
    const { data: deletedData, error } = await supabase.from(table).delete().eq('id', id);
    if (error) throw error;
    return deletedData || [];
}