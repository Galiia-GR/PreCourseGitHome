/**
 * @jest-environment jsdom
 */
import {month} from "./month";
describe("month", () => {
    it("should to return name month April when you enter a month number 4", () => {
        jest.spyOn(window, "prompt").mockReturnValue("4");
        const consoleSpy = jest.spyOn(console, "log");
        month();
        expect(consoleSpy).toHaveBeenCalledWith("4-April");
    });
    it("should to return name month December when you enter a month number 12", () => {
        jest.spyOn(window, "prompt").mockReturnValue("12");
        const consoleSpy = jest.spyOn(console, "log");
        month();
        expect(consoleSpy).toHaveBeenCalledWith("12-December");
    });
});