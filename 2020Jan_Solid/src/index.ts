type SolidElement = {
  letter: string;
  text: string;
  offset: number;
};

const arrayOfSolidElements: Array<SolidElement> = [
  {
    letter: 'S',
    text: 'Single-responsibility principle',
    offset: -23,
  },
  {
    letter: 'O',
    text: 'Open–closed principle',
    offset: 18,
  },
  {
    letter: 'L',
    text: 'Liskov substitution principle',
    offset: -13,
  },
  {
    letter: 'I',
    text: 'Interface segregation principle',
    offset: 12,
  },
  {
    letter: 'D',
    text: 'Dependency inversion principle',
    offset: -20,
  },
];

class SlideComponent<T extends HTMLElement, U extends HTMLElement> {
  templateElement: HTMLTemplateElement;
  hostElement: T;
  element: U;
  text: string;
  startPosition: number;
  moved: boolean;
  letter: string;
  constructor(
    templateId: string,
    hostElementId: string,
    solidElement: SolidElement
  ) {
    this.moved = true;
    this.startPosition = solidElement.offset;
    this.text = solidElement.text;
    this.letter = solidElement.letter;
    this.templateElement = <HTMLTemplateElement>(
      document.getElementById(templateId)!
    );

    this.hostElement = <T>document.getElementById(hostElementId)!;

    const importedNode = document.importNode(
      this.templateElement.content,
      true
    );

    this.element = <U>importedNode.firstElementChild;

    this.attach();
    this.render();
  }

  private attach() {
    this.hostElement.insertAdjacentElement('beforeend', this.element);
  }

  render() {
    this.element.querySelector('#text')!.textContent = this.text.toString();
    const sliderElement = <HTMLDivElement>(
      this.element.querySelector('#slider')!
    );
    const textElement = <HTMLDivElement>this.element.querySelector('#text')!;
    sliderElement.style.transform = `translateY(-50%) translateX(${this.startPosition}rem)`;
    textElement.style.transform = `translateX(${this.startPosition}rem)`;
    textElement.innerText = this.text;
    sliderElement.innerText = this.letter;

    sliderElement.addEventListener('click', () => {
      let moveOffset;
      if (this.moved) {
        moveOffset = '0px';
        this.moved = false;
      } else {
        moveOffset = `${this.startPosition}rem`;
        this.moved = true;
      }
 

      sliderElement.style.transform = `translateY(-50%) translateX(${moveOffset})`;
    });
  }
}

const elementsOnPage: Array<any> = [];

arrayOfSolidElements.forEach((item) => {
  const element = new SlideComponent('template-slice', 'container', item);
  elementsOnPage.push(element);
});

document.addEventListener('click', () => {
  let allElementsMoved = true;
  elementsOnPage.forEach((element) => {
    if (element.moved == true) allElementsMoved = false;
  });
  if (allElementsMoved) {
    document.querySelectorAll('#slider').forEach((item) => {
      setTimeout(() => {
        item.classList.add('enhanced');
        item.classList.remove('border-invisible');
      }, 700);
    });
  } else {
    document.querySelectorAll('#slider').forEach((item) => {
      item.classList.add('border-invisible');
    });
  }
});
