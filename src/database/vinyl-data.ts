import { supabase } from "./supabase-client";

interface Vinyl {
  id: number;
  stock: number;
  description: string;
  price: number;
  artist: string;
  title: string;
  release_date: string;
  limited_edition?: boolean;
  new_release?: boolean;
  discount?: number;
  on_sale?: boolean;
  genre?: string;
  condition?: string;
  price_range?: string;
  album_or_single?: string;
  time_range?: string;
  label?: string;
}

const dbRequest = async (): Promise<Vinyl[]> => {
  const { data } = await supabase.from("vinyls").select("*");

  return data || [];
};

export default dbRequest; // Use ES module syntax
