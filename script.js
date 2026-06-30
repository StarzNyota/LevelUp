function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({
    behavior: "smooth"
  });
}

// DARK MODE TOGGLE
function toggleDarkMode() {
  document.body.classList.toggle("dark");
}

// CHALLENGE BUTTON
function acceptChallenge() {
  alert("Nice 💖 You accepted today’s challenge!");
}
