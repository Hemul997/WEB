import triangle = require("./Triangle");
import rectangle = require("./Rectangle");
import circle = require("./Circle");

function getShape() {
    let shape = <HTMLInputElement> document.getElementById("shape");
    let currentShape;
    if (shape.value === "Triangle") {
        document.getElementById("triangleBlock").className = "open";
        document.getElementById("rectangleBlock").className = "hidden";
        document.getElementById("circleBlock").className = "hidden";

        currentShape = new triangle.Triangle();
        currentShape.setCoordinates(Number((<HTMLInputElement> document.getElementById("triangleX1")).value),
            Number((<HTMLInputElement> document.getElementById("triangleX2")).value),
            Number((<HTMLInputElement> document.getElementById("triangleX3")).value),
            Number((<HTMLInputElement> document.getElementById("triangleY1")).value),
            Number((<HTMLInputElement> document.getElementById("triangleY2")).value),
            Number((<HTMLInputElement> document.getElementById("triangleY3")).value));
    } else if (shape.value === "Rectangle") {
        document.getElementById("rectangleBlock").className = "open";
        document.getElementById("triangleBlock").className = "hidden";
        document.getElementById("circleBlock").className = "hidden";

        currentShape = new rectangle.Rectangle();
        currentShape.setCoordinates(Number((<HTMLInputElement> document.getElementById("rectangleX1")).value),
            Number((<HTMLInputElement> document.getElementById("rectangleX2")).value),
            Number((<HTMLInputElement> document.getElementById("rectangleY1")).value),
            Number((<HTMLInputElement> document.getElementById("rectangleY2")).value));
    } else if (shape.value === "Circle") {
        document.getElementById("circleBlock").className = "open";
        document.getElementById("rectangleBlock").className = "hidden";
        document.getElementById("triangleBlock").className = "hidden";

        currentShape = new circle.Circle();
        currentShape.setRadius(Number((<HTMLInputElement> document.getElementById("radius")).value));
        currentShape.setCoordinate(Number((<HTMLInputElement> document.getElementById("circleX")).value),
            Number((<HTMLInputElement> document.getElementById("circleY")).value));
    }
    return currentShape;
}

export function draw(): void {
    let canvas = <HTMLCanvasElement> document.getElementById("canvas");
    if (canvas.getContext) {
        let ctx = canvas.getContext("2d");
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        let shape = getShape();
        shape.setFillColor((<HTMLInputElement> document.getElementById("fill")).value);
        shape.setBorderColor((<HTMLInputElement> document.getElementById("border")).value);
        shape.draw(ctx);

        document.getElementById("area").innerHTML = "Area: " + shape.calculateArea();
        document.getElementById("perimeter").innerHTML = "Perimeter: " + shape.calculatePerimeter();
    }
}

let form = document.getElementById("form");
draw();
form.onchange = (): void => draw();
