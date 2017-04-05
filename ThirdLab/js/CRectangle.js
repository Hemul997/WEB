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
