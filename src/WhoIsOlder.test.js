import {whoIsOlder} from "./WhoIsOlder";

describe ("WhoIsOlder", ()=> {
    it ("should to be first person date 20.01.2020 older than second 20.01.2021",()=> {
 expect(whoIsOlder("20.01.2020", "20.01.2021")).toBe("First person is older");
    });
});