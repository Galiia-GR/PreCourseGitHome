/**
 * @jest-environment jsdom
 */
import {circle} from "./circle";

describe ('circle', () => {
    it("should to be circle lenght -25, circle S -50", () => {
        jest.spyOn(window, "prompt").mockReturnValue("4")
        expect(circle()).toBe('Длина окружности: 25 Площадь окружности: 50');
    });
});