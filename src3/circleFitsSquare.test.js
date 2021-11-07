import {circleFitsSquare} from "./circleFitsSquare";

describe("circleFitsSquare", () => {
    it("should circle S=16 to fits into a square S=23", () => {
        const consoleSpy = jest.spyOn(console, "log");
        circleFitsSquare();
        expect(consoleSpy).toHaveBeenCalledWith("our circle fits into a square");
    });
});