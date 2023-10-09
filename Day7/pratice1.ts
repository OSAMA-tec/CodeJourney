function birthday(s: number[], d: number, m: number): number {
    let count = 0;
    for(let i = 0; i <= s.length - m; i++){
        let sum = 0;
        for(let j = i; j < i + m; j++){
            sum += s[j];
        }
        if(sum == d){
            count++;
        }
    }
    return count;
}

console.log(birthday([1,2,3,1,1],3,2)); 
