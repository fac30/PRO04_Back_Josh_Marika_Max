import { supabase } from "../database/supabaseClient";

type WhereTuple = [string, string | number];

async function buildSelectQuery(table: string) {
  try {
    const { data: foreignKeys } = await supabase
      .from('information_schema.key_column_usage')
      .select('table_name, column_name, referenced_table_name, referenced_column_name')
      .eq('table_schema', 'public')
      .eq('table_name', table);
    if (!foreignKeys || foreignKeys.length === 0) {
      return '*';
    }
    const relationships = foreignKeys.map(fk => `${fk.referenced_table_name} (*)`).join(', ');
    return `*, ${relationships}`;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`Failed to fetch foreign key metadata: ${error.message}`);
    } else {
      throw new Error('Failed to fetch foreign key metadata: Unknown error');
    }
  }
}


export async function dbGet(table: string, where?: WhereTuple) {
  try {
    console.log(`Trying to run ${table}`)
    const selectQuery = await buildSelectQuery(table);
    console.log(selectQuery);
    const query = supabase
      .from(table)
      .select(selectQuery);
    
    if (where) {
      query.eq(where[0], where[1]);
    }

    const { data, error } = await query;
    if (error) throw error;
    return data;
  } catch (error) {
    return { message: 'Error fetching vinyls data', error };
  }
}