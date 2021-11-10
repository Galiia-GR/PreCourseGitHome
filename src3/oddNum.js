export function oddNum(){
	const N=+prompt('Enter a number N');
let count=0;
let sum=0;
let result=0;
for (let a=0; a<=N; a++) {
	if (a%2!==0)  {
		sum+=a;
		count+=1;
		result=sum/count;
	}
}
return console.log(result);
}
	