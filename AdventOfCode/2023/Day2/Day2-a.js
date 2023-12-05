const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'file2.txt');
const fileStream = fs.createReadStream(filePath);

let redIndices = [];
let blueIndices = [];
let greenIndices = [];
let finalArr = []

fileStream.on('data', (data) => {
    let lines = data.toString().split('\n');
    lines.forEach((line, lineIndex) => {
        let words = line.split(' ');
        words.forEach((word, wordIndex) => {
            if (word.includes('red')) {
                redIndices.push({ game: lineIndex + 1, value: words[wordIndex - 1] });
            } else if (word.includes('blue')) {
                blueIndices.push({ game: lineIndex + 1, value: words[wordIndex - 1] });
            } else if (word.includes('green')) {
                greenIndices.push({ game: lineIndex + 1, value: words[wordIndex - 1] });
            }
        });
    });

    [redIndices, blueIndices, greenIndices].forEach((indices, index) => {
        let i = 0;
        let limit = index === 0 ? 12 : index === 1 ? 14 : 13;
        while (i < indices.length) {
            if (indices[i].value <= limit) {
                finalArr.push(indices[i].game);
                i++;
            } else {
                finalArr = finalArr.filter(index => index !== indices[i].game);
                redIndices = redIndices.filter(obj => obj.game !== indices[i]?.game);
                blueIndices = blueIndices.filter(obj => obj.game !== indices[i]?.game);
                greenIndices = greenIndices.filter(obj => obj.game !== indices[i]?.game);
                indices = indices.filter(obj => obj.game !== indices[i]?.game);
                if (indices[i]) {
                    i++;
                }
            }
        }
    });

    let sum = 0;
    let uniqueArray = [...new Set(finalArr)];
    uniqueArray.map(value => {
        sum += value;
    });
    console.log(sum);
});