function countingValleys(steps, path) {
    var seaLevel = 0;
    var valleys = 0;
    for (var i = 0; i < steps; i++) {
        if (path[i] === 'U') {
            seaLevel++;
            console.log(path[i], seaLevel);
            if (seaLevel === 0) {
                console.log(path[i], seaLevel);
                valleys++;
            }
        }
        else {
            seaLevel--;
            console.log(path[i], seaLevel);
        }
    }
    return valleys;
}
// 
// UUUDDDUDUU
console.log(countingValleys(8, "UDDDUDUU"));
