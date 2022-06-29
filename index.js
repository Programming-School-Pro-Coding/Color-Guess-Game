const color = document.getElementById("colorDisplay");
const btns = document.getElementById("reset");
const correct_message = document.getElementById("message");
const colorDisplay = document.getElementById("colorDisplay");
const h1 = document.getElementById("h1");
const hardBtn = document.getElementById("hardBtn");
const easyBtn = document.getElementById("easyBtn");
const container = document.querySelector(".colors-container");
const message = document.querySelector(".message");
const playAgainBtn = document.querySelector(".play-again");
const burger = document.querySelector(".burger");
const mobilMenu = document.querySelector(".mobile-menu");

let num_of_squares = 6;
let rgb_color = generateRandomColors(num_of_squares);;
let random_index;
let selected;


// functions

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


function new_colors() {
  const squares = document.querySelectorAll(".square");
  color_generator();
  rgb_color = generateRandomColors(num_of_squares);
  for (let g = 0; g < num_of_squares; g++) {
    random_index = Math.floor(Math.random() * rgb_color.length);
    selected = rgb_color[random_index];
  }
  color.innerText = rgb_color[random_index];
  
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
        message.innerText = "Correct!";
        correct_message.classList.remove("hidden");
        playAgainBtn.classList.remove("hidden");
        btns.innerText = "Play Again?";
        h1.style.backgroundColor = rgb_color[random_index];
      } else {
        this.style.backgroundColor = "#232323";
        message.innerText = "Try Again";
        correct_message.classList.remove("hidden");
      }
    });
  }
}

function toggleMobileMenu () {
  let width = window.innerWidth < 401
  let state = mobilMenu.style.display;
  if(width && state === "block"){
    mobilMenu.style.display = "none"
    burger.innerText = "Show Menu"
  } else {
    mobilMenu.style.display = "block";
    burger.innerText = "Hide Menu"
  }  
  
}

//Initialize programme

color_generator();
generateRandomColors(num_of_squares);
new_colors();



// Event listeners

btns.addEventListener("click", () => {
  btns.innerText = "New Colors!";
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
  container.classList.add("easy");
  hardBtn.classList.remove("selected");
  easyBtn.classList.add("selected");
  num_of_squares = 3;
  container.innerHTML =
    "<div class='square'></div><div class='square'></div><div class='square'></div>";
  new_colors();
  toggleMobileMenu();
});

hardBtn.addEventListener("click", () => {
  container.classList.remove("easy");
  easyBtn.classList.remove("selected");
  hardBtn.classList.add("selected");
  num_of_squares = 6;
  container.innerHTML =
    "<div class='square'></div><div class='square'></div><div class='square'></div><div class='square'></div><div class='square'></div><div class='square'></div>";
  new_colors();
  toggleMobileMenu();
});

playAgainBtn.addEventListener("click", () => {
  correct_message.classList.add("hidden");
  playAgainBtn.classList.add("hidden");
  new_colors();
})

burger.addEventListener("click", toggleMobileMenu)


//Resize Observer. 

const observer = new ResizeObserver((entries)=>{
  
  const width = entries[0].contentRect.width 
  
  if ( width > 400) {
    mobilMenu.style.display = "block";
    burger.innerText = "Hide Menu"
  }
  if (width <= 400) {
    burger.innerText = "Show Menu";
    mobilMenu.style.display = "none"   
  }
})

observer.observe(correct_message)