// Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. Then print the respective minimum and maximum values as a single line of two space-separated long integers.


function miniMaxSum(arr: number[]): void {
    // Write your code here
    let newArr=arr.sort();
    let minimumSum:number=0;
    let maximumSum:number=0;
    for(let i:number=0;i<4;i++){
        minimumSum+=newArr[i];
    }
    for(let i:number=arr.length-1;i>0;i--){
        maximumSum+=newArr[i];
    }
    console.log(minimumSum,maximumSum)
}



miniMaxSum([1,2,3,4,5]);