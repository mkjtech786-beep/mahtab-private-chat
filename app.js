sendBtn.onclick = () => {
    let msg = messageInput.value.trim();
    if (!msg) return;

    // admin login trigger
    if (msg.toLowerCase() === adminKeyword.toLowerCase()) {
        chatContainer.style.display = "none";
        adminPanel.style.display = "block";
        return;
    }

    db.ref("messages").push({
        user: username,
        text: msg,
        timestamp: Date.now()
    });

    messageInput.value = "";
};
