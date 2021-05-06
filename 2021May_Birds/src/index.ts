console.log('hello there');

const wrapper = <HTMLDivElement>document.querySelector('.wrapper')!;

const branchesOnPage: Array<any> = [];

class Bird {
  element;
  currPositionX: number;
  currPositionY: number;
  isFlying: boolean;
  goalPositionX: number;
  goalPositionY: number;

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
  }

  render() {
    if (this.isFlying) {
    } else {
    }
  }
}

class Branch {
  branchType: number;
  wasVisited: boolean;
  index: number;
  positionX: number;
  positionY: number;

  constructor(positionX: number, positionY: number) {
    this.render();
    this.positionX = positionX;
    this.positionY = positionY;

    this.branchType = 1;
    this.index = 0;
    this.wasVisited = false;
  }

  render() {
    if (this.positionX !== undefined && this.positionY !== undefined) {
      var elem = <HTMLDivElement>document.createElement('div');
      elem.className += ' branch';
      elem.setAttribute(
        'style',
        `left: ${this.positionX}px; top: ${this.positionY}px`
      );
      wrapper.appendChild(elem);
    }
  }
}

wrapper.addEventListener('mousedown', (e) => {
  const branch = new Branch(e.clientX, e.clientY);
  branch.render();
  branchesOnPage.push(branch);
  console.log(branchesOnPage);
});
