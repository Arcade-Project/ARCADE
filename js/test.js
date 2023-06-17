const words = "SoS";

function isPalindrome(str) {
  const lowerCase = str.toLowerCase();
  const reverseStr = lowerCase.split("").reverse().join("");
  return lowerCase === reverseStr;
}

console.log(isPalindrome(words));
