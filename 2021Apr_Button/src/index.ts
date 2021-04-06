enum CursorState {
  FALLING = 1,
  STOPPED,
}

type Cursor = {
  positionX: number;
  positionY: number;
  state: number;
};

const CURSOR_WIDTH = 10;
const CURSOR_HEIGHT = 20;


class DrawingApp {
  private canvas: HTMLCanvasElement;
  private context: CanvasRenderingContext2D;

  private arrayOfCursors: Array<Cursor>;

  constructor() {
    let canvas = document.getElementById('canvas') as HTMLCanvasElement;
    let context = canvas.getContext('2d')!;
    this.arrayOfCursors = [];

    this.canvas = canvas;
    this.context = context;
  }

  reDraw() {
    // console.log('drawing');
    this.arrayOfCursors.forEach((cursor) => {
      this.context.fillRect(cursor.positionX, cursor.positionY, CURSOR_WIDTH, CURSOR_HEIGHT);
    });
  }

  addCursor(cursor: Cursor) {
    this.arrayOfCursors.push(cursor);
  }

  checkColision(cursor, cursorIndex) {
    this.arrayOfCursors.forEach((item, index) => {

      // if ()

    });
  }

  render() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.arrayOfCursors.forEach((cursor) => {
      if (cursor.state == CursorState.FALLING) {
        cursor.positionY = cursor.positionY + 3;
        console.log(this.canvas.height);
        console.log(cursor.positionY);

        if (cursor.positionY + CURSOR_HEIGHT > this.canvas.height) {
          cursor.state = CursorState.STOPPED;
        }
      }
    });
    this.reDraw();
    requestAnimationFrame(() => this.render());
  }
}

const drawing = new DrawingApp();
const cursor: Cursor = {
  positionX: 0,
  positionY: 0,
  state: CursorState.FALLING,
};

const cursor2: Cursor = {
  positionX: 50,
  positionY: 90,
  state: CursorState.FALLING,
};

const cursor3: Cursor = {
  positionX: 30,
  positionY: 150,
  state: CursorState.FALLING,
};

drawing.addCursor(cursor);
drawing.addCursor(cursor2);
drawing.addCursor(cursor3);

drawing.render();
