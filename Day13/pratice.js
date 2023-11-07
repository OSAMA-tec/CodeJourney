function getMoneySpent(keyboards, drives, b) {
    let maxCost = -1;
    keyboards.forEach(keyboard => {
        drives.forEach(drive => {
            let totalCost = keyboard + drive;
            if(totalCost <= b){
                maxCost = Math.max(maxCost, totalCost);
            }
        });
    });
    return maxCost;
}



console.log(getMoneySpent([3,1],[5,2,8],10))