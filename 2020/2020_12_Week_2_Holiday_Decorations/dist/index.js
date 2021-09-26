"use strict";
var fire = document.querySelector(".fire");
var flame = document.querySelector(".flame");
var smoke = document.querySelector(".smoke");
var candleFire = document.querySelector(".candle-fire");
candleFire.addEventListener("mousemove", function (ev) {
    if (ev.movementX && ev.movementY) {
        if (ev.movementX > 5 || ev.movementY > 5) {
            extinguishIndex = extinguishIndex - 3;
            if (extinguishIndex < 0) {
                extinguishIndex = 0;
            }
        }
    }
}, false);
var extinguishIndex = 100;
var stillOnFire = 1;
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
    fire.style.transform = "scale(" + extinguishIndex / 100 + ") translateY(" + (90 - extinguishIndex) + "px)";
    if (extinguishIndex < 90) {
        flame.style.animationName = "flicker";
    }
    else {
        flame.style.animationName = "burn-left";
    }
    if (extinguishIndex < 20) {
        candleFire.style.opacity = "0";
        smoke.style.opacity = "100";
        stillOnFire = 0;
    }
}
