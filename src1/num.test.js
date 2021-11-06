import { num } from "./num";

describe("num", () => {
  it("should to be 35 from (5*7)", () => {
    const consoleSpy = jest.spyOn(console, "log");
    num();
    expect(consoleSpy).toHaveBeenCalledWith(35);
  });
});
