const color = document.getElementById("colorDisplay");
const btns = document.getElementById("reset");
const correct_message = document.getElementById("message");
const colorDisplay = document.getElementById("colorDisplay");
const h1 = document.getElementById("h1");
const hardBtn = document.getElementById("hardBtn");
const easyBtn = document.getElementById("easyBtn");
const container = document.getElementById("container");
const Score = document.querySelector('.score__paragraph');
const score_count = document.querySelector('.score');
let num_of_squares = 6;
let rgb_color = generateRandomColors(num_of_squares);;
let random_index;
let selected;

// Guess The Color
function color_generator() {
  let red = Math.floor(Math.random() * 256);
  let blue = Math.floor(Math.random() * 256);
  let green = Math.floor(Math.random() * 256);
  return `rgb(${red}, ${blue}, ${green})`;
}

function generateRandomColors(genColor) {
  let arr = [];
  for (let i = 0; i < genColor; i++) {
    arr.push(color_generator());
  }
  return arr;
}

color_generator();
generateRandomColors(num_of_squares);

function new_colors() {
  const squares = document.querySelectorAll(".square");
  let score = parseInt(score_count.textContent);
  color_generator();
  rgb_color = generateRandomColors(num_of_squares);
  for (let g = 0; g < num_of_squares; g++) {
    random_index = Math.floor(Math.random() * rgb_color.length);
    selected = rgb_color[random_index];
  }
  color.innerText = rgb_color[random_index];
  correct_message.textContent = "";
  btns.innerText = "New Colors!";
  h1.style.backgroundColor = "steelblue";
  for (let i = 0; i < num_of_squares; i++) {
    console.log(squares[i], rgb_color[i]);
    squares[i].style.display = "block";
    squares[i].style.backgroundColor = rgb_color[i];
  }
  for (let i = 0; i < num_of_squares; i++) {
    squares[i].addEventListener("click", function () {
      let clickedColor = this.style.backgroundColor;
      if (clickedColor === selected) {
        for (let i = 0; i < num_of_squares; i++) {
          squares[i].style.backgroundColor = rgb_color[random_index];
        }
        correct_message.innerText = "Correct!";
        btns.innerText = "Play Again?";
        h1.style.backgroundColor = rgb_color[random_index];
        score_count.textContent = score + 1;
        console.log(score);
      } else {
        this.style.backgroundColor = "transparent";
        correct_message.innerText = "Try Again";
      }
    });
  }
}

new_colors();

btns.addEventListener("click", () => {
  btns.innerText = "New Colors!";
  correct_message.innerText = "";
  h1.style.backgroundColor = "steelblue";
  if (
    container.innerHTML ===
    "<div class='square'></div><div class='square'></div><div class='square'></div>"
  ) {
    new_colors();
  } else {
    new_colors();
  }
});

easyBtn.addEventListener("click", () => {
  hardBtn.classList.remove("selected");
  easyBtn.classList.add("selected");
  num_of_squares = 3;
  container.innerHTML =
    "<div class='square'></div><div class='square'></div><div class='square'></div>";
  new_colors();
});

hardBtn.addEventListener("click", () => {
  easyBtn.classList.remove("selected");
  hardBtn.classList.add("selected");
  num_of_squares = 6;
  container.innerHTML =
    "<div class='square'></div><div class='square'></div><div class='square'></div><div class='square'></div><div class='square'></div><div class='square'></div>";
  new_colors();
});