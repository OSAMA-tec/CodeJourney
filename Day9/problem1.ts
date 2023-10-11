function dayOfProgrammer(year: number): string {
    if (year < 1918) {
        return year % 4 === 0 ? `12.09.${year}` : `13.09.${year}`;
    } else if (year > 1918) {
        return (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) ? `12.09.${year}` : `13.09.${year}`;
    } else {
        return `26.09.${year}`;
    }
}


console.log(dayOfProgrammer(2017))