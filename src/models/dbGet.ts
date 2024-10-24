import { supabase } from "../database/supabaseClient";

interface DbGetParams {
  columns?: string;
  where?: { [key: string]: string | number | number[] | string[] };
  join?: { relatedTable: string; foreignKey: string; columns: string | string[] } | Array<{ relatedTable: string; foreignKey: string; columns: string | string[] }>;
}

export async function dbGet<T>(table: string, params?: DbGetParams): Promise<T[]> {
  try {
    console.log('dbGet called with params:', JSON.stringify(params, null, 2));

    let query = supabase.from(table).select(params?.columns ? params.columns : "*");

    if (params?.where) {
      Object.entries(params.where).forEach(([key, value]) => {
        if (Array.isArray(value)) {
          query = query.in(key, value);
        } else {
          query = query.eq(key, value);
        }
      });
    }

    if (params?.join) {
      const joins = Array.isArray(params.join) ? params.join : [params.join];
      const joinExpressions = joins.map(join => {
        const { relatedTable, columns } = join;
        const joinColumns = Array.isArray(columns) ? columns.join(", ") : columns || '*';
        return `${relatedTable}!inner(${joinColumns})`;
      });

      const mainTableColumns = params?.columns ? params.columns : '*';
      const joinedColumns = `${mainTableColumns}, ${joinExpressions.join(', ')}`;

      query = supabase.from(table).select(joinedColumns);

      if (params?.where) {
        Object.entries(params.where).forEach(([key, value]) => {
          if (Array.isArray(value)) {
            query = query.in(key, value);
          } else {
            query = query.eq(key, value);
          }
        });
      }
    }

    console.log('Generated query:', query);

    const { data, error } = await query;

    if (error) {
      console.error(`Error fetching data from ${table}: ${error.message}`);
      throw new Error(`Error fetching data from ${table}: ${error.message}`);
    }

    if (!data) {
      throw new Error(`No data returned from ${table}`);
    }

    const flattenedData = data.map((item: any) => {
      if (params?.join) {
        const joins = Array.isArray(params.join) ? params.join : [params.join];
        joins.forEach(join => {
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
        });
      }
      return item;
    });

    return flattenedData as T[];
  } catch (error) {
    console.error('Unexpected error in dbGet:', error);
    throw error;
  }
}
