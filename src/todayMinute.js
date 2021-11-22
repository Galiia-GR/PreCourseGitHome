export function todayMinute() {
    const now=new Date();
    const result=now.getMinutes()+(now.getHours()*60);
    console.log(result);
}