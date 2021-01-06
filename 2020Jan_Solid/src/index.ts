console.log('hesdy');
// const containerDiv = <HTMLDivElement>document.getElementById('container');
// const templateSlice = <HTMLElement>document.getElementById('slice-template');

class SlideComponent<T extends HTMLElement, U extends HTMLElement> {
  templateElement: HTMLTemplateElement;
  hostElement: T;
  element: U;
  text: string;
  startPosition: number;
  moved: boolean;
  constructor(
    templateId: string,
    hostElementId: string,
    startPosition: number,
    text: string
  ) {
    this.moved = true;
    this.startPosition = startPosition;
    this.text = text;
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

    sliderElement.addEventListener('click', () => {
      let moveOffset;
      if (this.moved) {
        moveOffset = '0px';
        this.moved = false;
      } else {
        moveOffset = `${this.startPosition}rem`;
        this.moved = true;

      }
      console.log(this.moved);      
      console.log(moveOffset);
      
      sliderElement.style.transform = `translateY(-50%) translateX(${moveOffset})`;

     });
  }
}

const slideS = new SlideComponent('template-slice', 'container', 15, 'S');
const slideL = new SlideComponent('template-slice', 'container', -16, 'O');
const slideI = new SlideComponent('template-slice', 'container', 13, 'L');
const slideD = new SlideComponent('template-slice', 'container', -13, 'I');
const slideE = new SlideComponent('template-slice', 'container',16, 'D');
