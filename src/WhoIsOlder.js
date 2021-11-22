export function whoIsOlder(personFirst,personSecond) {
    const[dayFirst, monthFirst, yearFirst]=personFirst.split(".");
    const[daySecond, monthSecond, yearSecond]=personSecond.split(".");
    const personFirstDate=new Date(`${yearFirst}-${monthFirst}-${dayFirst}`);
    const personSecondDate=new Date(`${yearSecond}-${monthSecond}-${daySecond}`);
    if (personFirstDate>personSecondDate) {
        return "Second person is older"
    }
    return "First person is older"
}