


function countingValleys(steps: number, path: string): number {
    let seaLevel=0;
    let valleys=0;
    for(let i =0;i<steps;i++){
        if(path[i]==='U'){
            seaLevel++;
            console.log(path[i],seaLevel)
            if(seaLevel===0){
                console.log(path[i],seaLevel)
                valleys++;
            }
        }
        else{
            seaLevel--;
            console.log(path[i],seaLevel)
        }
    }
    return valleys;
}

// 
// UUUDDDUDUU


console.log(countingValleys(8,"UDDDUDUU"))