function dayOfProgrammer(year) {
    if (year < 1918) {
        return year % 4 === 0 ? "12.09.".concat(year) : "13.09.".concat(year);
    }
    else if (year > 1918) {
        return (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) ? "12.09.".concat(year) : "13.09.".concat(year);
    }
    else {
        return "26.09.".concat(year);
    }
}
console.log(dayOfProgrammer(2017));
