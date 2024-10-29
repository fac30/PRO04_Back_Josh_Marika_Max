import { supabase } from "../database/supabaseClient";

export async function getShippingOptions(id?: string) {
  try {
    let query = supabase
      .from('shipping_options')
      .select(`
        *,
        locations ( region, country )
      `);

    if (id) {
      query = query.eq('id', parseInt(id, 10));
    }

    const { data, error } = await query;
    if (error) throw error;
    return data;
  } catch (error) {
    console.error('Error in getShippingOptions:', error);
    return { message: 'Error fetching shipping options data', error };
  }
};