/**
 * @jest-environment jsdom
 */
import { objectUser } from "./objectUser";

describe("objectUser", () => {
    it("should be object admin (John 30 admin)", () => {
        jest.spyOn(window, "prompt").mockReturnValue("30");
        expect(objectUser()).toBe('John 30 admin');
    });
});