
function integerToWord(num) {
  if (num == 0) {
    return "zero";
  }

  let myMap = new Map([
    [1000000000, "billion"],
    [1000000, "million"],
    [1000, "thousand"],
    [100, "hundred"],
    [90, "ninety"],
    [80, "eighty"],
    [70, "seventy"],
    [60, "sixty"],
    [50, "fifty"],
    [40, "forty"],
    [30, "thirty"],
    [20, "twenty"],
    [19, "nineteen"],
    [18, "eighteen"],
    [17, "seventeen"],
    [16, "sixteen"],
    [15, "fifteen"],
    [14, "fourteen"],
    [13, "thirteen"],
    [12, "twelve"],
    [11, "eleven"],
    [10, "ten"],
    [9, "nine"],
    [8, "eight"],
    [7, "seven"],
    [6, "six"],
    [5, "five"],
    [4, "four"],
    [3, "three"],
    [2, "two"],
    [1, "one"],
  ]);

  let result = "";

  for (let [key, value] of myMap) {
    if (num >= key) {
      let a = "";
      if (num >= 100) {
        a = integerToWord(Math.floor(num / key)) + " ";
      }
      let b = value + " ";

      let c = "";
      if (num % key !== 0) {
        c = integerToWord(num % key);
      }

      result += a + b + c;
      break;
    }
  }

  return result.trim();
}

const num = 12345;

console.log(integerToWord(num));
