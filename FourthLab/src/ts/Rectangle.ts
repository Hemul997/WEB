import shape = require("./Shape");

export class Rectangle extends shape.Shape {
    private x1: number;
    private x2: number;
    private y1: number;
    private y2: number;

    constructor() {
        super();
        this.x1 = 10;
        this.x2 = 80;
        this.y1 = 10;
        this.y2 = 40;
    }
    public calculatePerimeter() {
        return parseFloat(((this.getWidth() * 2) + (this.getHeight() * 2)).toFixed(2));
    }
    public calculateArea() {
        return parseFloat((this.getWidth() * this.getHeight()).toFixed(2));
    }
    public draw(ctx: CanvasRenderingContext2D) {
        ctx.fillStyle = this.getFillColor();
        ctx.fillRect(this.x1, this.y1, this.getWidth(), this.getHeight());
        ctx.lineWidth = 3;
        ctx.strokeStyle = this.getBorderColor();
        ctx.strokeRect(this.x1, this.y1, this.getWidth(), this.getHeight());
    }

    public setCoordinates(x1: number, x2: number, y1: number, y2: number) {
        this.x1 = x1;
        this.x2 = x2;
        this.y1 = y1;
        this.y2 = y2;
    }

    private getWidth(): number {
        return Math.abs(this.x1 - this.x2);
    };
    private getHeight(): number {
        return Math.abs(this.y1 - this.y2);
    };
}
