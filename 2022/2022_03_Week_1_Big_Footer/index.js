var classes = ["west-coast", "great-lakes", "south-east", "east-coast"];

function init() {
  classes.map((classElement) => {
    const text = document.querySelector(`#${classElement}`);
    // select all map elements
    const elements = document.querySelectorAll(`.${classElement}`);
    console.log(elements);
    // loop map parts and add reaction to titles
    [...elements].map((element) => {
      element.addEventListener("mouseenter", () => {
        [...elements].map((hoveredClassElement) => {
          hoveredClassElement.classList.add("path-focused");
          text.classList.add("text-focused");
        });
      });
      element.addEventListener("mouseleave", () => {
        [...elements].map((hoveredClassElement) => {
          hoveredClassElement.classList.remove("path-focused");
          text.classList.remove("text-focused");
        });
      });
    });

    const menuElements = document.querySelectorAll(`#${classElement}`);

    [...menuElements].map((element) => {
      element.addEventListener("mouseenter", () => {   
        text.classList.add("text-focused");     
        [...elements].map((hoveredClassElement) => {
          hoveredClassElement.classList.add("path-focused");
        });
      });
      element.addEventListener("mouseleave", () => {
        text.classList.remove("text-focused");
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
