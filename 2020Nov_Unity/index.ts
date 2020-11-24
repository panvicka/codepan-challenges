const ROWS = 4;
const TOTAL = 10;

const containerDiv = document.querySelector<HTMLElement>(".container");
const head = document.querySelector<HTMLElement>(".main-head");
const person = document.querySelector<HTMLElement>(".person");

let draggingMen = false;

head.addEventListener("mousedown", () => {
  draggingMen = true;
  person.setAttribute("draggable", "true");
  console.log("mousedown");
});

head.addEventListener("mouseup", () => {
  draggingMen = false;
  person.setAttribute("draggable", "true");
  console.log("mousedown");
});

person.addEventListener("dragend", () => {
  draggingMen = false;
  person.classList.remove('invisible');
  person.classList.remove('person-hold')

  person.setAttribute("draggable", "false");
  console.log("dragend");
});

person.addEventListener("dragstart", () => {
  person.classList.add("person-hold");
  setTimeout(() => (person.classList.add('invisible')), 0);
});

person.addEventListener("dragsend", () => {
  person.classList.remove("person-hold");
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
      }
    }
  }
}

function addPerson(div: HTMLElement) {
  const newPerson = document.createElement("div");
  newPerson.classList.add("person");
  newPerson.classList.add("person-in-background");
  newPerson.setAttribute("draggable", "false");
  newPerson.innerHTML = `
    <div class="body"> </div>
    <div class="head"> </div>
    <div class="hand left "> </div>
    <div class="hand right "> </div>
    `;
  div.appendChild(newPerson);
}

window.addEventListener("load", () => generateArray(containerDiv));

function generateArray(div: HTMLElement) {
  for (let i = 0; i <= TOTAL; i++) {
    const newTile = document.createElement("div");
    newTile.classList.add("tile");

    div.appendChild(newTile);
    newTile.addEventListener("dragover", dragOver);
    newTile.addEventListener("dragenter", dragEnter);
    newTile.addEventListener("dragleave", dragLeave);
    newTile.addEventListener("drop", dragDrop);
  }
}
