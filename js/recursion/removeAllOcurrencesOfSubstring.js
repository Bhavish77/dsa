function removeSubstring(myString, substringToRemove) {
  if (!myString.includes(substringToRemove)) {
    // base case: substring not found, return the original string
    return myString;
  }

  // recursive case: remove the substring and call the function again
  const index = myString.indexOf(substringToRemove);
  const newString = myString.slice(0, index) + myString.slice(index + substringToRemove.length);
  return removeSubstring(newString, substringToRemove);
}

// example usage
const myString = "Hello, world! This is a sample string.";
const substringToRemove = "sample ";

const newString = removeSubstring(myString, substringToRemove);
console.log(newString);
