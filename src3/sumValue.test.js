/**
 * @jest-environment jsdom
 */
import { sumValue } from "./sumValue";

describe("sumValue", () => {
  it("should be prompt 333 return 9", () => {
    jest.spyOn(window, "prompt").mockReturnValue("333");
    const consoleSpy = jest.spyOn(console, "log");
    sumValue();
    expect(consoleSpy).toHaveBeenCalledWith(9);
  });
  it("should be prompt 555 return 15", () => {
    jest.spyOn(window, "prompt").mockReturnValue("555");
    const consoleSpy = jest.spyOn(console, "log");
    sumValue();
    expect(consoleSpy).toHaveBeenCalledWith(15);
  });
});
