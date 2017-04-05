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
