// Given a time in -hour AM/PM format, convert it to military (24-hour) time.
// Note: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
function timeConversion(s) {
    var hour = parseInt(s.substring(0, 2));
    var minute = s.substring(3, 5);
    var seconds = s.substring(6, 8);
    var period = s.substring(8, 10);
    var Hour = hour;
    if (period === "PM" && hour !== 12) {
        Hour += 12;
    }
    else if (period === "AM" && hour === 12) {
        Hour = 0;
    }
    var Time = "".concat(Hour.toString().padStart(2, "0"), ":").concat(minute, ":").concat(seconds);
    return Time;
}
//example
//    1 2 : 0 0 : 0 0  A M
//    0 1 2 3 4 5 6 7  8 9
console.log(timeConversion("12:05:45AM"));
