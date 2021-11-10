import { isWord } from "./isWord";

describe("isWord", () => {
  it("should to be true if str(string)", () => {
    expect(isWord("string")).toBeTruthy();
  });
  it("should to be false if str(My string omg)", () => {
    expect(isWord("My string omg")).toBeFalsy();
  });
});
