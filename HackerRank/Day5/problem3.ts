function gcd(a: number, b: number): number {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

function lcm(a: number, b: number): number {
    return (a * b) / gcd(a, b);
}

function getTotalX(a: number[], b: number[]): number {
    let count = 0;
    let lcmVal = a[0];
    let gcdVal = b[0];
    
    for (let i = 1; i < a.length; i++) {
        lcmVal = lcm(lcmVal, a[i]);
    }
    
    for (let i = 1; i < b.length; i++) {
        gcdVal = gcd(gcdVal, b[i]);
    }
    
    for (let i = lcmVal; i <= gcdVal; i += lcmVal) {
        if (gcdVal % i === 0) {
            count++;
        }
    }
    
    return count;
}

console.log(getTotalX([2, 4], [16, 32, 96])); // Outputs 3
