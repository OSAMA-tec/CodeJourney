// Given a set of distinct integers, print the size of a maximal subset of  where the sum of any 2  numbers in subset is not evenly divisible by k.
// Example:
// [2,3,4,5,6,7]
function nonDivisibleSubset(Arr, k) {
    var count = 0;
    var remainders = new Array(k).fill(0);
    for (var i = 0; i < Arr.length; i++) {
        var remainder = Arr[i] % k;
        remainders[remainder]++;
    }
    if (remainders[0] > 0) {
        count++;
    }
    for (var i = 1; i <= k / 2; i++) {
        if (i !== k - i) {
            count += Math.max(remainders[i], remainders[k - i]);
        }
        else if (remainders[i] > 0) {
            count++;
        }
    }
    return count;
}
console.log(nonDivisibleSubset([2, 3, 4, 5, 6, 7], 3));
console.log(nonDivisibleSubset([278, 576, 496, 727, 410, 124, 338, 149, 209, 702, 282, 718, 771, 575, 436], 7));
