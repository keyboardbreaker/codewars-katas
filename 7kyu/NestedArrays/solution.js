/*
I used this documentation to come up with a strategy to flatten my nested arrays
https://dev.to/sanchithasr/understanding-nested-arrays-2hf7

kata: https://www.codewars.com/kata/57882daf90b2f375280000ad/solutions/javascript

*/

function SumSquares(list){
	let flatList = list.toString().split(',')
	
	return flatList
		.reduce((acc, cur) => {
			acc += Math.pow(cur, 2);
			return acc;
		}, 0);
}