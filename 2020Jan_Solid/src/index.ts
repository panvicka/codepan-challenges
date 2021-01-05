console.log('hesdy');
const containerDiv = <HTMLDivElement>document.getElementById('container');
const templateSlice = <HTMLElement>document.getElementById('slice');

class SlideComponent<T extends HTMLElement, U extends HTMLElement> {
  templateElement: HTMLTemplateElement;
  hostElement: T;
  element: U;
  text: string;

  constructor(
    templateId: string,
    hostElementId: string,
    startPosition: number,
    text: string
  ) {
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
  }
}

const slideS = new SlideComponent('slice', 'container', 10, 'S');
 const slideL = new SlideComponent('slice', 'container', 10, 'O');
 const slideI = new SlideComponent('slice', 'container', 10, 'L');
 const slideD = new SlideComponent('slice', 'container', 10, 'I');
 const slideE = new SlideComponent('slice', 'container', 10, 'D');
 