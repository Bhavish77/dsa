function solve(ans, index, output, digits, mapping) {
    // base case
    if (index >= digits.length) {
        ans.push(output);
        return;
    }

    // 1 case solve, baaki recursion
    const digitCharacter = digits.charAt(index);
    const digitInteger = parseInt(digitCharacter);

    const value = mapping[digitInteger];

    for (let i = 0; i < value.length; i++) {
        const ch = value.charAt(i);

        // include
        // output.push_back(ch);
        // recursive call
        solve(ans, index + 1, output + ch, digits, mapping);
        // backtrack
        // output.pop_back();
    }
}

function letterCombinations(digits) {
    const ans = [];

    // empty string k liye answer empty array hoga
    if (digits.length === 0) {
        return ans;
    }

    let index = 0;
    let output = "";
    const mapping = ['', '', 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz'];

    solve(ans, index, output, digits, mapping);

    return ans;
}
