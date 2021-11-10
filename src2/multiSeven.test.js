import {multiSeven} from "./multiSeven";

describe("multiSeven", () => {
    it("should to multiplication 7 from 1 to 9", () => {
        const consoleSpy = jest.spyOn(console, "log");
        multiSeven();
        expect(consoleSpy).toHaveBeenCalledWith("7*1=7");
        expect(consoleSpy).toHaveBeenCalledWith("7*2=14");
        expect(consoleSpy).toHaveBeenCalledWith("7*3=21");
        expect(consoleSpy).toHaveBeenCalledWith("7*4=28");
        expect(consoleSpy).toHaveBeenCalledWith("7*5=35");
        expect(consoleSpy).toHaveBeenCalledWith("7*6=42");
        expect(consoleSpy).toHaveBeenCalledWith("7*7=49");
        expect(consoleSpy).toHaveBeenCalledWith("7*8=56");
        expect(consoleSpy).toHaveBeenCalledWith("7*9=63");
        });
});