const color = document.getElementById("colorDisplay");
const squares = document.querySelectorAll(".square");
const btns = document.getElementById("reset");
const correct_message = document.getElementById("message");
const h1 = document.querySelector('h1');
let rgb_color = [];
let random_index;

// Guess The Color
function color_generator() {
  for (let i = 0; i < squares.length; i++) {
    let red = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    rgb_color.push(`rgb(${red}, ${blue}, ${green})`);
  }
}

color_generator();

// Guess the number function
function guess() {
  for (let i = 0; i < squares.length; i++) {
    for (let i = 0; i < squares.length; i++) {
      random_index = Math.floor(Math.random() * rgb_color.length);
      console.log(random_index);
    }
    color.innerText = rgb_color[random_index];

    squares[i].style.backgroundColor = rgb_color[random_index];
  }
}

guess();

squares[random_index].addEventListener("click", () => {
  if (rgb_color[random_index]) {
    squares[0].style.background = rgb_color[random_index];
    squares[1].style.background = rgb_color[random_index];
    squares[2].style.background = rgb_color[random_index];
    squares[3].style.background = rgb_color[random_index];
    squares[4].style.background = rgb_color[random_index];
    squares[5].style.background = rgb_color[random_index];
    correct_message.innerText = "Correct!";
    btns.innerText = "Play Again?";
    btns.addEventListener("click", () => {
      btns.innerText = "New Colors!";
      correct_message.innerText = "";
      h1.style.backgroundColor = "steelblue";
    });
    h1.style.backgroundColor = rgb_color[random_index];
  } else {
    squares[random_index].style.display = "none";
  }
});
