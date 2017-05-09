export interface IShape {
    getFillColor(): string;
    getBorderColor(): string;
    calculateArea(): number;
    calculatePerimeter(): number;
    setFillColor(value: string): void;
    setBorderColor(value: string): void;
    draw(ctx: CanvasRenderingContext2D): void;
}
