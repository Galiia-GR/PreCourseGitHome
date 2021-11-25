/**
 * @jest-environment jsdom
 */
import {inputRegexp} from "./inputRegexp";

describe("inputRegexp", () => {
    it("should to be 'Your e-mail: email@mail.ru", () => {
        jest.spyOn(window, "prompt").mockReturnValue("email@mail.ru");
        expect(inputRegexp()).toBe("Your e-mail: email@mail.ru");
    });
    it("should to be 'Today: 25/11/2021'", () => {
        jest.spyOn(window, "prompt").mockReturnValue("25/11/2021");
        expect(inputRegexp()).toBe("Today: 25/11/2021");
    });
    it("should to be 'Your phone number: 8-223-322-33-22'", () => {
        jest.spyOn(window, "prompt").mockReturnValue("8-223-322-33-22");
        expect(inputRegexp()).toBe("Your phone number: 8-223-322-33-22");
    });
});