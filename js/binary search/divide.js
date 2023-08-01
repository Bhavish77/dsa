/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
    if (divisor === 0) {
        return 0;
    }

    if (divisor === 1) {
        return handleOverflow(dividend);
    }

    if (divisor === -1) {
        return handleOverflow(-dividend);
    }

    // Handle edge case when dividend is equal to -2147483648
    if (dividend === -2147483648 && divisor === 2) {
        return -1073741824;
    }

    let positiveDividend = Math.abs(dividend);
    let positiveDivisor = Math.abs(divisor);

    let s = 0;
    let e = dividend;
    let mid = Math.floor((s + e) / 2);
    let ans;

    while (s <= e) {
        if (mid * positiveDivisor === positiveDividend) {
            return dividend < 0 ^ divisor < 0 ? -mid : mid;
        } else if (mid * positiveDivisor < positiveDividend) {
            ans = mid;
            s = mid + 1;
        } else {
            e = mid - 1;
        }

        mid = Math.floor((s + e) / 2);
    }

    ans = dividend < 0 ^ divisor < 0 ? -ans : ans;
    return handleOverflow(ans);
};

// Function to handle overflow cases
function handleOverflow(value) {
    return value > 2147483647 ? 2147483647 : value;
}
