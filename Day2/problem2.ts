// Given an array of integers, find the sum of its elements.

function simpleArraySum(ar: number[]): number {
    let sum=0;
    for(let i:number=0;i<ar.length;i++){
        sum+= ar[i];
    }
    return sum;
}

console.log(simpleArraySum([1,23,45,21,25,122]))

