import {triangle} from "./triangle";

describe ('triangle', () => {
    it("should to be 'треуольник прямоугольный' if sides (8,6,10)", () => {
        expect(triangle(8, 6, 10)).toBe('этот треугольник прямоугольный');
    });
    it("should to be 'треуольник непрямоугольный' if sides (2,5,10)", () => {
        expect(triangle(2, 5, 10)).toBe('этот треугольник непрямоугольный');
    });
});