let container = document.getElementById("container");
let sizing = document.getElementById("size");
let btn = document.getElementById("clear");
let erase = document.getElementById("erase");
let black = document.querySelector("#black");
let rainbow = document.querySelector("#rainbow");
let delEl = document.querySelector("#del");
let gridOff = document.querySelector("#gridOff");
let gridOn = document.querySelector("#gridOn");
let eraser = false;
let colors = false;
let blackColor;
let gridUp = false;

function createGrid(sizes) {
  for (let i = 0; i < sizes; i++) {
    let row = document.createElement("div");
    container.appendChild(row);
    for (let j = 0; j < sizes; j++) {
      let box = document.createElement("div");
      box.classList.add("cell");
      box.style.width = `${960 / sizes}px`;
      box.style.height = `${500 / sizes}px`;
      if (gridUp === true) {
        box.style.border = "1px solid black";
      }
      box.style.border = "1px solid rgba(255, 0, 0,);";
      row.appendChild(box);
    }
  }
}

container.addEventListener("mouseover", function (e) {
  if (e.target.classList.contains("cell")) {
    if (blackColor === true) {
      e.target.style.background = "black"
    }
    else if (eraser === true) {
      e.target.style.background = "white"
    }
    else if (colors === true) {
      let random = Math.floor(Math.random() * 6);
      if (random == 0) {
        e.target.style.background = "red";
      }
      if (random == 1) {
        e.target.style.background = "blue";
      }
      if (random == 2) {
        e.target.style.background = "lightgreen";
      }
      if (random == 3) {
        e.target.style.background = "orange";
      }
      if (random == 4) {
        e.target.style.background = "purple";
      }
      if (random == 5) {
        e.target.style.background = "yellow";
      }
    }
  }
})

btn.addEventListener("click", function () {
  createGrid(sizing.value);
});

delEl.addEventListener("click", () => {
  container.innerHTML = ""
})

erase.addEventListener("click", () => {
  black.style.background = "blue";
  erase.style.background = "green";
  rainbow.style.background = "blue";
  eraser = true;
  blackColor = false;
  colors = false;
})

black.addEventListener("click", () => {
  black.style.background = "green";
  erase.style.background = "blue";
  rainbow.style.background = "blue";
  eraser = false;
  colors = false;
  blackColor = true;
})

rainbow.addEventListener("click", () => {
  black.style.background = "blue";
  erase.style.background = "blue";
  rainbow.style.background = "green";
  colors = true;
  eraser = false;
  blackColor = false;
})

gridOn.addEventListener("click", () => {
  gridUp = true;
  gridOn.style.background = "green";
  gridOff.style.background = "blue";
})

gridOff.addEventListener("click", () => {
  gridUp = false;
  gridOff.style.background = "green";
  gridOn.style.background = "blue";
})