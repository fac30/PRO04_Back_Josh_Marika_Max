import { supabase } from "./supabaseClient";

interface DbGetParams {
    columns?: string;
    where?: { [key: string]: any };
    and?: { [key: string]: any };
    join?: { relatedTable: string; foreignKey: string; columns: string | string[] } | Array<{ relatedTable: string; foreignKey: string; columns: string | string[] }>;
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
      const joins = Array.isArray(params.join) ? params.join : [params.join];
  
      const joinExpressions = joins.map(join => {
        const { relatedTable, columns } = join;
        return `${relatedTable}(${columns || '*'})`;
      });
  
      const mainTableColumns = params?.columns ? params.columns : '*';
      const joinedColumns = `${mainTableColumns}, ${joinExpressions.join(', ')}`;
  
      query = supabase.from(table).select(joinedColumns);
    }
  
    const { data, error } = await query;
  
    if (error) {
      throw new Error(`Error fetching data from ${table}: ${error.message}`);
    }
    if (!data) {
      throw new Error(`No data returned from ${table}`);
    }
  
    const flattenedData = data.map((item: any) => {
      if (params?.join) {
        const joins = Array.isArray(params.join) ? params.join : [params.join];
        for (const join of joins) {
          const { relatedTable, columns } = join;
          if (item[relatedTable]) {
            const selectedColumns = Array.isArray(columns) ? columns : [columns];
            selectedColumns.forEach(col => {
              if (item[relatedTable][col] !== undefined) {
                item[col] = item[relatedTable][col];
              }
            });
            delete item[relatedTable];
          }
        }
      }
      return item;
    });
  
    return flattenedData as T[];
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
  
  
  