const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'file1.txt');
const fileStream = fs.createReadStream(filePath);

fileStream.on('data', (data) => {
    let finalArr=[]
    let sum=0
    data.toString().split('\n').forEach((line) => {
        let matches = line.match(/\d+/g);
        if (matches) {
            let Nums = matches.map(match => match.split('')).flat();
            finalArr.push(Number(Nums[0]+Nums[Nums.length-1]))
        }
    });
     finalArr.map((value)=>{
        sum+=value
    })
    console.log(sum)
});
