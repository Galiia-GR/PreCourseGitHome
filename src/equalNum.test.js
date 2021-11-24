/**
 * @jest-environment jsdom
 */
import {equalNum} from "./equalNum";

describe ('equalNum', () => {
    it("should to be return x1=-5, x2=-3 from x2+8x+15=0", () => {
        jest.spyOn(window, "prompt").mockReturnValue("1, 8, 15")
        expect(equalNum()).toBe("Квадратное уравнение имеет два корня: x1=-5, x2=-3");
    });
    it("should to be return x=3 from x2-6x+9=0", () => {
        jest.spyOn(window, "prompt").mockReturnValue("1, -6, 9")
        expect(equalNum()).toBe("Квадратное уравнение имеет один корень: x=3");
    });
});