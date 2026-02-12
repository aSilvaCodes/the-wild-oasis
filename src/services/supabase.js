import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://guaqffkxxqwtnzcxtiwc.supabase.co";
const supabaseKey = "sb_publishable_m0_YvBBWY3o2aLB822RJ2w_Fs2Nj9Is";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
