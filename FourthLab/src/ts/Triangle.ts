import shape = require("./Shape");

export class Triangle extends shape.Shape {
    private x1: number;
    private x2: number;
    private x3: number;
    private y1: number;
    private y2: number;
    private y3: number;

    constructor() {
        super();
        this.x1 = 10;
        this.x2 = 80;
        this.x3 = 20;
        this.y1 = 10;
        this.y2 = 90;
        this.y3 = 80;
    }

    public calculatePerimeter() {
        let a = this.calculateSide(this.x1, this.x2, this.y1, this.y2);
        let b = this.calculateSide(this.x2, this.x3, this.y2, this.y3);
        let c = this.calculateSide(this.x1, this.x3, this.y1, this.y3);
        return parseFloat((a + b + c).toFixed(2));
    }
    public calculateArea() {
        let p = this.calculatePerimeter() / 2;
        let a = this.calculateSide(this.x1, this.x2, this.y1, this.y2);
        let b = this.calculateSide(this.x2, this.x3, this.y2, this.y3);
        let c = this.calculateSide(this.x1, this.x3, this.y1, this.y3);
        return parseFloat((Math.sqrt(p * (p - a) * (p - b) * (p - c))).toFixed(2));
    }
    public draw(ctx: CanvasRenderingContext2D) {
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
    }

    public setCoordinates(x1: number, x2: number, x3: number, y1: number, y2: number, y3: number) {
        this.x1 = x1;
        this.x2 = x2;
        this.x3 = x3;
        this.y1 = y1;
        this.y2 = y2;
        this.y3 = y3;
    }

    private calculateSide(x1: number, x2: number, y1: number, y2: number) {
        return (Math.sqrt(Math.pow((x1 - x2), 2) + Math.pow((y1 - y2), 2)));
    }
}
