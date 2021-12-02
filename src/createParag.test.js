import { createParag } from "./createParag";

describe("createParag", () => {
  let element;

  beforeEach(() => {
    element = document.createElement("div");
    document.body.innerHTML = "";
    document.body.append(element);
    createParag(element);
  });

  it("should to be a function", () => {
    expect(createParag).toBeInstanceOf(Function);
  });

  it("test markup", () => {
    expect(element.querySelector(".text")).toBeTruthy();
    expect(element.querySelector(".button")).toBeTruthy();
    expect(element.querySelector(".block")).toBeTruthy();
  });

  it("should add next paragraph", () => {
    element.querySelector(".text").value = "Новый параграф";
    expect(element.querySelector(".text").value).toBe("Новый параграф");
  });

  it("should clear input and hide button after click", () => {
    const input = element.querySelector(".text");
    input.value = "Параграф";
    input.dispatchEvent(new Event("input"));
    expect(element.querySelector(".button").hidden).toBe(false);

    element.querySelector(".button").dispatchEvent(new Event("click"));
    expect(input.value).toBe("");
    expect(element.querySelector(".button").hidden).toBe(true);
  });

  it("should to be lenght paragraphs 5", () => {
    const input = element.querySelector(".text");
    input.value = "Пятый параграф";
    input.dispatchEvent(new Event("input"));
    element.querySelector(".button").dispatchEvent(new Event("click"));

    input.value = "Шестой параграф";
    input.dispatchEvent(new Event("input"));
    element.querySelector(".button").dispatchEvent(new Event("click"));

    input.value = "Седьмой параграф";
    input.dispatchEvent(new Event("input"));
    element.querySelector(".button").dispatchEvent(new Event("click"));

    expect(element.querySelectorAll("p").length).toBe(5);
  });
});
