"use strict";
// find full code here https://github.com/panvicka/codepan-challenges/tree/main/2021May_Birds
var SPEED_FACTOR = 3;
var BRANCH_WIDTH = 100;
var BRANCH_HEIGHT = 15;
var BIRD_HEAD = 35;
var wrapper = document.querySelector('.wrapper');
var birdElement = document.querySelector('.bird-wrapper');
var branchesOnPage = [];
var Bird = /** @class */ (function () {
    function Bird(htmlElement, positionX, positionY) {
        this.isFlying = false;
        this.currPositionX = positionX;
        this.currPositionY = positionY;
        this.goalPositionX = 0;
        this.goalPositionY = 0;
        this.element = htmlElement;
        this.indexOfTargetedBranch = 0;
        this.place();
    }
    Bird.prototype.moveToNextPoint = function () {
        var dx = this.goalPositionX - this.currPositionX;
        var dy = this.goalPositionY - this.currPositionY;
        var distance = Math.sqrt(dx * dx + dy * dy);
        var rad = Math.atan2(dy, dx);
        var angle = (rad / Math.PI) * 180;
        var velX = (dx / distance) * SPEED_FACTOR;
        var velY = (dy / distance) * SPEED_FACTOR;
        this.currPositionX += velX;
        this.currPositionY += velY;
    };
    Bird.prototype.place = function () {
        this.element.setAttribute('style', "left: " + this.currPositionX + "px; top: " + this.currPositionY + "px");
    };
    Bird.prototype.render = function () {
        var arrayOfWingDivs = this.element.querySelectorAll('div[class~="wing"]');
        var arrayOfLegs = this.element.querySelectorAll('div[class~="leg"]');
        if (this.isFlying) {
            this.element.classList.add('fly');
            arrayOfWingDivs.forEach(function (div) {
                div.classList.add('fly');
                div.classList.remove('sits');
            });
            arrayOfLegs.forEach(function (div) {
                div.classList.add('sits');
            });
            this.moveToNextPoint();
            this.element.setAttribute('style', "left: " + this.currPositionX + "px; top: " + this.currPositionY + "px");
            if (Math.abs(this.currPositionX - this.goalPositionX) < 2 &&
                Math.abs(this.currPositionY - this.goalPositionY) < 2) {
                this.isFlying = false;
                branchesOnPage[this.indexOfTargetedBranch].wasVisited = true;
            }
        }
        else {
            this.element.classList.remove('fly');
            arrayOfWingDivs.forEach(function (div) {
                div.className += ' fly';
                div.classList.remove('fly');
                div.classList.add('sits');
            });
            arrayOfLegs.forEach(function (div) {
                div.classList.remove('sits');
            });
        }
    };
    return Bird;
}());
var bird = new Bird(birdElement, 100, 50);
bird.isFlying = false;
var Branch = /** @class */ (function () {
    function Branch(positionX, positionY, width) {
        this.render();
        this.positionX = positionX;
        this.positionY = positionY;
        this.branchType = 1;
        this.index = 0;
        this.wasVisited = false;
        this.width = width || BRANCH_WIDTH;
    }
    Branch.prototype.render = function () {
        if (this.positionX !== undefined && this.positionY !== undefined) {
            console.log(this.width);
            var elem = document.createElement('div');
            elem.className += ' branch';
            elem.setAttribute('style', "left: " + this.positionX + "px; top: " + this.positionY + "px; width: " + this.width + "px");
            wrapper.appendChild(elem);
        }
    };
    return Branch;
}());
var branch = new Branch(20, 118, 200);
branch.render();
wrapper.addEventListener('mousedown', function (e) {
    var branch = new Branch(e.clientX, e.clientY);
    branch.render();
    branchesOnPage.push(branch);
    console.log(branchesOnPage);
});
function animate() {
    for (var i = 0; i < branchesOnPage.length; i++) {
        if (branchesOnPage[i].wasVisited == 0) {
            bird.goalPositionX =
                branchesOnPage[i].positionX - BRANCH_WIDTH / 2 + BIRD_HEAD / 2;
            bird.goalPositionY = branchesOnPage[i].positionY - 1.8 * BIRD_HEAD;
            bird.isFlying = true;
            bird.indexOfTargetedBranch = i;
            break;
        }
    }
    bird.render();
    window.requestAnimationFrame(animate);
}
animate();
