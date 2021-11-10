import { arrays } from "./arrays";

describe("arrays", () => {
  beforeEach(() => {
    jest.spyOn(console, "log");
    arrays();
  });
  it("should to be sum el array a, return 212", () => {
    expect(console.log).toHaveBeenCalledWith(212);
  });
  it("should to be each element array a*2", () => {
    expect(console.log).toHaveBeenCalledWith([
      10, 12, 152, 116, 4, 6, 4, 2, 108, 10,
    ]);
  });
  it("should to be find max number and min number from array a, expect 76,1", () => {
    expect(console.log).toHaveBeenCalledWith(76, 1);
  });
});
