// =========================
// LOADER
// =========================

window.addEventListener("load", () => {

setTimeout(() => {

document.getElementById("loader").style.opacity = "0";

setTimeout(() => {

document.getElementById("loader").style.display = "none";

},1000);

},2500);

});

// =========================
// CUSTOM CURSOR
// =========================

const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove",(e)=>{

cursor.style.left = e.clientX + "px";
cursor.style.top = e.clientY + "px";

});

// =========================
// SCROLL REVEAL
// =========================

const reveals = document.querySelectorAll(".reveal");

function revealSections(){

reveals.forEach(section=>{

const top = section.getBoundingClientRect().top;

if(top < window.innerHeight - 120){

section.classList.add("active");

}

});

}

window.addEventListener("scroll",revealSections);

revealSections();

// =========================
// ENVELOPE OPEN
// =========================

const envelope = document.getElementById("openLetter");
const letter = document.getElementById("letter");

envelope.addEventListener("click",()=>{

envelope.style.transform =
"rotateX(180deg) scale(.8)";

envelope.style.opacity = "0";

setTimeout(()=>{

letter.style.display = "block";

letter.scrollIntoView({
behavior:"smooth"
});

},500);

});

// =========================
// FINAL MESSAGE
// =========================

const surpriseBtn =
document.getElementById("surpriseBtn");

const finalMessage =
document.getElementById("finalMessage");

surpriseBtn.addEventListener("click",()=>{

finalMessage.style.display = "block";

createRoseRain();

surpriseBtn.innerHTML =
"Forever ❤️";

});

// =========================
// ROSE RAIN
// =========================

function createRoseRain(){

const container =
document.getElementById("roseContainer");

for(let i=0;i<120;i++){

setTimeout(()=>{

const rose =
document.createElement("div");

rose.classList.add("rose");

rose.innerHTML = "🌹";

rose.style.left =
Math.random()*100 + "vw";

rose.style.animationDuration =
(Math.random()*5+4)+"s";

rose.style.opacity =
Math.random();

rose.style.fontSize =
(Math.random()*25+15)+"px";

container.appendChild(rose);

setTimeout(()=>{

rose.remove();

},10000);

},i*120);

}

}

// =========================
// PARALLAX HERO
// =========================

const heroBg =
document.querySelector(".hero-bg");

window.addEventListener("scroll",()=>{

let value =
window.scrollY * 0.25;

heroBg.style.transform =
`translateY(${value}px) scale(1.15)`;

});

// =========================
// PHOTO CARDS FLOAT EFFECT
// =========================

const cards =
document.querySelectorAll(".photo-card");

cards.forEach(card=>{

card.addEventListener("mousemove",(e)=>{

const rect =
card.getBoundingClientRect();

const x =
e.clientX - rect.left;

const y =
e.clientY - rect.top;

const rotateY =
((x / rect.width)-0.5)*18;

const rotateX =
((y / rect.height)-0.5)*-18;

card.style.transform =
`perspective(1000px)
rotateX(${rotateX}deg)
rotateY(${rotateY}deg)
scale(1.05)`;

});

card.addEventListener("mouseleave",()=>{

card.style.transform =
"perspective(1000px) rotateX(0) rotateY(0) scale(1)";

});

});

// =========================
// HERO TITLE ANIMATION
// =========================

const heroTitle =
document.querySelector(".hero-title");

heroTitle.style.opacity = "0";
heroTitle.style.transform =
"translateY(70px)";

setTimeout(()=>{

heroTitle.style.transition =
"1.8s ease";

heroTitle.style.opacity = "1";

heroTitle.style.transform =
"translateY(0px)";

},3000);

// =========================
// TYPING EFFECT
// =========================

const subtitle =
document.querySelector(".hero-subtitle");

const text =
subtitle.innerText;

subtitle.innerText = "";

let index = 0;

function typeText(){

if(index < text.length){

subtitle.innerHTML +=
text.charAt(index);

index++;

setTimeout(typeText,40);

}

}

setTimeout(typeText,3500);

// =========================
// FLOATING HEARTS
// =========================

function createHeart(){

const heart =
document.createElement("div");

heart.innerHTML = "❤️";

heart.style.position = "fixed";

heart.style.left =
Math.random()*100 + "vw";

heart.style.bottom = "-50px";

heart.style.fontSize =
(Math.random()*20+15)+"px";

heart.style.opacity = ".7";

heart.style.pointerEvents =
"none";

heart.style.zIndex = "100";

heart.style.transition =
"all 8s linear";

document.body.appendChild(heart);

setTimeout(()=>{

heart.style.transform =
`translateY(-120vh)
rotate(${Math.random()*720}deg)`;

heart.style.opacity = "0";

},100);

setTimeout(()=>{

heart.remove();

},8000);

}

setInterval(createHeart,2500);

// =========================
// TIMELINE GLOW
// =========================

const timelineCards =
document.querySelectorAll(
".timeline-content"
);

timelineCards.forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.boxShadow =
"0 0 40px rgba(255,122,162,.35)";

});

card.addEventListener("mouseleave",()=>{

card.style.boxShadow =
"none";

});

});

// =========================
// MUSIC (DISABLED)
// =========================

// Silent mode for Biwi ❤️

// =========================
// SECRET MESSAGE
// =========================

let clickCount = 0;

document.querySelector(".hero-title")
.addEventListener("click",()=>{

clickCount++;

if(clickCount === 7){

alert(
"❤️ No matter how many anniversaries come, I will always choose you, Abhishikta ❤️"
);

}

});

// =========================
// STAR TWINKLE
// =========================

setInterval(()=>{

const stars =
document.getElementById("stars");

stars.style.opacity =
Math.random()*0.5 + 0.5;

},2000);

// =========================
// END
// =========================
