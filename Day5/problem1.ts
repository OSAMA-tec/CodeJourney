function countApplesAndOranges(s: number, t: number, a: number, b: number, apples: number[], oranges: number[]): void {
    const newApples = apples.map(value => value + a).filter(value => value >= s && value <= t).length;
    const newOranges = oranges.map(value => value + b).filter(value=>value>=s&&value<=t).length;

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

