"use strict";
var CursorState;
(function (CursorState) {
    CursorState[CursorState["FALLING"] = 1] = "FALLING";
    CursorState[CursorState["STOPPED"] = 2] = "STOPPED";
})(CursorState || (CursorState = {}));
var UserCursor;
(function (UserCursor) {
    UserCursor[UserCursor["OUTSIDE"] = 1] = "OUTSIDE";
    UserCursor[UserCursor["INSIDE_COUNTING"] = 2] = "INSIDE_COUNTING";
    UserCursor[UserCursor["HUNGER_TRIGGERED"] = 3] = "HUNGER_TRIGGERED";
    UserCursor[UserCursor["NO_CURSOR"] = 4] = "NO_CURSOR";
})(UserCursor || (UserCursor = {}));
var sm_status = UserCursor.OUTSIDE;
var CURSOR_WIDTH = 10;
var CURSOR_HEIGHT = 20;
function stateMachine() {
    switch (sm_status) {
        case UserCursor.OUTSIDE:
            if (drawing.mouserEnter === true) {
                console.log('enter');
            }
            break;
    }
}
var DrawingApp = /** @class */ (function () {
    function DrawingApp() {
        var _this = this;
        var canvas = document.getElementById('canvas');
        var context = canvas.getContext('2d');
        this.arrayOfCursors = [];
        this.mouserEnter = false;
        this.canvas = canvas;
        this.context = context;
        this.canvas.addEventListener('mouseenter', function () {
            _this.mouserEnter = true;
        });
    }
    DrawingApp.prototype.reDraw = function () {
        var _this = this;
        // console.log('drawing');
        this.arrayOfCursors.forEach(function (cursor) {
            _this.context.fillRect(cursor.positionX, cursor.positionY, CURSOR_WIDTH, CURSOR_HEIGHT);
        });
    };
    DrawingApp.prototype.addCursor = function (cursor) {
        this.arrayOfCursors.push(cursor);
    };
    DrawingApp.prototype.checkColision = function (cursor, cursorIndex) {
        var foundCollision = false;
        this.arrayOfCursors.forEach(function (item, index) {
            if (item.positionX < cursor.positionX + CURSOR_WIDTH &&
                item.positionX + CURSOR_WIDTH > cursor.positionX &&
                item.positionY < cursor.positionY + CURSOR_HEIGHT &&
                item.positionY + CURSOR_HEIGHT > cursor.positionY) {
                if (index != cursorIndex) {
                    console.log('collision detected');
                    foundCollision = true;
                }
            }
        });
        return foundCollision;
    };
    DrawingApp.prototype.render = function () {
        var _this = this;
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.arrayOfCursors.forEach(function (cursor, index) {
            if (cursor.state == CursorState.FALLING) {
                cursor.positionY = cursor.positionY + 3;
                // console.log(this.canvas.height);
                // console.log(cursor.positionY);
                if (cursor.positionY + CURSOR_HEIGHT > _this.canvas.height) {
                    cursor.state = CursorState.STOPPED;
                }
                if (_this.checkColision(cursor, index) === true) {
                    cursor.state = CursorState.STOPPED;
                    console.log('collision detected, stop');
                }
            }
        });
        this.reDraw();
        stateMachine();
        requestAnimationFrame(function () { return _this.render(); });
    };
    return DrawingApp;
}());
var drawing = new DrawingApp();
var cursor = {
    positionX: 0,
    positionY: 60,
    state: CursorState.FALLING,
};
var cursor2 = {
    positionX: 50,
    positionY: 90,
    state: CursorState.FALLING,
};
var cursor3 = {
    positionX: 30,
    positionY: 150,
    state: CursorState.FALLING,
};
var cursor4 = {
    positionX: 0,
    positionY: 0,
    state: CursorState.FALLING,
};
drawing.addCursor(cursor);
drawing.addCursor(cursor2);
drawing.addCursor(cursor3);
drawing.addCursor(cursor4);
drawing.render();
