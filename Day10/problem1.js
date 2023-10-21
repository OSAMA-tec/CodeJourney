function bonAppetit(bill, k, b) {
    var sum = 0;
    bill.forEach(function (num) { num !== bill[k] ? sum += num : sum = sum; });
    b > sum ? console.log("".concat(b - (sum / 2))) : console.log("Bon Appetit");
}
//practice
bonAppetit([3, 10, 2, 9], 1, 12);
// 1+3+4=8
