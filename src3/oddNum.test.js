/**
 * @jest-environment jsdom
 */
import {oddNum} from "./oddNum";

describe("oddNum", () => {
        it("should be prompt 9 and return the arithmetic mean of odd numbers 5", () => {
            jest.spyOn(window, "prompt").mockReturnValue("9");
            const consoleSpy= jest.spyOn(console, "log");
            oddNum();
            expect(consoleSpy).toHaveBeenCalledWith(5);
        });
    });