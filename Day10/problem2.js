function sockMerchant(n, ar) {
    var sockCounts = {};
    var pairs = 0;
    for (var i = 0; i < n; i++) {
        if (sockCounts[ar[i]]) {
            sockCounts[ar[i]]++;
        }
        else {
            sockCounts[ar[i]] = 1;
        }
    }
    for (var sock in sockCounts) {
        pairs += Math.floor(sockCounts[sock] / 2);
    }
    return pairs;
}
console.log(sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20]));
