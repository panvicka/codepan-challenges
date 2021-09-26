const span = <HTMLSpanElement>document.getElementById("count-down-number")!;
const divToAnimate = <HTMLDivElement>document.getElementById("firework")!;
const fireworkHolder = <HTMLDivElement>(
  document.querySelector(".animation-holder")!
);

const START_VALUE = 10;

let number = START_VALUE;

window.setInterval(function () {
  if (number > 0) {
    const newFireWork = document.createElement("div");
    newFireWork.id = "firework";
    newFireWork.classList.add("animate");
    fireworkHolder.appendChild(newFireWork);
    number = number - 1;
    span.innerText = number.toString();
  } else {
    span.innerText = "Click to restart";
    span.classList.add("restart-text");
    span.addEventListener("click", () => {
    number = START_VALUE;
    span.innerText = "";
    span.classList.remove("restart-text");
    });
  }
}, 1500);
