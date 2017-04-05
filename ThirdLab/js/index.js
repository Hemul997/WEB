function getShape()
{
    var shape = document.getElementById("shape");
    var currentShape;
    if (shape.value === "Triangle")
    {
        document.getElementById("triangleBlock").className = "open";
        document.getElementById("rectangleBlock").className = "hidden";
        document.getElementById("circleBlock").className = "hidden";

        currentShape = new Triangle();
        currentShape.setCoordinates(Number(document.getElementById("triangleX1").value),
           Number(document.getElementById("triangleX2").value), Number(document.getElementById("triangleX3").value),
           Number(document.getElementById("triangleY1").value), Number(document.getElementById("triangleY2").value),
           Number(document.getElementById("triangleY3").value));
    }
    else if (shape.value === "Rectangle")
    {
        document.getElementById("rectangleBlock").className = "open";
        document.getElementById("triangleBlock").className = "hidden";
        document.getElementById("circleBlock").className = "hidden";

        currentShape = new Rectangle();
        currentShape.setCoordinates(Number(document.getElementById("rectangleX1").value),
           Number(document.getElementById("rectangleX2").value), Number(document.getElementById("rectangleY1").value),
           Number(document.getElementById("rectangleY2").value));
    }
    else if (shape.value === "Circle")
    {
        document.getElementById("circleBlock").className = "open";
        document.getElementById("rectangleBlock").className = "hidden";
        document.getElementById("triangleBlock").className = "hidden";

        currentShape = new Circle();
        currentShape.setRadius(Number(document.getElementById("radius").value));
        currentShape.setCoordinate(Number(document.getElementById("circleX").value), Number(document.getElementById("circleY").value));
    }
    return currentShape;
}



function draw()
{
    var canvas = document.getElementById("canvas");
    if (canvas.getContext)
    {
        var ctx = canvas.getContext("2d");
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        var shape = getShape();
        shape.setBorderColor(document.getElementById("border").value);
        shape.draw(ctx);

        document.getElementById("area").innerHTML = "Area: " + shape.calculateArea();
        document.getElementById("perimeter").innerHTML = "Perimeter: " + shape.calculatePerimeter();
    }
}

var form = document.getElementById("form");
draw();
form.onchange = function ()
{
    draw();
};