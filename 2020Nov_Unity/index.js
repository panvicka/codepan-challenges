var ROWS = 4;
var TOTAL = 10;
var containerDiv = document.querySelector(".container");
var head = document.querySelector(".main-head");
var person = document.querySelector(".person");
var draggingMen = false;
head.addEventListener("mousedown", function () {
    draggingMen = true;
    person.setAttribute("draggable", "true");
    console.log("mousedown");
});
head.addEventListener("mouseup", function () {
    draggingMen = false;
    person.setAttribute("draggable", "true");
    console.log("mousedown");
});
person.addEventListener("dragend", function () {
    draggingMen = false;
    person.classList.remove('invisible');
    person.classList.remove('person-hold');
    person.setAttribute("draggable", "false");
    console.log("dragend");
});
person.addEventListener("dragstart", function () {
    person.classList.add("person-hold");
    setTimeout(function () { return (person.classList.add('invisible')); }, 0);
});
person.addEventListener("dragsend", function () {
    person.classList.remove("person-hold");
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
            }
        }
    }
}
function addPerson(div) {
    var newPerson = document.createElement("div");
    newPerson.classList.add("person");
    newPerson.classList.add("person-in-background");
    newPerson.setAttribute("draggable", "false");
    newPerson.innerHTML = "\n    <div class=\"body\"> </div>\n    <div class=\"head\"> </div>\n    <div class=\"hand left \"> </div>\n    <div class=\"hand right \"> </div>\n    ";
    div.appendChild(newPerson);
}
window.addEventListener("load", function () { return generateArray(containerDiv); });
function generateArray(div) {
    for (var i = 0; i <= TOTAL; i++) {
        var newTile = document.createElement("div");
        newTile.classList.add("tile");
        div.appendChild(newTile);
        newTile.addEventListener("dragover", dragOver);
        newTile.addEventListener("dragenter", dragEnter);
        newTile.addEventListener("dragleave", dragLeave);
        newTile.addEventListener("drop", dragDrop);
    }
}
