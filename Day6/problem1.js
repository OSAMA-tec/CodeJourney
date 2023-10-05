function breakingRecords(scores) {
    var minScore = scores[0];
    var maxScore = scores[0];
    var minCount = 0;
    var maxCount = 0;
    for (var i = 1; i < scores.length; i++) {
        if (scores[i] < minScore) {
            minScore = scores[i];
            minCount++;
        }
        else if (scores[i] > maxScore) {
            maxScore = scores[i];
            maxCount++;
        }
    }
    return [maxCount, minCount];
}
console.log(breakingRecords([10, 5, 20, 20, 4, 5, 2, 25, 1]));
