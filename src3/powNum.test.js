import { powNum } from "./powNum";

describe("powNum", () => {
  it("should to be 32 from 2 pow 5", () => {
    expect(powNum(2, 5)).toBe(32);
  });
});
