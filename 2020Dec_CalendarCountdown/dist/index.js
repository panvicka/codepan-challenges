"use strict";
var span = document.getElementById("count-down-number");
var divToAnimate = document.getElementById("firework");
var fireworkHolder = (document.querySelector(".animation-holder"));
var START_VALUE = 10;
var number = START_VALUE;
window.setInterval(function () {
    if (number > 0) {
        var newFireWork = document.createElement("div");
        newFireWork.id = "firework";
        newFireWork.classList.add("animate");
        fireworkHolder.appendChild(newFireWork);
        number = number - 1;
        span.innerText = number.toString();
    }
    else {
        span.innerText = "Click to restart";
        span.classList.add("restart-text");
        span.addEventListener("click", function () {
            number = START_VALUE;
            span.innerText = "";
            span.classList.remove("restart-text");
        });
    }
}, 1500);
