function pageCount(n, p) {
    var sk = Math.floor(p / 2);
    var lk = Math.floor((n / 2) - (p / 2));
    return Math.min(sk, lk);
}
console.log(pageCount(6, 5));
// practice
// n=6   p=4
//  01   23  45  6
//   1   2   3   
//               1
//6-4=2 
