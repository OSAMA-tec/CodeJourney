function pageCount(n: number, p: number): number {
    let sk = Math.floor(p / 2); 2
    let lk;

    if (n % 2 === 0 && p % 2 !== 0) {
        lk = Math.floor((n - p + 1) / 2);
    } else {
        lk = Math.floor((n - p) / 2);
    }

    return Math.min(sk, lk);
}

console.log(pageCount(6,5))
// practice


// n=6   p=4

//  01   23  45  6
//   1   2   3   
//               1
//6-4=2 

