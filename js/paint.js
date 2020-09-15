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
    }


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

    onMouseUp() {
        socket.emit("add figure", {
            figure: this.cords,
            color: this.color,
            actionType:this.actionType,
            userId: window.localStorage.getItem("user_id")});
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

    eraseAll = () => {
        this.context.clearRect(0, 0, window.innerWidth, window.innerHeight);
    }

    drawByCord = (cords) => cords.forEach(cord => {
        console.log(cord);
        this._drawAction(cord)
    });
    eraseByCord = (cords) => cords.forEach(cord => this._eraseAction(cord));

}

export default new Paint();
