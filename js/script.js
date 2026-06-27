document.addEventListener("DOMContentLoaded", async () => {

    console.log(CONFIG.appName);

    // ✅ Test Supabase connection
    console.log("Supabase client:", supabaseClient);

    // Example: click handling
    const cards = document.querySelectorAll(".card");

    cards.forEach(card => {
        const button = card.querySelector("button");

        button.addEventListener("click", async () => {
            const topic = card.getAttribute("data-topic");

            if (CONFIG.enableCardAlerts) {
                alert(`You clicked ${topic}`);
            }

            // ✅ Example: log to console (later you can store in DB)
            console.log("Selected:", topic);
        });
    });

});
