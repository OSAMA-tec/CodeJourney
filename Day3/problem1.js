// Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero. Print the decimal value of each fraction on a new line with  places after the decimal.
function plusMinus(arr) {
    var positiveCount = 0;
    var negativeCount = 0;
    var zeroCount = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            positiveCount++;
        }
        else if (arr[i] < 0) {
            negativeCount++;
        }
        else {
            zeroCount++;
        }
    }
    var length = arr.length;
    console.log((positiveCount / length).toFixed(6));
    console.log((negativeCount / length).toFixed(6));
    console.log((zeroCount / length).toFixed(6));
}
var array = [1, 1, 1, 2, 2, 3, 3, 4, 2, 1];
plusMinus(array);
