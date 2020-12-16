const fire = <HTMLDivElement>document.querySelector(".fire")!;
const flame = <HTMLDivElement>document.querySelector(".flame")!;
const smoke = <HTMLDivElement>document.querySelector(".smoke")!;
const candleFire = <HTMLDivElement>document.querySelector(".candle-fire")!;

candleFire.addEventListener(
  "mousemove",
  function (ev: MouseEventInit) {
     if (ev.movementX && ev.movementY) {
      if (ev.movementX > 5 || ev.movementY > 5) {
        extinguishIndex = extinguishIndex - 3;
        if (extinguishIndex < 0) {
          extinguishIndex = 0;
        }
      }
    }
  },
  false
);

let extinguishIndex = 100;
let stillOnFire = 1;

window.setInterval(function () {
  if (stillOnFire == 1) {
    if (extinguishIndex > 0) {
      extinguishIndex = extinguishIndex + 1;
      if (extinguishIndex > 100) {
        extinguishIndex = 100;
      }
    }
  }
  handleExtinguish();
}, 300);

function handleExtinguish() {
  fire.style.transform = `scale(${extinguishIndex / 100}) translateY(${
    90 - extinguishIndex
  }px)`;
  if (extinguishIndex < 90) {
    flame.style.animationName = `flicker`;
  } else {
    flame.style.animationName = `burn-left`;
  }

  if (extinguishIndex < 20) {
    candleFire.style.opacity = `0`;
    smoke.style.opacity = `100`;
    stillOnFire = 0;
  }
}
