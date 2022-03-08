var classes = ["west-coast", "great-lakes", "south-east", "east-coast"]; //list of your classes

function init() {
  classes.map((classElement) => {
    const elements = document.querySelectorAll(`.${classElement}`);
    console.log(elements);
    [...elements].map((element) => {
      element.addEventListener("mouseenter", () => {
        [...elements].map((hoveredClassElement) => {
          hoveredClassElement.classList.add("path-focused");
        });
      });
      element.addEventListener("mouseleave", () => {
        [...elements].map((hoveredClassElement) => {
          hoveredClassElement.classList.remove("path-focused");
        });
      });
    });
  });
}

window.onload = function () {
  init();
};
