export function multiSeven(){
    const numA=7;
    let numB;
    let numC;
    for (numB=1; numB<=9; numB++) {
        numC = numB * numA;
        console.log(`${numA}*${numB}=${numC}`);
    }
}