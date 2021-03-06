enum CursorState {
  FALLING = 1,
  STOPPED,
}

enum UserCursor {
  OUTSIDE = 1,
  INSIDE_COUNTING,
  HUNGER_TRIGGERED,
  NO_CURSOR,
}

let sm_status = UserCursor.OUTSIDE;

type Cursor = {
  positionX: number;
  positionY: number;
  state: number;
};

const CURSOR_WIDTH = 10;
const CURSOR_HEIGHT = 20;

function stateMachine() {
  switch (sm_status) {
    case UserCursor.OUTSIDE:
      if (drawing.mouserEnter === true) {
        console.log('enter');
      }
      break;
  }
}

class DrawingApp {
  private canvas: HTMLCanvasElement;
  private context: CanvasRenderingContext2D;

  private arrayOfCursors: Array<Cursor>;

  mouserEnter: boolean;

  constructor() {
    let canvas = document.getElementById('canvas') as HTMLCanvasElement;
    let context = canvas.getContext('2d')!;
    this.arrayOfCursors = [];
    this.mouserEnter = false;

    this.canvas = canvas;
    this.context = context;

    this.canvas.addEventListener('mouseenter', () => {
      this.mouserEnter = true;
    });
  }

  reDraw() {
    // console.log('drawing');
    this.arrayOfCursors.forEach((cursor) => {
      this.context.fillRect(
        cursor.positionX,
        cursor.positionY,
        CURSOR_WIDTH,
        CURSOR_HEIGHT
      );
    });
  }

  addCursor(cursor: Cursor) {
    this.arrayOfCursors.push(cursor);
  }

  checkColision(cursor: Cursor, cursorIndex: Number) {
    let foundCollision = false;
    this.arrayOfCursors.forEach((item, index) => {
      if (
        item.positionX < cursor.positionX + CURSOR_WIDTH &&
        item.positionX + CURSOR_WIDTH > cursor.positionX &&
        item.positionY < cursor.positionY + CURSOR_HEIGHT &&
        item.positionY + CURSOR_HEIGHT > cursor.positionY
      ) {
        if (index != cursorIndex) {
          console.log('collision detected');
          foundCollision = true;
        }
      }
    });

    return foundCollision;
  }

  render() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.arrayOfCursors.forEach((cursor, index) => {
      if (cursor.state == CursorState.FALLING) {
        cursor.positionY = cursor.positionY + 3;
        // console.log(this.canvas.height);
        // console.log(cursor.positionY);

        if (cursor.positionY + CURSOR_HEIGHT > this.canvas.height) {
          cursor.state = CursorState.STOPPED;
        }

        if (this.checkColision(cursor, index) === true) {
          cursor.state = CursorState.STOPPED;
          console.log('collision detected, stop');
        }
      }
    });
    this.reDraw();
    stateMachine();
    requestAnimationFrame(() => this.render());
  }
}

const drawing = new DrawingApp();
const cursor: Cursor = {
  positionX: 0,
  positionY: 60,
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

const cursor4: Cursor = {
  positionX: 0,
  positionY: 0,
  state: CursorState.FALLING,
};

drawing.addCursor(cursor);
drawing.addCursor(cursor2);
drawing.addCursor(cursor3);
drawing.addCursor(cursor4);

drawing.render();
