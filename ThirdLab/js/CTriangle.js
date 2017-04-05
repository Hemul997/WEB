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