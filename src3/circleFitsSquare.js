export function circleFitsSquare() {
	const Scircle=16; // объявим площади круга и квадрата
	const Ssquare=23;
	const Rcircle=Math.sqrt(Scircle/3.14); // найдем радиус круга
	const Side=(Math.sqrt(Ssquare))/2; // найдем половину стороны квадрата
	if(Side>=Rcircle) {
		return console.log("our circle fits into a square"); // воспользуемся условным оператором, если половина
		// стороны больше или равна радиусу, то выводим сообщение об возможности поместить круг в квадрат
	} if(Side<Rcircle) {
		return console.log("our circle doesn`t fit into a square"); // если  половина стороны меньше радиуса,
		// то выводим сообщение об невозможности поместить круг в квадрат
	}
	return "error"
}