import {TOOL_BRUSH, TOOL_ERASER} from "./tools.js";

let isDrawing = false;

export default class Paint {
    constructor() {
        this.aside = document.querySelector("aside");
        this.canvas = document.querySelector("#canvasDraw");
        this.context = this.canvas.getContext("2d");
        this.canvas.height = window.innerHeight;
        this.canvas.width = window.innerWidth;
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
        this.aside.ondblclick = e => this.eraseAll();
    }

    onMouseDown(e) {

        isDrawing = true;
        switch (this.tool) {
            case TOOL_BRUSH:
                console.log("brush!!");
                this.canvas.onmousemove = e => this.drawFreeLine(e);
                this.drawFreeLine(e);
                break;
            case TOOL_ERASER:
                console.log("eraser!!");

                this.canvas.onmousemove = e => this.erase(e);
                this.erase(e);
                break;
        }
    }

    onMouseUp() {
        isDrawing = false;
        this.context.beginPath();
        this.canvas.onmousemove = null;
    }

    drawFreeLine(e) {
        if (!isDrawing) return;
        console.log("DRAW!");
        this.context.lineWidth = 5;
        this.context.lineCap = "round";
        this.context.strokeStyle = this.color;

        this.context.lineTo(e.clientX, e.clientY);
        this.context.stroke();
        this.context.beginPath();
        this.context.moveTo(e.clientX, e.clientY);
    }

    erase(e) {
        if (!isDrawing) return;
        console.log("erase!");
        this.context.lineWidth = 15;
        this.context.lineCap = "round";

        this.context.clearRect(e.clientX, e.clientY, 20, 20);

    }

    eraseAll() {
        this.context.clearRect(0, 0, window.innerWidth, window.innerHeight);
    }

}