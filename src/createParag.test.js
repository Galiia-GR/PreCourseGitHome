/**
 * @jest-environment jsdom
 */
import {createParag} from "./createParag";

describe ("createParag", () => {
    let element;
    beforeEach(() => {
        element = document.createElement("div");
        document.body.append(element);
        createParag(element);
    });
        it ("should to be a function", () => {
            expect(createParag).toBeInstanceOf(Function);
        });
            it ("test markup", () => {
                expect(element.querySelector(".text")).toBeTruthy();
                expect(element.querySelector(".button")).toBeTruthy();
                expect(element.querySelector(".block")).toBeTruthy();
            });
            it ("should add next paragraph", () => {
            element.querySelector(".text").value="Пятый параграф";
            expect(element.querySelector(".text").value).toBe("Пятый параграф");
            });
           it ("should clear input and hide button after click",() => {
               element.querySelector(".button").click();
               expect(element.querySelector(".text").value).toBe("");
               expect(element.querySelector(".button").hidden).toBe(true);
           });
           it ("should to be lenght paragraphs 5", () => {
               const nextEl = document.createElement("p");
               const block=element.querySelector(".block");
               nextEl.innerHTML="Пятый параграф"
               block.append(nextEl)
               expect(element.querySelectorAll("p").length).toBe(5);
           });
        });