const str = "babbar";
const stack = [];

for (let i = 0; i < str.length; i++) {
    stack.push(str[i]);
}

while (stack.length > 0) {
    console.log(stack.pop());
}

console.log();
