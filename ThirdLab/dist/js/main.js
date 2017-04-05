
function Circle()
{
    Shape.apply(this, arguments);
    this.radius = 30;
    this.x = 50;
    this.y = 50;
}

Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;

Circle.prototype.setCoordinate = function(x, y)
{
    this.x = x;
    this.y = y;
};


Circle.prototype.setRadius = function(radius)
{
    this.radius = radius;
};


Circle.prototype.draw = function(ctx)
{
    ctx.fillStyle = this.getFillColor();
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true); 
    ctx.fill();
    ctx.lineWidth = 3;
    ctx.strokeStyle = this.getBorderColor();
    ctx.stroke();
};

Circle.prototype.calculateArea = function()
{
    return (Math.PI * Math.pow(this.radius, 2)).toFixed(2);
};

Circle.prototype.calculatePerimeter = function()
{
    return (2 * Math.PI * this.radius).toFixed(2);
};


function Rectangle()
{
    Shape.apply(this, arguments);
    this.x1 = 10;
    this.x2 = 80;
    this.y1 = 10;
    this.y2 = 40;
    this.width = Math.abs(this.x1 - this.x2);
    this.height = Math.abs(this.y1 - this.y2);
}

Rectangle.prototype = Object.create(Shape.prototype);
Rectangle.prototype.constructor = Rectangle;

Rectangle.prototype.setCoordinates = function(x1, x2, y1, y2)
{
    this.x1 = x1;
    this.x2 = x2;
    this.y1 = y1;
    this.y2 = y2;
    this.width = Math.abs(this.x1 - this.x2);
    this.height = Math.abs(this.y1 - this.y2);
};

Rectangle.prototype.draw = function(ctx)
{
    ctx.fillStyle = this.getFillColor();
    ctx.fillRect(this.x1, this.y1, this.width, this.height);
    ctx.lineWidth = 3;
    ctx.strokeStyle = this.getBorderColor();
    ctx.strokeRect(this.x1, this.y1, this.width, this.height);
};

Rectangle.prototype.calculateArea = function()
{
    return (this.width * this.height).toFixed(2);
};

Rectangle.prototype.calculatePerimeter = function()
{
    return ((this.width * 2) + (this.height * 2)).toFixed(2);
};

function Shape()
{
    this.fillColor = "#EF5C13";
    this.borderColor = "#0982f6";
}

Shape.prototype.setFillColor = function (value)
{
    this.fillColor = value;
};

Shape.prototype.setBorderColor = function (value)
{
    this.borderColor = value;
};

Shape.prototype.getFillColor = function ()
{
    return this.fillColor;
};

Shape.prototype.getBorderColor = function ()
{
    return this.borderColor;
};

Shape.prototype.draw = function()
{
};

Shape.prototype.calculateArea = function()
{
};

Shape.prototype.calculatePerimeter = function()
{
};

function Triangle()
{
    Shape.apply(this, arguments);
    this.x1 = 10;
    this.x2 = 80;
    this.x3 = 20;
    this.y1 = 10;
    this.y2 = 90;
    this.y3 = 80;
    
    this._calculateSide = function (x1, x2, y1, y2)
    {
        return (Math.sqrt(Math.pow((x1 - x2), 2) + Math.pow((y1 - y2), 2)));
    };
}

Triangle.prototype = Object.create(Shape.prototype);
Triangle.prototype.constructor = Triangle;

Triangle.prototype.setCoordinates = function(x1, x2, x3, y1, y2, y3)
{
    this.x1 = x1;
    this.x2 = x2;
    this.x3 = x3;
    this.y1 = y1;
    this.y2 = y2;
    this.y3 = y3;
};

Triangle.prototype.draw = function (ctx)
{
    ctx.beginPath();
    ctx.lineWidth = 5;
    ctx.strokeStyle = this.getBorderColor();
    ctx.fillStyle = this.getFillColor();
    ctx.moveTo(this.x1, this.y1);
    ctx.lineTo(this.x2, this.y2);
    ctx.lineTo(this.x3, this.y3);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
};

Triangle.prototype.calculateArea = function ()
{
    var p = this.calculatePerimeter() / 2;
    var a = this._calculateSide(this.x1, this.x2, this.y1, this.y2);
    var b = this._calculateSide(this.x2, this.x3, this.y2, this.y3);
    var c = this._calculateSide(this.x1, this.x3, this.y1, this.y3);
    return (Math.sqrt(p * (p - a) * (p - b) * (p - c))).toFixed(2);
};

Triangle.prototype.calculatePerimeter = function ()
{
    var a = this._calculateSide(this.x1, this.x2, this.y1, this.y2);
    var b = this._calculateSide(this.x2, this.x3, this.y2, this.y3);
    var c = this._calculateSide(this.x1, this.x3, this.y1, this.y3);
    return (a + b + c).toFixed(2);
};
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