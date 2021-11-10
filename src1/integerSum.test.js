import {integerSum} from "./integerSum";

describe("integerSum", () => {
    it("should to 3825 sum of integers from 50 to 100", () => {
        const consoleSpy = jest.spyOn(console, "log");
        integerSum();
        expect(consoleSpy).toHaveBeenCalledWith(3825);
    });
});