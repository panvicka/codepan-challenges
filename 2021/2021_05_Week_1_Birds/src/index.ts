// find full code here https://github.com/panvicka/codepan-challenges/tree/main/2021May_Birds

const SPEED_FACTOR = 3;
const BRANCH_WIDTH = 100;
const BRANCH_HEIGHT = 15;
const BIRD_HEAD = 35;

const wrapper = <HTMLDivElement>document.querySelector('.wrapper')!;
const birdElement = <HTMLDivElement>document.querySelector('.bird-wrapper')!;
const branchesOnPage: Array<any> = [];

class Bird {
  element: HTMLDivElement;
  currPositionX: number;
  currPositionY: number;
  isFlying: boolean;
  goalPositionX: number;
  goalPositionY: number;
  indexOfTargetedBranch: number;

  constructor(
    htmlElement: HTMLDivElement,
    positionX: number,
    positionY: number
  ) {
    this.isFlying = false;
    this.currPositionX = positionX;
    this.currPositionY = positionY;
    this.goalPositionX = 0;
    this.goalPositionY = 0;
    this.element = htmlElement;
    this.indexOfTargetedBranch = 0;
    this.place();
  }

  moveToNextPoint() {
    const dx = this.goalPositionX - this.currPositionX;
    const dy = this.goalPositionY - this.currPositionY;
    const distance = Math.sqrt(dx * dx + dy * dy);
    const rad = Math.atan2(dy, dx);
    const angle = (rad / Math.PI) * 180;
    const velX = (dx / distance) * SPEED_FACTOR;
    const velY = (dy / distance) * SPEED_FACTOR;

    this.currPositionX += velX;
    this.currPositionY += velY;
  }

  place() {
    this.element.setAttribute(
      'style',
      `left: ${this.currPositionX}px; top: ${this.currPositionY}px`
    );
  }

  render() {
    const arrayOfWingDivs = this.element.querySelectorAll('div[class~="wing"]');
    const arrayOfLegs = this.element.querySelectorAll('div[class~="leg"]');

    if (this.isFlying) {
      this.element.classList.add('fly');
      arrayOfWingDivs.forEach((div) => {
        div.classList.add('fly');
        div.classList.remove('sits');
      });

      arrayOfLegs.forEach((div) => {
        div.classList.add('sits');
      });

      this.moveToNextPoint();

      this.element.setAttribute(
        'style',
        `left: ${this.currPositionX}px; top: ${this.currPositionY}px`
      );

      if (
        Math.abs(this.currPositionX - this.goalPositionX) < 2 &&
        Math.abs(this.currPositionY - this.goalPositionY) < 2
      ) {
        this.isFlying = false;
        branchesOnPage[this.indexOfTargetedBranch].wasVisited = true;
      }
    } else {
      this.element.classList.remove('fly');
      arrayOfWingDivs.forEach((div) => {
        div.className += ' fly';
        div.classList.remove('fly');
        div.classList.add('sits');
      });

      arrayOfLegs.forEach((div) => {
        div.classList.remove('sits');
      });
    }
  }
}

const bird = new Bird(birdElement, 100, 50);
bird.isFlying = false;

class Branch {
  branchType: number;
  wasVisited: boolean;
  index: number;
  positionX: number;
  positionY: number;
  width: number;

  constructor(positionX: number, positionY: number, width?: number) {
    this.render();
    this.positionX = positionX;
    this.positionY = positionY;

    this.branchType = 1;
    this.index = 0;
    this.wasVisited = false;

    this.width = width || BRANCH_WIDTH;
  }

  render() {
    if (this.positionX !== undefined && this.positionY !== undefined) {
      console.log(this.width);
      var elem = <HTMLDivElement>document.createElement('div');
      elem.className += ' branch';
      
      elem.setAttribute(
        'style',
        `left: ${this.positionX}px; top: ${this.positionY}px; width: ${this.width}px`
      );
      
      wrapper.appendChild(elem);
    }
  }
}

const branch = new Branch(20, 118, 200);
branch.render();

wrapper.addEventListener('mousedown', (e) => {
  const branch = new Branch(e.clientX, e.clientY);
  branch.render();
  branchesOnPage.push(branch);
  console.log(branchesOnPage);
});

function animate() {
  for (let i = 0; i < branchesOnPage.length; i++) {
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
