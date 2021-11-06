import {maxNum} from "./maxNum";

describe("maxNum", () => {
    it("should to be Max number 35 from (17,35)", () => {
        const consoleSpy = jest.spyOn(console, "log");
        maxNum();
        expect(consoleSpy).toHaveBeenCalledWith(35);
    });
});