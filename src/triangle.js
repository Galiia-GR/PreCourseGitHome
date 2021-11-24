export function triangle(a,b,c) {
    const arr = [a,b,c];
    const arrTriangle=arr.sort((x,y) => x-y).map((element)=>element*=element);
    return arrTriangle[2] === arrTriangle[1]+arrTriangle[0] ? "этот треугольник прямоугольный": "этот треугольник непрямоугольный";
}