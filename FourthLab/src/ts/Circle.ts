import shape = require("./Shape");

export class Circle extends shape.Shape {
    private radius: number;
    private x: number;
    private y: number;

    constructor() {
        super();
        this.radius = 30;
        this.x = 50;
        this.y = 50;
    }
    public calculatePerimeter() {
        return parseFloat((Math.PI * 2 * this.radius).toFixed(2));
    }
    public calculateArea() {
        return parseFloat((Math.PI * Math.pow(this.radius, 2)).toFixed(2));
    }
    public draw(ctx: CanvasRenderingContext2D) {
        ctx.fillStyle = this.getFillColor();
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
        ctx.fill();
        ctx.lineWidth = 3;
        ctx.strokeStyle = this.getBorderColor();
        ctx.stroke();
    }

    public setRadius(radius: number) {
        this.radius = radius;
    }

    public setCoordinate(x: number, y: number) {
        this.x = x;
        this.y = y;
    }
}
