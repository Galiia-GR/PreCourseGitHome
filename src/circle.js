export function circle(){
    const inputR=prompt("Введите радиус окружности R:");
    const circleLenght=Math.floor(2*Math.PI*inputR);
    const circleS=Math.floor(inputR * inputR *Math.PI);
    return `Длина окружности: ${circleLenght} Площадь окружности: ${circleS}`
}