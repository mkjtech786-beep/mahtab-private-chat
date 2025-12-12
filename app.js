// Elements
const startChatBtn = document.getElementById("startChatBtn");
const nameInput = document.getElementById("nameInput");
const registerScreen = document.getElementById("registerScreen");
const chatContainer = document.getElementById("chatContainer");
const messagesDiv = document.getElementById("messages");
const messageInput = document.getElementById("messageInput");
const sendBtn = document.getElementById("sendBtn");
const adminPanel = document.getElementById("adminPanel");
const adminMessagesDiv = document.getElementById("adminMessages");

let username = "";
const adminKeyword = "adminmahtab666777";

// Start Chat
startChatBtn.addEventListener("click", () => {
    const value = nameInput.value.trim();
    if (!value) return alert("Enter your name!");
    username = value;
    registerScreen.style.display = "none";
    chatContainer.style.display = "block";
});

// Send Message
sendBtn.addEventListener("click", () => {
    const msg = messageInput.value.trim();
    if (!msg) return;

    // Admin trigger
    if (msg === adminKeyword) {
        chatContainer.style.display = "none";
        adminPanel.style.display = "block";
        return;
    }

    push(ref(db, "messages"), {
        user: username,
        text: msg,
        timestamp: Date.now()
    });

    messageInput.value = "";
});

// Display messages
onChildAdded(ref(db, "messages"), snapshot => {
    const data = snapshot.val();
    const div = document.createElement("div");
    div.classList.add("message");
    if (data.user === username) div.classList.add("user");
    div.innerHTML = `<b>${data.user}:</b> ${data.text}`;
    messagesDiv.appendChild(div);
    messagesDiv.scrollTop = messagesDiv.scrollHeight;
});

// Admin Panel Messages
onValue(ref(db, "messages"), snapshot => {
    adminMessagesDiv.innerHTML = "";
    snapshot.forEach(child => {
        const msg = child.val();
        const div = document.createElement("div");
        div.style.padding = "8px";
        div.style.margin = "5px";
        div.style.background = "#222";
        div.style.borderRadius = "6px";
        div.innerHTML = `<b>${msg.user}:</b> ${msg.text}`;
        adminMessagesDiv.appendChild(div);
    });
}); 
