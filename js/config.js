// Global configuration

const CONFIG = {
    appName: "Training Cards App",
    version: "1.0.0",

    // ✅ Supabase Configuration
    supabase: {
        url: "https://ivtnajqtwqxtfocprpwn.supabase.co",
        publishableKey: "sb_publishable_Z619_GGDp6F1wnz8Mo7SvAoujM1umh"
    },

    // Feature flags
    enableCardAlerts: true
};

// ✅ Create Supabase client globally
const supabaseClient = supabase.createClient(
    CONFIG.supabase.url,
    CONFIG.supabase.publishableKey
);

// Make globally accessible
window.CONFIG = CONFIG;
window.supabaseClient = supabaseClient;
