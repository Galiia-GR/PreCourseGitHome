export function equalNum() {
        const input=window.prompt("Введите коэффициенты квадротного уравнения a, b, c")
        const arr=input.split(',');
        let x1=0;
        let x2=0;
        const aNum=arr[0];
        const bNum=arr[1];
        const cNum=arr[2];
        const D=bNum*bNum - 4*aNum*cNum;
        if (D<0) {
        return "Действительных корней нет";
        }
        if (D===0) {
            x1=-(bNum)/(2*aNum);
            return `Квадратное уравнение имеет один корень: x=${x1}`
        }
        if (D>0) {
            x1=((-bNum) - (Math.sqrt(D)))/(2*aNum);
            x2=((-bNum) + (Math.sqrt(D)))/(2*aNum);
            return `Квадратное уравнение имеет два корня: x1=${x1}, x2=${x2}`
        }
        return 'error';
    }