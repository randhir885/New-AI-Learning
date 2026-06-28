// Import Supabase
const SUPABASE_URL = "https://ulpqarobuynqopwzuezt.supabase.co";

const SUPABASE_ANON_KEY = "sb_publishable_XcNLsPe2u4iDOI4iBjF72w_Qlo_iVBG";

// Create Supabase Client
const supabase = window.supabase.createClient(
    SUPABASE_URL,
    SUPABASE_ANON_KEY
);
