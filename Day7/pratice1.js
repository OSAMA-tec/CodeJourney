function birthday(s, d, m) {
    var count = 0;
    for (var i = 0; i <= s.length - m; i++) {
        var sum = 0;
        for (var j = i; j < i + m; j++) {
            sum += s[j];
        }
        if (sum == d) {
            count++;
        }
    }
    return count;
}
console.log(birthday([1, 2, 3, 1, 1], 3, 2)); // Expected output: 2
