import { supabase } from "../database/supabaseClient";

export async function getVinyls(id?: string) {
  try {
    let query = supabase
      .from('vinyls')
      .select(`
        *,
        genres (genre),
        labels (label),
        conditions (condition),
        price_ranges (price_range),
        time_periods (time_period),
        collection_types (collection_type),
        discs (*)
      `);
    if (id) {
      query = query.eq('id', parseInt(id, 10));
    }
    const { data, error } = await query;
    if (error) throw error;
    return data;
  } catch (error) {
    console.error('Error in getVinyls:', error);
    return { message: 'Error fetching vinyl data', error };
  }
};
