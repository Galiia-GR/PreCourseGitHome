export function dateDay() {
    const input = window.prompt("Enter date (dd.mm.yyyy)");
    const[day, month, year]=input.split(".");
    const inputDate=new Date(`${year}-${month}-${day}`);
    const num=inputDate.getDay();
    const dayInWeek=[
        "Sunday","Monday","Tuesday","Wednesday",
        "Thursday", "Friday", "Saturday"];
    return dayInWeek[num];
}

