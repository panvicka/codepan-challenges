var ROWS = 4;
var TOTAL = 30;
var TILE_WIDTH = 70;
var TILE_HEIGHT = 90;
var containerDiv = document.querySelector(".container");
var head = document.querySelector(".main-head");
var person = document.querySelector(".person");
var draggingMen = false;
var oneMenDropped = 0;
person.addEventListener("mousedown", function () {
    draggingMen = true;
    if (oneMenDropped == 0) {
        containerDiv.classList.remove("no-after");
    }
    else {
        containerDiv.classList.add("no-after");
    }
    console.log("mousedown");
});
head.addEventListener("mouseup", function () {
    draggingMen = false;
    console.log("mousedown");
});
person.addEventListener("dragend", function () {
    draggingMen = false;
    person.classList.remove("invisible");
    person.classList.remove("person-hold");
    containerDiv.classList.add("no-after");
    console.log("dragend");
    var hoveredButFull = document.querySelector(".hovered-but-full");
    console.log(hoveredButFull);
    if (hoveredButFull !== null) {
        hoveredButFull.classList.remove("hovered-but-full");
    }
});
person.addEventListener("dragstart", function () {
    person.classList.add("person-hold");
    // setTimeout(() => (person.classList.add('invisible')), 0);
});
function dragOver(e) {
    e.preventDefault();
}
function dragEnter(e) {
    e.preventDefault();
    if (draggingMen === true) {
        if (this !== "undefined") {
            var hasDivPerson = this.querySelector(".person");
            if (hasDivPerson === null) {
                this.classList.add("hovered");
                console.log("entered empty");
            }
            else {
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
            var hasDivPerson = this.querySelector(".person");
            if (hasDivPerson === null) {
                addPerson(this);
                oneMenDropped = 1;
            }
        }
    }
}
function addPerson(div) {
    var newPerson = document.createElement("div");
    newPerson.classList.add("person");
    newPerson.classList.add("person-in-background");
    newPerson.classList.add("placed");
    newPerson.setAttribute("draggable", "false");
    newPerson.innerHTML = "\n    <div class=\"body\"> </div>\n    <div class=\"head\"> </div>\n    <div class=\"hand left placed\"> </div>\n    <div class=\"hand right placed \"> </div>\n    ";
    div.appendChild(newPerson);
}
window.addEventListener("load", function () { return generateArray(containerDiv); });
window.addEventListener("resize", function () { return generateArray(containerDiv); });
function generateArray(div) {
    div.innerHTML = "";
    var w = div.clientWidth;
    var h = window.innerHeight - 190;
    var numberOfTiles = Math.floor(w / TILE_WIDTH);
    var numberOfRows = Math.floor(h / TILE_HEIGHT);
    if (numberOfRows < 1) {
        numberOfRows = 1;
    }
    var total = numberOfTiles * numberOfRows;
    console.log(numberOfTiles, numberOfRows, total);
    for (var i = 0; i < total; i++) {
        var newTile = document.createElement("div");
        newTile.classList.add("tile");
        div.appendChild(newTile);
        newTile.addEventListener("dragover", dragOver);
        newTile.addEventListener("dragenter", dragEnter);
        newTile.addEventListener("dragleave", dragLeave);
        newTile.addEventListener("drop", dragDrop);
    }
}
