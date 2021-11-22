/**
 * @jest-environment jsdom
 */
import {dateDay} from "./dateDay";

describe ("dateDay", ()=> {
    it ("should to be Saturday from 01.01.2022",()=> {
        jest.spyOn(window, "prompt").mockReturnValue("01.01.2022");
        expect(dateDay()).toBe("Saturday");
    });
});

