  export function inputRegexp() {
        const enter = window.prompt("Enter e-mail or date today or your phone number format (8 999 999 99 99)");
        const regexpEmail = /[a-zA-Z_.0-9]+@[a-z0-9]+\.[a-z]{2,5}/;//eslint-disable-line
        const regexpDate =/\d{1,2}[.\/]\d{1,2}[.\/]\d{2,4}/;//eslint-disable-line
        const regexpPhone =/[+78][-\/.\s][0-9]{3,11}[-\/.\s][0-9]{3}[-\/.\s][0-9]{2,4}[-\/.\s][0-9]{2,4}/;//eslint-disable-line
if (regexpEmail.test(enter)) {
    return `Your e-mail: ${enter}`;
}
if (regexpDate.test(enter)){
    return `Today: ${enter}`;
}
if (regexpPhone.test(enter)){
    return `Your phone number: ${enter}`;
}
return "error"
    }