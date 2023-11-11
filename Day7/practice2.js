function divisibleSumPairs(n, k, ar) {
    var count = 0;
    for (var i = 0; i < ar.length; i++) {
        for (var k_1 = i + 1; k_1 < ar.length; k_1++) {
            if (i < k_1) {
                if ((ar[i] + ar[k_1]) % k_1 == 0)
                    count++;
            }
        }
    }
    return count;
}
console.log(divisibleSumPairs(6, 3, [1, 2, 1, 2, 1]));
