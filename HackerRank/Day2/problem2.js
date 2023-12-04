// Given an array of integers, find the sum of its elements.
function simpleArraySum(ar) {
    var sum = 0;
    for (var i = 0; i < ar.length; i++) {
        sum += ar[i];
    }
    return sum;
}
console.log(simpleArraySum([1, 23, 45, 21, 25, 122]));
