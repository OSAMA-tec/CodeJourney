const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'file1.txt');
const fileStream = fs.createReadStream(filePath);



let numbers = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
fileStream.on('data', (data) => {
    let finalArr = []
    let sum = 0
    let arr = []
    data.toString().split('\n').forEach((line) => {
        arr = []
        let matchesString
        let matchesNumber
        let matchesStringIndex
        let matchesNumberIndex
        let Nums
        numbers.forEach((value, index) => {
            matchesString = line.match(value);
            matchesNumber = line.match(/\d+/g);
            if (matchesNumber) {
                Nums = matchesNumber.map(match => match.split('')).flat();
                if (matchesString) {
                    console.log(matchesString)
                    for (let i = 0; i < Nums.length; i++) {
                        matchesNumberIndex = line.search(Nums[i]);
                        if (matchesNumberIndex < matchesString.index) {
                            finalArr.push(Nums[i])
                            break;
                        } else {
                            arr.push(index)
                        }
                    }
                }
                else {
                    Nums = matchesNumber.map(match => match.split('')).flat();
                    finalArr.push(Number(Nums[0] + Nums[Nums.length - 1]))
                }
            } else if (matchesString) {

                arr.push(index)
            }

            Nums = []
        })

    });
    console.log(finalArr)
    const Lastarr = finalArr.filter(x => !isNaN(x));
    Lastarr.map((value) => {
        sum += value
    })
    // console.log(Lastarr)
    console.log(sum)
});






//              AFAQ KHAN LOGIC


// const fs = require('fs');
// const path = require('path');

// const filePath = path.join(__dirname, 'file1-a.txt');
// const fileStream = fs.createReadStream(filePath);

// // Create a dictionary to map spelled-out numbers to their numeric values
// const digits = {
//     'one': 1,
//     'two': 2,
//     'three': 3,
//     'four': 4,
//     'five': 5,
//     'six': 6,
//     'seven': 7,
//     'eight': 8,
//     'nine': 9
// };

// fileStream.on('data', (data) => {
//     let calibratedDocument = [];
//     let sum = 0;
//     data.toString().split('\n').forEach((line) => {
//         let indexesDict = {};
//         for (let digit in digits) {
//             let firstIndex = line.indexOf(digit);
//             let lastIndex = line.lastIndexOf(digit);
//             if (firstIndex >= 0) {
//                 if (!(digits[digit] in indexesDict)) {
//                     indexesDict[digits[digit]] = [];
//                 }
//                 indexesDict[digits[digit]].push(firstIndex);
//                 if (firstIndex !== lastIndex) {
//                     indexesDict[digits[digit]].push(lastIndex);
//                 }
//             }
//         }
//         for (let [index, char] of Array.from(line).entries()) {
//             if (!isNaN(char)) {
//                 if (!(parseInt(char) in indexesDict)) {
//                     indexesDict[parseInt(char)] = [];
//                 }
//                 indexesDict[parseInt(char)].push(index);
//             }
//         }
//         let indexesList = [].concat(...Object.values(indexesDict));
//         if (indexesList.length > 0) {
//             let minIndex = Math.min(...indexesList);
//             let maxIndex = Math.max(...indexesList);
//             let minDigit = Object.keys(indexesDict).find(key => indexesDict[key].includes(minIndex));
//             let maxDigit = Object.keys(indexesDict).find(key => indexesDict[key].includes(maxIndex));
//             let calibrationValue = minDigit;
//             if (maxDigit !== null) {
//                 calibrationValue = parseInt('' + minDigit + maxDigit);
//             } else {
//                 calibrationValue = parseInt('' + minDigit + minDigit);
//             }
//             calibratedDocument.push(calibrationValue);
//         }
//     });
//     sum = calibratedDocument.reduce((a, b) => a + b, 0);
//     console.log(`Sum of all calibration values: ${sum}`);
// });