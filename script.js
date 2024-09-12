// const pianoKeys = document?.querySelectorAll(".piano-keys .key");
// const VolumnSlider=document.querySelector('.volumn-slider input');
// console.log(VolumnSlider.value)
// // console.log(pianoKeys);
// let audio = new Audio("tunes/a.wav");
// let allKeys = [];
// const playTune = (key) => {
//   console.log(key);
//   audio = new Audio("tunes/a.wav");
//   audio.src = `tunes/${key}.wav`;
//   audio.play();
// };
// pianoKeys.forEach((key) => {
//   allKeys.push(key.dataset.key);
//   key.addEventListener("click", () => playTune(key.dataset.key));
// });

// const pressedKey = (e) => {
//   console.log(e.key);
//   if (allKeys.includes(e.key)) playTune(e.key);
// };
// const handleVolumn=(val)=>{
// console.log(val.target.value);
// audio.volume=val.target.value;
// }
// VolumnSlider.addEventListener('input',handleVolumn)
// document.addEventListener("keydown", pressedKey);

const pianoKeys = document?.querySelectorAll(".piano-keys .key");
const VolumnSlider = document.querySelector(".volumn-slider input");
console.log(VolumnSlider.value);
const lastkey = "";
// console.log(pianoKeys);
let audio = new Audio("tunes/a.wav");
let allKeys = [];
const playTune = (key) => {
  console.log(key);
  if (lastkey == key) {
    audio.src = `tunes/${key}.wav`;
  } else {
    audio = new Audio("tunes/a.wav");
    audio.src = `tunes/${key}.wav`;
  }

  audio.play();
};
pianoKeys.forEach((key) => {
  allKeys.push(key.dataset.key);
  key.addEventListener("click", () => playTune(key.dataset.key));
});

const pressedKey = (e) => {
  console.log(e.key);
  if (allKeys.includes(e.key)) playTune(e.key);
};
const handleVolumn = (val) => {
  console.log(val.target.value);
  audio.volume = val.target.value;
};
VolumnSlider.addEventListener("input", handleVolumn);
document.addEventListener("keydown", pressedKey);
