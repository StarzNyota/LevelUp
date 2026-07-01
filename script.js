/* ===================================
   LEVELUP SCRIPT.JS
   PART 1
=================================== */

/* =========================
   SMOOTH SCROLL
========================= */

function scrollToSection(id) {
  const section = document.getElementById(id);

  if (section) {
    section.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  }
}

/* =========================
   DARK MODE
========================= */

function toggleDarkMode() {

  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }

}

window.addEventListener("load", () => {

  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
  }

});

/* =========================
   AI POPUP
========================= */

function openChat() {

  document.getElementById("chatModal").style.display = "flex";

}

function closeChat() {

  document.getElementById("chatModal").style.display = "none";

}

/* Close when clicking outside */

window.addEventListener("click", function (event) {

  const modal = document.getElementById("chatModal");

  if (event.target === modal) {
    closeChat();
  }

});

/* =========================
   CHAT
========================= */

const chatInput = document.getElementById("chatInput");
const chatBox = document.getElementById("chatBox");

/* Press Enter */

if (chatInput) {

chatInput.addEventListener("keypress", function(e){

if(e.key==="Enter"){

sendMessage();

}

});

}

/* Send */

async function sendMessage(){

const input=document.getElementById("chatInput");
const box=document.getElementById("chatBox");

const message=input.value.trim();

if(message==="") return;

/* User Bubble */

box.innerHTML+=`
<div class="user-message">
<b>You:</b><br>${message}
</div>
`;

input.value="";

box.scrollTop=box.scrollHeight;

/* AI Bubble */

const aiBubble=document.createElement("div");

aiBubble.className="ai-message";

aiBubble.innerHTML="💭 Thinking...";

box.appendChild(aiBubble);

box.scrollTop=box.scrollHeight;

try{

const response=await fetch("http://localhost:3000/chat",{

method:"POST",

headers:{
"Content-Type":"application/json"
},

body:JSON.stringify({

message:message

})

});

const data=await response.json();

aiBubble.innerHTML="<b>LevelUp AI:</b><br>"+data.reply;

box.scrollTop=box.scrollHeight;

}catch(error){

aiBubble.innerHTML="❌ Couldn't connect to the AI server.";

}

}/* ===================================
   LEVELUP SCRIPT.JS
   PART 2
=================================== */

/* =========================
   DAILY CHALLENGE
========================= */

function acceptChallenge(){

alert("🎉 Great job! You accepted today's challenge!");

createConfetti();

}

/* =========================
   CONFETTI
========================= */

function createConfetti(){

for(let i=0;i<80;i++){

const confetti=document.createElement("div");

confetti.style.position="fixed";
confetti.style.left=Math.random()*window.innerWidth+"px";
confetti.style.top="-20px";

confetti.style.width="10px";
confetti.style.height="10px";

confetti.style.borderRadius="50%";

const colors=[
"#ff7eb6",
"#ffd6e7",
"#7ec8ff",
"#ffffff",
"#ffe98d",
"#d6b3ff"
];

confetti.style.background=
colors[Math.floor(Math.random()*colors.length)];

confetti.style.zIndex="99999";

document.body.appendChild(confetti);

let y=-20;
let x=Math.random()*window.innerWidth;
let speed=2+Math.random()*5;

const fall=setInterval(()=>{

y+=speed;

confetti.style.top=y+"px";

confetti.style.left=
x+Math.sin(y/25)*12+"px";

if(y>window.innerHeight){

clearInterval(fall);

confetti.remove();

}

},20);

}

}

/* =========================
   GOALS
========================= */

let goalCount=0;

function addGoal(){

goalCount++;

alert("🎯 Goal Added!\n\nTotal Goals: "+goalCount);

}

/* =========================
   STUDY TIMER
========================= */

let timer;
let seconds=1500;

function startStudyTimer(){

clearInterval(timer);

timer=setInterval(function(){

seconds--;

let min=Math.floor(seconds/60);
let sec=seconds%60;

const display=document.getElementById("studyTimer");

if(display){

display.innerHTML=
min+":"+
(sec<10?"0":"")+sec;

}

if(seconds<=0){

clearInterval(timer);

alert("📚 Study session complete!");

createConfetti();

seconds=1500;

}

},1000);

}

/* =========================
   WATER TRACKER
========================= */

let water=0;

function drinkWater(){

water++;

alert("💧 Glasses today: "+water);

}

/* =========================
   FITNESS
========================= */

let workouts=0;

function completeWorkout(){

workouts++;

alert("💪 Workout completed!\nTotal: "+workouts);

}

/* =========================
   MOOD CHECK
========================= */

function moodCheck(mood){

alert("🌸 Mood saved: "+mood);

}

/* =========================
   AFFIRMATIONS
========================= */

const affirmations=[

"You are enough. 💖",

"Small progress is still progress. 🌸",

"You can do hard things. ✨",

"Believe in yourself. 🎀",

"Keep shining. 🤍",

"You are stronger than you think. 🌷",

"Every day is a fresh start. ☁️",

"Your future is bright. ⭐"

];

function newAffirmation(){

const quote=

affirmations[
Math.floor(
Math.random()*affirmations.length
)
];

const box=document.getElementById("affirmation");

if(box){

box.innerHTML=quote;

}else{

alert(quote);

}

}/* ===================================
   LEVELUP SCRIPT.JS
   PART 3 (FINAL)
=================================== */

/* =========================
   WELCOME MESSAGE
========================= */

window.addEventListener("load", () => {

  setTimeout(() => {
    console.log("🎀 Welcome to LevelUp!");
  }, 1000);

});

/* =========================
