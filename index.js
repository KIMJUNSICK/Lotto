const result = document.querySelector(".lotto__number");
const result__bonus = document.querySelector(".lotto__bonus");
const number__1 = document.querySelector(".number__1");
const number__2 = document.querySelector(".number__2");
const number__3 = document.querySelector(".number__3");
const number__4 = document.querySelector(".number__4");
const number__5 = document.querySelector(".number__5");
const number__6 = document.querySelector(".number__6");

const NUMBERCANDI = Array(45).fill();
const CANDI = NUMBERCANDI.map(function(element, index) {
  return index + 1;
});

const SUFFLE = [];

while (CANDI.length > 0) {
  let randomNumber = CANDI.splice(
    Math.floor(Math.random() * CANDI.length),
    1
  )[0];
  SUFFLE.push(randomNumber);
}

const NUMBER = SUFFLE.slice(0, 6);
const BONUS = SUFFLE[SUFFLE.length - 1];

setTimeout(function() {
  number__1.textContent = NUMBER[0];
}, 1000);
setTimeout(function() {
  number__2.textContent = NUMBER[1];
}, 2000);
setTimeout(function() {
  number__3.textContent = NUMBER[2];
}, 3000);
setTimeout(function() {
  number__4.textContent = NUMBER[3];
}, 4000);
setTimeout(function() {
  number__5.textContent = NUMBER[4];
}, 5000);
setTimeout(function() {
  number__6.textContent = NUMBER[5];
}, 6000);

setTimeout(function() {
  result__bonus.textContent = BONUS;
}, 7000);

console.log(NUMBER, BONUS);
