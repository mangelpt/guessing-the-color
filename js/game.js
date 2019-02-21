var numberOfSquares = 6;
var colors = generateRandomColors(numberOfSquares);
var square = document.querySelectorAll(".square");
var mesageDisplay = document.querySelector("#message");
var pickedColor = pickColor();
var colorDisplay = document.querySelector("#colorDisplay");
colorDisplay.textContent = pickedColor;

/* buttons*/
var resetButton = document.querySelector("#reset");
var hard = document.querySelector("#hard");
var easy = document.querySelector("#easy");
var stripe = document.querySelector("#stripe");
var h = document.querySelector("#h");

/** easy button */
easy.addEventListener("click", function() {
  easy.classList.add("selected");
  hard.classList.remove("selected");
  numberOfSquares = 3;
  colors = generateRandomColors(numberOfSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  for (let i = 0; i < square.length; i++) {
    if (colors[i]) {
      square[i].style.backgroundColor = colors[i];
    } else {
      square[i].style.display = "none";
    }
  }
});
/**hard buttons */
hard.addEventListener("click", function() {
  hard.classList.add("selected");
  easy.classList.remove("selected");
  numberOfSquares = 6;
  colors = generateRandomColors(numberOfSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  for (let i = 0; i < square.length; i++) {
    square[i].style.display = "block";
    square[i].style.backgroundColor = colors[i];
  }
});

/**reset button */
resetButton.addEventListener("click", function() {
  numberOfSquares = 6;
  colors = generateRandomColors(numberOfSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  for (let i = 0; i < square.length; i++) {
    square[i].style.backgroundColor = colors[i];
  }
  /**remove style buttons */
  easy.classList.remove("selected");
  hard.classList.remove("selected");
});

/**main */

for (let i = 0; i < square.length; i++) {
  // initial colors
  square[i].style.backgroundColor = colors[i];
  //click listeners to squares
  square[i].addEventListener("click", function() {
    //grab color of clicked square
    var clickedColor = this.style.backgroundColor;
    // compare color to picked color
    if (clickedColor === pickedColor) {
      mesageDisplay.textContent = "correct";
      /* reset button */
      resetButton.style.backgroundColor = pickedColor;
      resetButton.classList.add("border");
      resetButton.textContent = "Play Again?";
      /**hard */
      hard.style.backgroundColor = pickedColor;
      hard.classList.add("border");

      /**easy */
      easy.style.backgroundColor = pickedColor;
      easy.classList.add("border");
      /** */
      stripe.style.backgroundColor = clickedColor;
      h.style.backgroundColor = clickedColor;
      /* reset button */
      mesageDisplay.style.backgroundColor = clickedColor;

      changeColor(clickedColor);
    } else {
      this.style.backgroundColor = "#232323";
      mesageDisplay.textContent = "try again";
      mesageDisplay.style.backgroundColor = "#232323";
      resetButton.textContent = "New Colors";
    }
  });
}

// function changeColor
function changeColor(color) {
  for (let i = 0; i < square.length; i++) {
    //change each color to match given color
    square[i].style.backgroundColor = color;
  }
}

//function picker color
function pickColor() {
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

// generate colors
function generateRandomColors(num) {
  var arr = [];

  for (let i = 0; i < num; i++) {
    arr.push(randomColor());
  }
  return arr;
}

// random colors

function randomColor() {
  //red color
  var r = Math.floor(Math.random() * 256);
  //green color
  var g = Math.floor(Math.random() * 256);
  //blue color
  var b = Math.floor(Math.random() * 256);

  return "rgb(" + r + ", " + g + ", " + b + ")";
}
