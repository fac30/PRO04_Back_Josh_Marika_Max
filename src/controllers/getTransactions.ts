import { supabase } from "../database/supabaseClient";

export async function getTransactions(customer_id?: string, status_id?: number) {
  try {
    let query = supabase
      .from('transactions')
      .select(`
          *,
          vinyls (
            *,
            genres (genre),
            labels (label),
            conditions (condition),
            price_ranges (price_range),
            time_periods (time_period),
            collection_types (collection_type),
            discs (*)
          )
      `);
    
    if (status_id) {
      query = query.eq('status_id', status_id);
    }

    if (customer_id) {
      query = query.eq('customer_id', parseInt(customer_id, 10));
    }
    
    const { data, error } = await query;
    if (error) throw error;
    return data;
  } catch (error) {
    console.error('Error in getTransactions:', error);
    return { message: 'Error fetching transaction data', error };
  }
};