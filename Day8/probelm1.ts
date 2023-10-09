function migratoryBirds(arr: number[]): number {
    let frequencyMap = {};
    for(let i=0; i<arr.length; i++){
        if(frequencyMap[arr[i]]){
            frequencyMap[arr[i]] += 1;
        } else {
            frequencyMap[arr[i]] = 1;
        }
    }

    let maxCount = 0;
    let result = 0;

    for(let birdType in frequencyMap){
        if(frequencyMap[birdType] > maxCount){
            maxCount = frequencyMap[birdType];
            result = parseInt(birdType);
        } else if(frequencyMap[birdType] === maxCount){
            let currentBirdType = parseInt(birdType);
            if(currentBirdType < result){
                result = currentBirdType;
            }
        }
    }

    return result;
}
