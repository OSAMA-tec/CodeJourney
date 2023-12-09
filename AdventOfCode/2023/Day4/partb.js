const fs = require('fs');

let data = fs.readFileSync('file.txt', 'utf-8');
let lines = data.split('\n');
let match = [];
let newMatch = [];
let finalList = [];

for (let line of lines) {
    let splitLine = line.split(":");
    let firstHalf = splitLine[1].split("|")[0].split(" ").filter(s => s.trim() !== "");
    let secondHalf = splitLine[1].split("|")[1].split(" ").filter(s => s.trim() !== "");

    let count = firstHalf.filter(value => secondHalf.includes(value)).length;
    match.push(count);
}

for (let i = 0; i < match.length; i++) {
    let value = match[i];
    finalList.push(i + 1);
    for (let j = i + 1; j < i + 1 + value; j++) {
        if (j < match.length) {
            newMatch.push(j + 1);
            finalList.push(j + 1);
        }
    }
}

while (newMatch.length > 0) {
    let tempMatch = [];
    for (let i = 0; i < newMatch.length; i++) {
        let value = newMatch[i];
        for (let j = i + 1; j < i + 1 + value; j++) {
            if (j < match.length) {
                tempMatch.push(j + 1);
                finalList.push(j + 1);
            }
        }
    }
    newMatch = tempMatch;
}

console.log(finalList);