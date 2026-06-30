/* =========================
   SMOOTH SCROLL
========================= */
function scrollToSection(id) {
  const el = document.getElementById(id);

  if (el) {
    el.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  }
}

/* =========================
   DARK MODE TOGGLE
========================= */
function toggleDarkMode() {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    localStorage.setItem("levelup-theme", "dark");
  } else {
    localStorage.setItem("levelup-theme", "light");
  }
}

/* Load saved theme */
window.addEventListener("load", () => {
  const theme = localStorage.getItem("levelup-theme");

  if (theme === "dark") {
    document.body.classList.add("dark");
  }
});

/* =========================
   CHALLENGE BUTTON
========================= */
function acceptChallenge() {
  alert("Nice 💖 You accepted today’s challenge!");
  createConfetti();
}

/* =========================
   CONFETTI EFFECT
========================= */
function createConfetti() {
  for (let i = 0; i < 25; i++) {
    const confetti = document.createElement("div");

    confetti.style.position = "fixed";
    confetti.style.width = "8px";
    confetti.style.height = "8px";
    confetti.style.background = randomColor();
    confetti.style.left = Math.random() * window.innerWidth + "px";
    confetti.style.top = "-10px";
    confetti.style.borderRadius = "50%";
    confetti.style.zIndex = "9999";
    confetti.style.opacity = "0.8";

    document.body.appendChild(confetti);

    const fall = setInterval(() => {
      confetti.style.top = confetti.offsetTop + 5 + "px";

      if (confetti.offsetTop > window.innerHeight) {
        confetti.remove();
        clearInterval(fall);
      }
    }, 20);
  }
}

/* random pastel colors */
function randomColor() {
  const colors = ["#ff7eb6", "#7ec8ff", "#ffd6e7", "#b6f2ff", "#c9b6ff"];
  return colors[Math.floor(Math.random() * colors.length)];
}

/* =========================
   🤖 AI POPUP CHAT
========================= */

/* OPEN CHAT */
function openChat() {
  document.getElementById("chatModal").style.display = "flex";
}

/* CLOSE CHAT */
function closeChat() {
  document.getElementById("chatModal").style.display = "none";
}

/* CLICK OUTSIDE CLOSE */
window.onclick = function (event) {
  const modal = document.getElementById("chatModal");

  if (event.target === modal) {
    modal.style.display = "none";
  }
};

/* =========================
   SEND MESSAGE (AI CHAT)
========================= */
async function sendMessage() {
  const input = document.getElementById("chatInput");
  const chatBox = document.getElementById("chatBox");

  const message = input.value.trim();
  if (!message) return;

  // user message
  const userMsg = document.createElement("p");
  userMsg.innerHTML = `<b>You:</b> ${message}`;
  chatBox.appendChild(userMsg);

  input.value = "";

  // AI typing message
  const aiMsg = document.createElement("p");
  aiMsg.innerHTML = "<b>AI:</b> typing...";
  chatBox.appendChild(aiMsg);

  chatBox.scrollTop = chatBox.scrollHeight;

  try {
    const res = await fetch("http://localhost:3000/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ message })
    });

    const data = await res.json();

    aiMsg.innerHTML = `<b>AI:</b> ${data.reply}`;
    chatBox.scrollTop = chatBox.scrollHeight;

  } catch (err) {
    aiMsg.innerHTML = "<b>AI:</b> Server not running 😢";
  }

  input.focus();
}
