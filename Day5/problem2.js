function kangaroo(x1, v1, x2, v2) {
    if ((x1 < x2 && v1 <= v2) || (x2 < x1 && v2 <= v1))
        return 'NO';
    if (x1 === x2) {
        return 'YES';
    }
    else if ((x1 < x2 && v1 > v2) || (x2 < x1 && v2 > v1)) {
        return kangaroo(x1 + v1, v1, x2 + v2, v2);
    }
    else {
        return 'NO';
    }
}
console.log(kangaroo(0, 3, 4, 2)); // Outputs 'YES'
console.log(kangaroo(0, 2, 5, 3)); // Outputs 'NO'
//   pratice
//   0  3  4  2
//   x1 v1 x2 v2
// x1 =0meter         0    3    6    9     12
// v1 =3meter/sec     
// x2 =4meter         4    6    8    10    12
// v2 =2meter/sec
