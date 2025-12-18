function downloadApp() {
    alert("⚔️ SteakWars is launching soon. Get ready to compete!");
}

function submitEmail() {
    const email = document.getElementById("email").value;
    const message = document.getElementById("message");

    if (!email) {
        message.textContent = "Please enter a valid email.";
        message.style.color = "red";
    } else {
        message.textContent = "🔥 You're in! We'll notify you when SteakWars launches.";
        message.style.color = "green";
        document.getElementById("email").value = "";
    }
}
