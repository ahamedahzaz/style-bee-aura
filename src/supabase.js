import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://voyzuysrwvoatadcaeyk.supabase.co";

const supabaseAnonKey = "sb_publishable_Rk9n6xhtxosTaWTrQ-J2Og_HT2gHPeo";

export const supabase = createClient(
  supabaseUrl,
  supabaseAnonKey
);