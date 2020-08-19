let numOfRows = 16;
let colorPicker = 0;
let shade = 100
let countup = true;

const size = document.createElement('div');
size.className = "size"
size.innerHTML = `${numOfRows} x ${numOfRows}`
document.getElementById("head").appendChild(size)
document.getElementById("black").style.backgroundColor = "yellow"

function makeBoard() {
    for(x = 0; x < (parseInt(numOfRows) * parseInt(numOfRows)); x++) {
    const board = document.createElement('div');
    board.className = "color";
    board.setAttribute("id", "color")
    board.style.backgroundColor = "azure"
    board.style.opacity = "1.0";
    board.style.shade = "brightness(100%)"
    document.getElementById('board').appendChild(board);
    document.getElementById("board").style.gridTemplateColumns = `repeat(${parseInt(numOfRows)}, ${600 / numOfRows}px)`;
    document.getElementById("board").style.gridAutoRows = `${600 / parseInt(numOfRows)}px`;
  }
  const boxes = Array.from(document.querySelectorAll('.color'));
  shade = 100
  boxes.forEach(box => box.addEventListener("mouseover", function() {
  if (colorPicker == 0) {
    box.style.backgroundColor = blackColor();
    box.style.opacity = "1.0";
  } else if (colorPicker == 1) {
    box.style.opacity = "1.0";
    box.style.backgroundColor = randomColor();
  }  else if (colorPicker == 2) {
    box.style.backgroundColor = gradient();
    box.style.opacity -= ".1";
  } else if (colorPicker = 3) {
    box.style.opacity = "1.0";
    box.style.backgroundColor = clear();
  }
}));
};

function blackColor() {
    document.getElementById("black").style.backgroundColor = "yellow"
    document.getElementById("rainbow").style.backgroundColor = "azure"
    document.getElementById("trans").style.backgroundColor = "azure"
    document.getElementById("cleared").style.backgroundColor = "azure"
    board.style.removeProperty("animation");
    colorPicker = 0
    return "black"
}

function randomColor() {
    document.getElementById("black").style.backgroundColor = "azure"
    document.getElementById("rainbow").style.backgroundColor = "yellow"
    document.getElementById("trans").style.backgroundColor = "azure"
    document.getElementById("cleared").style.backgroundColor = "azure"
    board.style.removeProperty("animation");
    colorPicker = 1
    const randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
    return randomColor;
}

function gradient() {
    document.getElementById("black").style.backgroundColor = "azure"
    document.getElementById("rainbow").style.backgroundColor = "azure"
    document.getElementById("trans").style.backgroundColor = "yellow"
    document.getElementById("cleared").style.backgroundColor = "azure"
    board.style.removeProperty("animation");
    board.style.backgroundColor = "black"
    colorPicker = 2
    return "white"
}

function clear() {
    document.getElementById("black").style.backgroundColor = "azure"
    document.getElementById("rainbow").style.backgroundColor = "azure"
    document.getElementById("trans").style.backgroundColor = "azure"
    document.getElementById("cleared").style.backgroundColor = "yellow"
    board.style.removeProperty("animation");
    colorPicker = 3
    return "azure"
}

function gridSize() {
  erase()
  numOfRows = prompt("How big of a container? Max 150");
  let loop = true;
  while (loop) {
      if (!numOfRows) {
      numOfRows = 16;
    } else if (parseInt(numOfRows) > 150)  {
      numOfRows = prompt("Max is 150");
    } else if (parseInt(numOfRows) < 1) {
      numOfRows = prompt("Please enter a POSITIVE number");
    } else if (isNaN(numOfRows)) {
      numOfRows = prompt("Please enter a number");
    } else {
      loop = false
    }
    size.innerHTML = `${numOfRows} x ${numOfRows}`
  }
  makeBoard();
}

function erase() {
  for(x = 0; x < (parseInt(numOfRows) * parseInt(numOfRows)); x++) {
    board.removeChild(board.lastElementChild);
  }
    
  board.style.animation = "shake 0.5s", 
  board.style.animationIterationCount = "1"
}

makeBoard();
reset.addEventListener("click", function () { erase(), makeBoard() });
black.addEventListener("click", blackColor);
rainbow.addEventListener("click", randomColor);
changeSize.addEventListener("click", gridSize)
trans.addEventListener("click", gradient);
cleared.addEventListener("click", clear);
