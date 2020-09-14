import {TOOL_BRUSH, TOOL_ERASER} from "./tools.js";
import Paint from "./paint.js";

let paint = new Paint();
paint.activeTool = TOOL_BRUSH;
paint.init();

document.addEventListener("DOMContentLoaded", () => {
    paint.color = document.querySelector("[data-color].active").getAttribute("data-color");
})


document.querySelectorAll("[data-tool]").forEach(
    item => {
        item.addEventListener("click", e => {
            //console.log(document.querySelector("[data-tool].active"));
            document.querySelector("[data-tool].active").classList.toggle("active");
            item.classList.toggle("active");
            paint.activeTool = item.getAttribute("data-tool");
        });
    }
);

document.querySelectorAll("[data-color]").forEach(
    item => {
        item.addEventListener("click", e => {
            document.querySelector("[data-color].active").classList.toggle("active");
            item.classList.toggle("active");
            paint.color = item.getAttribute("data-color");
        });
    }
);

