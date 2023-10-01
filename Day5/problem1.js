function countApplesAndOranges(s, t, a, b, apples, oranges) {
    var newApples = apples.map(function (value) { return value + a; }).filter(function (value) { return value >= s && value <= t; }).length;
    var newOranges = oranges.map(function (value) { return value + b; }).filter(function (value) { return value >= s && value <= t; }).length;
    console.log(newApples);
    console.log(newOranges);
}
countApplesAndOranges(7, 11, 5, 15, [-2, 2, 1], [5, -6]);
//practice
// 7 11
// 5 15
// 3 2
// -2 2 1
// 5 -6
