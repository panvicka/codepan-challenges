const ROWS = 4;
 const TILE_WIDTH = 70;
const TILE_HEIGHT = 90;

const containerDiv = document.querySelector<HTMLElement>(".container");
const head = document.querySelector<HTMLElement>(".main-head");
const person = document.querySelector<HTMLElement>(".person");

let draggingMen = false;
let oneMenDropped = 0;

person.addEventListener("mousedown", () => {
  draggingMen = true;
  if (oneMenDropped == 0) {
    containerDiv.classList.remove("no-after");
  } else {
    containerDiv.classList.add("no-after");
  }

  console.log("mousedown");
});

head.addEventListener("mouseup", () => {
  draggingMen = false;

  console.log("mousedown");
});

person.addEventListener("dragend", () => {
  draggingMen = false;
  person.classList.remove("invisible");
  person.classList.remove("person-hold");
  containerDiv.classList.add("no-after");
  console.log("dragend");

  const hoveredButFull = document.querySelector(".hovered-but-full");
  console.log(hoveredButFull);

  if (hoveredButFull !== null) {
    hoveredButFull.classList.remove("hovered-but-full");
  }
});

person.addEventListener("dragstart", () => {
  person.classList.add("person-hold");
 });

function dragOver(e) {
  e.preventDefault();
}

function dragEnter(e) {
  e.preventDefault();

  if (draggingMen === true) {
    if (this !== "undefined") {
      const hasDivPerson = this.querySelector(".person");
      if (hasDivPerson === null) {
        this.classList.add("hovered");
        console.log("entered empty");
      } else {
        this.classList.add("hovered-but-full");
        console.log("entered full");
      }
    }
  }
}

function dragLeave() {
  console.log("leave");
  if (this !== "undefined") {
    this.classList.remove("hovered");
    this.classList.remove("hovered-but-full");
  }
}

function dragDrop() {
  console.log("drop");
  if (draggingMen === true) {
    if (this !== "undefined") {
      this.classList.remove("hovered");
      const hasDivPerson = this.querySelector(".person");
      if (hasDivPerson === null) {
        addPerson(this);
        oneMenDropped = 1;
      }
    }
  }
}

function addPerson(div: HTMLElement) {
  const newPerson = document.createElement("div");
  newPerson.classList.add("person");
  newPerson.classList.add("person-in-background");
  newPerson.classList.add("placed");

  newPerson.setAttribute("draggable", "false");
  newPerson.innerHTML = `
    <div class="body"> </div>
    <div class="head"> </div>
    <div class="hand left placed"> </div>
    <div class="hand right placed "> </div>
    `;
  div.appendChild(newPerson);
}

window.addEventListener("load", () => generateArray(containerDiv));
window.addEventListener("resize", () => generateArray(containerDiv));

function generateArray(div: HTMLElement) {
  div.innerHTML = "";
  let w = div.clientWidth;
  let h = window.innerHeight - 190;

  const numberOfTiles = Math.floor(w / TILE_WIDTH);
  let numberOfRows = Math.floor(h / TILE_HEIGHT);
  if (numberOfRows < 1) {
    numberOfRows = 1;
  }
  const total = numberOfTiles * numberOfRows;
  console.log(numberOfTiles, numberOfRows, total);

  for (let i = 0; i < total; i++) {
    const newTile = document.createElement("div");
    newTile.classList.add("tile");

    div.appendChild(newTile);
    newTile.addEventListener("dragover", dragOver);
    newTile.addEventListener("dragenter", dragEnter);
    newTile.addEventListener("dragleave", dragLeave);
    newTile.addEventListener("drop", dragDrop);
  }
}
