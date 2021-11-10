import { difference } from "./difference";

describe("difference", () => {
  it("should to be 7 difference from 1,8", () => {
    expect(difference(1, 8)).toBe(7);
  });
  it("should to be 2 difference from 4,2", () => {
    expect(difference(4, 2)).toBe(2);
  });
});
