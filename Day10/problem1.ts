function bonAppetit(bill: number[], k: number, b: number): void {
    let sum:number=0;
    bill.forEach((num, index) => {
        if(index !== k) {
            sum += num;
        }
    });
    let actual = sum / 2;
    b > actual ? console.log(`${b - actual}`) : console.log(`Bon Appetit`);
}



//practice
bonAppetit([3,10,2,9],1 ,12)

// 1+3+4=8