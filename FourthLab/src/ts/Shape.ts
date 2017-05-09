import iShape = require("./IShape");

export abstract class Shape implements iShape.IShape {
    private fillColor: string;
    private borderColor: string;
    constructor() {
        this.borderColor = "#0982f6";
        this.fillColor = "#40f7f7";
    }
    public getFillColor() {
        return this.fillColor;
    }
    public getBorderColor() {
        return this.borderColor;
    }
    public setFillColor(value: string) {
        this.fillColor = value;
    }
    public setBorderColor(value: string) {
        this.borderColor = value;
    }
    public abstract draw(ctx: CanvasRenderingContext2D): void;
    public abstract calculatePerimeter(): number;
    public abstract calculateArea(): number;
}
