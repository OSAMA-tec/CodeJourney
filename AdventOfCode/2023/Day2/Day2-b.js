const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'file2.txt');
const fileStream = fs.createReadStream(filePath);

let redIndices = [];
let blueIndices = [];
let greenIndices = [];
let finalArr = [];

fileStream.on('data', (data) => {
    let lines = data.toString().split('\n');
    lines.forEach((line, lineIndex) => {
        let words = line.split(' ');
        words.forEach((word, wordIndex) => {
            if (word.includes('red')) {
                redIndices.push({ game: lineIndex + 1, value: parseInt(words[wordIndex - 1]) });
            } else if (word.includes('blue')) {
                blueIndices.push({ game: lineIndex + 1, value: parseInt(words[wordIndex - 1]) });
            } else if (word.includes('green')) {
                greenIndices.push({ game: lineIndex + 1, value: parseInt(words[wordIndex - 1]) });
            }
        });
    });

    let gameMaxValues = {};

    [redIndices, blueIndices, greenIndices].forEach((indices) => {
        indices.forEach((index) => {
            if (!gameMaxValues[index.game]) {
                gameMaxValues[index.game] = { red: 0, blue: 0, green: 0 };
            }
            if (index.value > gameMaxValues[index.game][index.value > gameMaxValues[index.game].red ? 'red' : index.value > gameMaxValues[index.game].blue ? 'blue' : 'green']) {
                gameMaxValues[index.game][index.value > gameMaxValues[index.game].red ? 'red' : index.value > gameMaxValues[index.game].blue ? 'blue' : 'green'] = index.value;
            }
        });
    });

    let powerSum = 0;

    for (const game in gameMaxValues) {
        powerSum += gameMaxValues[game].red * gameMaxValues[game].blue * gameMaxValues[game].green;
    }

    console.log(powerSum);
});