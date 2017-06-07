module.exports = function reverseArr() { /* YOUR CODE HERE */ 


const arr = [1,2,3];

function reverseArr(arr){
	var tempArr = [];
	for (var i=arr.length-1; i>=0; i--){
		tempArr.push(arr[i]);
	}

	arr = tempArr;

	return arr;
}

console.log (reverseArr(arr));

}