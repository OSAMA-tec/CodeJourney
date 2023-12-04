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
    let i = 0;
    while (i < redIndices.length) {
        if (redIndices[i].value <= 12) {
            // console.log('index red true ',redIndices[i].game)
            // console.log('index red true ',redIndices[i].value)

            finalArr.push(redIndices[i].game);
            i++;
        } else {
            // console.log('index red else',redIndices[i].game)
            // console.log('index red else',redIndices[i].value)
            finalArr = finalArr.filter(index => index !== redIndices[i].game);
            redIndices = redIndices.filter(obj => obj.game !== redIndices[i]?.game);
            blueIndices = blueIndices.filter(obj => obj.game !== blueIndices[i]?.game);
            greenIndices = greenIndices.filter(obj => obj.game !== greenIndices[i]?.game);
            // console.log(redIndices)
            // console.log(blueIndices)
            // console.log(greenIndices)
        }
    }
    i = 0;
    while (i < blueIndices.length) {
        if (blueIndices[i].value <= 14) {
            // console.log('index blue true',blueIndices[i].game)
            // console.log('index blue true',blueIndices[i].value)
            finalArr.push(blueIndices[i].game);
            i++;
        } else {
            // console.log('index blue else',blueIndices[i].game)
            finalArr = finalArr.filter(index => index !== blueIndices[i].game);
            redIndices = redIndices.filter(obj => obj.game !== redIndices[i]?.game);
            blueIndices = blueIndices.filter(obj => obj.game !== blueIndices[i]?.game);
            greenIndices = greenIndices.filter(obj => obj.game !== greenIndices[i]?.game);
        }
    }
    i = 0;
    while (i < greenIndices.length) {
        if (greenIndices[i].value <= 13) {
            // console.log('index green true',greenIndices[i].game)
            // console.log('index green true',greenIndices[i].value)
            finalArr.push(greenIndices[i].game);
            i++;
        }
        else {
            // console.log('index green else',greenIndices[i].game)
            // console.log('index green else',greenIndices[i].value)
            finalArr = finalArr.filter(index => index !== greenIndices[i].game);
            redIndices = redIndices.filter(obj => obj.game !== redIndices[i]?.game);
            blueIndices = blueIndices.filter(obj => obj.game !== blueIndices[i]?.game);
            greenIndices = greenIndices.filter(obj => obj.game !== greenIndices[i]?.game);
        }
    }
    let sum=0
    let uniqueArray = [...new Set(finalArr)];
    
         uniqueArray.map(value=>{
            sum+=value
        })
    console.log(sum)
});
