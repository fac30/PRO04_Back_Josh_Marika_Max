import { supabase } from "./supabaseClient";

interface DbGetParams {
    columns?: string;
    where?: { [key: string]: any };
    and?: { [key: string]: any };
    join?: { relatedTable: string; foreignKey: string; columns: string };
}

export async function dbGet<T>(table: string, params?: DbGetParams): Promise<T[]> {
    let query = supabase.from(table).select(params?.columns ? params.columns : "*");
    if (params?.where) {
        for (const [key, value] of Object.entries(params.where)) {
            query = query.eq(key, value);
        }
    }
    if (params?.and) {
        for (const [key, value] of Object.entries(params.and)) {
            query = query.eq(key, value);
        }
    }
    if (params?.join) {
        const { relatedTable, foreignKey, columns } = params.join;
        query = supabase.from(table).select(`${params.columns}, ${relatedTable}!${foreignKey}(${columns})`);
    }
    const { data, error } = await query;
    if (error) {
        throw new Error(`Error fetching data from ${table}: ${error.message}`);
    }
    if (!data) {
        throw new Error(`No data returned from ${table}`);
    }
    return data as T[];
}

export async function dbPost(table: string, data: any) {
    const { data: insertedData, error } = await supabase.from(table).insert([data]).select();;
    if (error) throw error;
    return insertedData ? insertedData[0] : null;
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