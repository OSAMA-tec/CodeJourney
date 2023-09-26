// Given a set of distinct integers, print the size of a maximal subset of  where the sum of any 2  numbers in subset is not evenly divisible by k.

// Example:
// [2,3,4,5,6,7]

function nonDivisibleSubset(Arr: number[], k: number): any {
    try {
      let newArr: number[] = [];
      if (Arr) {
        for (let i: number = 0; i < Arr.length; i++) {
          let flag: boolean = true;
          for (let j: number = 0; j < newArr.length; j++) {
            if ((Arr[i] + newArr[j]) % k === 0) {
              flag = false;
              break;
            }
          }
          if (flag) {
            newArr.push(Arr[i]);
          }
        }
      }
      return newArr.length;
    } catch (error) {
      console.log(error);
      return 0;
    }
  }
console.log(nonDivisibleSubset([2, 3, 4, 5, 6, 7], 3));
console.log(nonDivisibleSubset([278,576,496,727,410,124,338,149,209,702,282,718,771,575,436], 7));
