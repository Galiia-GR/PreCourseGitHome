/**
 * @jest-environment jsdom
 */

import {todayMinute} from "./todayMinute";

describe ("todayMinute", ()=> {
    it ("returns how many minutes passed",()=> {
        jest.useFakeTimers();
        jest.setSystemTime(new Date("Mon Nov 22 2021 13:49:19").getTime());
       jest.spyOn(console, "log");
        todayMinute();
        expect(console.log).toHaveBeenCalledWith(829);
    });
});
