import { str } from "./str";

describe("str", () => {
  it("should to be lenght 17 symbols (yastroka + iyastroka)", () => {
    const consoleSpy = jest.spyOn(console, "log");
    str();
    expect(consoleSpy).toHaveBeenCalledWith(17);
  });
});
