// Factorials of n>20  can't be stored even in a  long long variable. Big integers must be used for such calculations. Languages like Java, Python, Ruby etc. can handle big integers, but we need to write additional code in C/C++ to handle huge values.
// We recommend solving this challenge using BigIntegers.
function extraLongFactorials(n) {
    try {
        var result = BigInt(n);
        if (n == 0 || n == 1) {
            console.log(1);
            return;
        }
        for (var i = 2; i <= n; i++) {
            result *= BigInt(i);
        }
        console.log(result.toString());
    }
    catch (error) {
        console.log(error);
    }
}
extraLongFactorials(25);
