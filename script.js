
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
window.onload = function () {
  const theme = localStorage.getItem("levelup-theme");

  if (theme === "dark") {
    document.body.classList.add("dark");
  }
};

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

    let fall = setInterval(() => {
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
   🤖 AI POPUP CHAT (REAL READY)
========================= */

/* OPEN CHAT */
function openChat() {
  const modal = document.getElementById("chatModal");
  if (modal) modal.style.display = "flex";
}

/* CLOSE CHAT */
function closeChat() {
  const modal = document.getElementById("chatModal");
  if (modal) modal.style.display = "none";
}

/* SEND MESSAGE TO AI */
async function sendMessage() {
  const input = document.getElementById("chatInput");
  const chatBox = document.getElementById("chatBox");

  const message = input.value.trim();
  if (!message) return;

  // show user message
  chatBox.innerHTML += `<p><b>You:</b> ${message}</p>`;
  input.value = "";

  // loading state
  const loading = document.createElement("p");
  loading.innerHTML = "<b>AI:</b> typing...";
  chatBox.appendChild(loading);
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

    loading.innerHTML = `<b>AI:</b> ${data.reply}`;
    chatBox.scrollTop = chatBox.scrollHeight;

  } catch (err) {
    loading.innerHTML = "<b>AI:</b> Error connecting to server 😢";
  }
}

/* click outside modal closes it */
window.onclick = function (event) {
  const modal = document.getElementById("chatModal");

  if (event.target === modal) {
    modal.style.display = "none";
  }
};
