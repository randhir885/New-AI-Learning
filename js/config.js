// Global configuration file

const CONFIG = {
    appName: "Training Cards App",
    version: "1.0.0",

    // Example: API base URL (future use)
    apiBaseUrl: "https://api.example.com",

    // Feature toggles
    enableCardAlerts: true,

    // Messages used across the app
    messages: {
        cardClick: "You clicked on",
        welcome: "Welcome to the Training App"
    }
};

// Make it available globally
window.CONFIG = CONFIG;
