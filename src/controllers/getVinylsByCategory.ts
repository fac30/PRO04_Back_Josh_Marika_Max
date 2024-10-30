import { supabase } from "../database/supabaseClient";

export interface Category {
    id: number;
    [key: string]: string | number;
}

export async function getCategory(category: string, withE: boolean): Promise<Category[]> {
    try {
        const response = await supabase
            .from(withE? category + 'es' : category + 's')
            .select(`id, ${category}`);
        if (response.error || !response.data) {
            console.error(`Error fetching ${category} data:`, response.error);
            return [];
        }
        const data = response.data as unknown;
        if (Array.isArray(data) && data.every(item => typeof item === 'object' && item !== null && 'id' in item && typeof item.id === 'number')) {
            return data as Category[];
        } else {
            console.error(`Data fetched from ${category} does not match Category[] format.`);
            return [];
        }
    } catch (error) {
        console.error(`Unexpected error fetching ${category} data:`, error);
        return [];
    }
}

export async function getVinylsByCategory(categoryData: Category, category: string) {
    try {
        const vinylsData = await supabase
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
            `)
            .eq(`${category}_id`, categoryData.id);
        return vinylsData;
    } catch (error) {
        console.error(`Unexpected error fetching ${category} data:`, error);
        return [];
    }
}