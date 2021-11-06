export function maxNum() {
    const numA=17;
    const numB=35;
    let numC=0;

    if(numA>numB){
        numC=numA;
    }else if(numB>numA){
        numC=numB;
    }
    return console.log(numC);
}