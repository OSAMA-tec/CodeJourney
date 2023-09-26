// Given a square matrix, calculate the absolute difference between the sums of its diagonals.
function diagonalDifference(arr) {
    var sumLeft = 0;
    var sumRight = 0;
    for (var i = 0; i < arr.length; i++) {
        sumLeft += arr[i][i];
        sumRight += arr[i][arr.length - 1 - i];
    }
    return Math.abs(sumLeft - sumRight);
}
var arr = [
    [1, 2, 3],
    [4, 5, 6],
    [9, 8, 9],
];
console.log(diagonalDifference(arr));
//practice
//  i  
//    0 //  1   2   3 
//    1 //  4   5   6
//    2 //  7   8   9
