function scrollToSection(id){
  document.getElementById(id).scrollIntoView({behavior:"smooth"});
}

/* DARK MODE */
function toggleDarkMode(){
  document.body.classList.toggle("dark");
}

/* WELLNESS */
function showWellness(){
  document.getElementById("wellnessOut").innerHTML =
  "🥗 eggs, oats, chicken, fruit, water";
}

/* MAKEUP */
function showMakeup(){
  document.getElementById("makeupOut").innerHTML =
  "💄 mascara + blush + lip gloss = soft glow";
}

/* FIT */
function showFit(){
  document.getElementById("fitOut").innerHTML =
  "🎀 soft coquette outfit + pink tones + bows";
}

/* SHEIN LINKS */
function openLink(type){
  let url = "https://www.shein.com/pdsearch/" + type;
  window.open(url, "_blank");
}

/* CHAT */
function openChat(){
  document.getElementById("chatModal").style.display="flex";
}

function closeChat(){
  document.getElementById("chatModal").style.display="none";
}

/* SIMPLE AI (NO SERVER) */
function sendChat(){
  let input = document.getElementById("chatInput");
  let box = document.getElementById("chatBox");

  let msg = input.value;
  if(!msg) return;

  box.innerHTML += "<p>You: " + msg + "</p>";

  let reply = "💖 I think you’re doing amazing! Keep going, LevelUp queen 🎀";

  box.innerHTML += "<p>AI: " + reply + "</p>";

  input.value = "";
}
