let user = {};

function registerUser() {
    const name = document.getElementById("regName").value.trim();
    const gameID = document.getElementById("regID").value.trim();

    if (!name || !gameID) return alert("Please fill all fields");

    user = { name, gameID };

    document.getElementById("registerModal").style.display = "none";
    document.querySelector(".main-app").style.display = "flex";
}

// Listen messages
db.ref("chat").on("child_added", snapshot => {
    const msg = snapshot.val();
    displayMessage(msg);
});

// Display message
function displayMessage(msg) {
    const box = document.getElementById("messages");

    const div = document.createElement("div");
    div.className = "message " + (msg.sender === "user" ? "user" : "");
    div.innerText = msg.text;

    box.appendChild(div);
    box.scrollTop = box.scrollHeight;

    // Admin Keyword Trigger
    if (msg.text === "adminmahtab666777") {
        openAdminPanel();
    }
}

// Send message
document.getElementById("sendBtn").onclick = sendMessage;

function sendMessage() {
    const text = document.getElementById("msgInput").value.trim();
    if (!text) return;

    db.ref("chat").push({
        text,
        sender: "user",
        time: Date.now()
    });

    document.getElementById("msgInput").value = "";

    if (text === "adminmahtab666777") {
        openAdminPanel();
    }
}

// Open Admin Panel
function openAdminPanel() {
    document.getElementById("chatArea").style.display = "none";
    document.getElementById("adminPanel").style.display = "block";

    // Load all chat
    db.ref("chat").on("value", snap => {
        const area = document.getElementById("adminMessages");
        area.innerHTML = "";

        snap.forEach(child => {
            const msg = child.val();

            const div = document.createElement("div");
            div.style.padding = "10px";
            div.style.margin = "5px";
            div.style.background = "#333";
            div.style.borderRadius = "8px";
            div.innerText = msg.text;

            area.appendChild(div);
        });
    });
}