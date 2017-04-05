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

