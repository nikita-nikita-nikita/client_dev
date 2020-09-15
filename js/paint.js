import {TOOL_BRUSH, TOOL_ERASER} from "./tools.js";
import socket from "./socket.js";


class Paint {
    constructor() {
        this.aside = document.querySelector("aside");
        this.canvas = document.querySelector("#canvasDraw");
        this.context = this.canvas.getContext("2d");
        this.canvas.height = window.innerHeight;
        this.canvas.width = window.innerWidth;
        this.isDrawing = false;
        this.actionType = null;
        this.cords = [];
        this._figuresStack = [];
    }

    addToStack = (figure) => this._figuresStack.push(figure);

    set activeTool(tool) {
        this.tool = tool;
        console.log(tool);
    }

    set currentColor(color) {
        this.color = color;
        console.log(color);
    }

    init() {
        this.canvas.onmousedown = e => this.onMouseDown(e);
        this.canvas.onmouseup = e => this.onMouseUp(e);
        this.aside.ondblclick = () => this.eraseAll();
    }

    onMouseDown(e) {
        this.context.beginPath();
        this.isDrawing = true;
        switch (this.tool) {
            case TOOL_BRUSH:
                console.log("brush!!");
                this.actionType = "brush";
                this.canvas.onmousemove = e => this.drawFreeLine(e);
                this.drawFreeLine(e);
                break;
            case TOOL_ERASER:
                console.log("eraser!!");
                this.actionType = "eraser";
                this.canvas.onmousemove = e => this.erase(e);
                this.erase(e);
                break;
        }
    }

    drawOrErase = ({figure, actionType, color}) => {
        this.context.beginPath();
        if (actionType === "brush") {
            const oldColor = paint.color;
            this.color = color;
            this.drawByCord(figure);
            this.color = oldColor;
        } else this.eraseByCord(figure);
        this.context.beginPath();
    }

    drawFromStack = () =>{
        if (!this._figuresStack.length) return;
        this._figuresStack.forEach(figure => this.drawOrErase(figure));
    }

    onMouseUp() {
        socket.emit("add figure", {
            figure: this.cords,
            color: this.color,
            actionType:this.actionType,
            userId: window.localStorage.getItem("user_id")
        });
        this.drawFromStack();
        this.actionType = null;
        this.cords = [];
        this.isDrawing = false;
        this.context.beginPath();
        this.canvas.onmousemove = null;
    }

    _drawAction(e) {
        this.context.lineWidth = 5;
        this.context.lineCap = "round";
        this.context.strokeStyle = this.color;
        this.context.lineTo(e.clientX, e.clientY);
        this.context.stroke();
        this.context.beginPath();
        this.context.moveTo(e.clientX, e.clientY);
    }

    _eraseAction(e){
        this.context.lineWidth = 15;
        this.context.lineCap = "round";
        this.context.clearRect(e.clientX, e.clientY, 20, 20);
    }

    drawFreeLine({clientX, clientY}) {
        if (!this.isDrawing) return;
        console.log("DRAW!");
        this._drawAction({clientX, clientY});
        this.cords.push({clientX, clientY});
    }

    erase({clientX, clientY}) {
        if (!this.isDrawing) return;
        console.log("erase!");
        this._eraseAction({clientX, clientY});
        this.cords.push({clientX, clientY});
    }

    eraseAllAction = () => this.context.clearRect(0, 0, window.innerWidth, window.innerHeight);

    eraseAll = () => {
        this.eraseAllAction();
        socket.emit("erase all", window.localStorage.getItem("user_id"));
    }

    drawByCord = (cords) => {
        cords.forEach(cord => {
            this._drawAction(cord);
        });
    };
    eraseByCord = (cords) => {
        cords.forEach(cord => {
            this._eraseAction(cord);
        });
    };

}

export default new Paint();
