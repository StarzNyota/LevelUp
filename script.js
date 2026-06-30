
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

  // optional save mode
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

  // trigger mini confetti
  createConfetti();
}

/* =========================
   SIMPLE CONFETTI EFFECT
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
   FUTURE AI READY HOOK
   (for OpenAI chat later)
========================= */
async function sendToAI(message) {
  // placeholder for backend connection later
  console.log("AI message:", message);
}
