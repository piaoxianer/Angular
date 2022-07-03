"use strict";

// 1. Write a JavaScript function that reverse a number.
// Example x = 32243;
// Expected Output: 34223
const numReverse = (num) => Number(num.toString().split("").reverse().join(""));
console.log("1.", numReverse(32243));

// 2. Write a JavaScript function that checks whether a passed string is palindrome or not?
// A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g., madam or nurses run.
const checkPalindrome = function (str) {
  const reversedStr = str.split("").reverse().join("");
  return reversedStr === str;
};
console.log("2.", checkPalindrome("aba"));

// 3. Write a JavaScript function that generates all combinations of a string.
// Example string: 'dog'
// Expected Output: d, do, dog, o, og, g
const strCombinations = (strComb) => {
  let combinations = [];
  for (let i = 0; i < strComb.length; i++) {
    for (let j = i + 1; j < strComb.length + 1; j++) {
      combinations.push(strComb.slice(i, j));
    }
  }
  return combinations;
};
console.log("3.", strCombinations("dog"));

//4. Write a JavaScript function that returns a passed string with letters in alphabetical order.
// Example string: 'webmaster'
// Expected Output: 'abeemrstw'
// Assume punctuation and numbers symbols are not included in the passed string.
const alphaOrder = (strAlph) => {
  const orderedStr = strAlph.split("").sort().join("");
  return orderedStr;
};
console.log("4.", alphaOrder("webmaster"));

// 5. Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case.
// Example string: 'the quick brown fox'
// Expected Output: 'The Quick Brown Fox '
function upperFirstChar(strLower) {
  const arrLower = strLower.split(" ");
  let arrUpper = [];
  for (let i = 0; i < arrLower.length; i++) {
    let strToUpper = arrLower[i].charAt(0).toUpperCase() + arrLower[i].slice(1);
    arrUpper.push(strToUpper);
  }
  const upperedStr = arrUpper.join(" ");
  return upperedStr;
}
console.log("5.", upperFirstChar("the quick brown fox"));

// 6. Write a JavaScript function that accepts a string as a parameter and find the longest word within the string.
// Example string: 'Web Development Tutorial'
// Expected Output: 'Development'
function longestWord(strLong) {
  var splitedArr = strLong.split(" ").reduce((longest, currentWord) => {
    return currentWord.length > longest.length ? currentWord : longest;
  }, "");
  return splitedArr;
}
console.log("6.", longestWord("Web Development Tutorial"));

// 7. Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string.
// Note: As the letter 'y' can be regarded as both a vowel and a consonant, we do not count 'y' as vowel here.
// Example string: 'The quick brown fox'
// Expected Output: 5
// match(regexp)
const countVowels = (strVowel) => {
  return (strVowel.match(/[aeiou]/gi) || []).length;
};
console.log("7.", countVowels("The quick brown fox"));

// 8. Write a JavaScript function that accepts a number as a parameter and check the number is prime or not.
// Note: A prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself.
const isPrime = (numPrime) => {
  for (let i = 2, s = Math.sqrt(numPrime); i <= s; i++) {
    if (numPrime % i === 0) return false;
  }
  return numPrime > 1;
};
console.log("8.", isPrime(3));

//9. Write a JavaScript function which accepts an argument and returns the type.
// Note: There are six possible values that typeof returns: object, boolean, function, number, string, and undefined.
const checkType = (argu) => {
  return typeof argu;
};
console.log("9.", checkType(undefined));

//10. Write a JavaScript function which returns the n rows by n columns identity matrix.
function identityMatrix(numOfM) {
  var i, j;
  if (numOfM === 1) {
    return console.log("1");
  } else {
    for (i = 0; i < numOfM; i++) {
      for (j = 0; j < numOfM; j++) {
        if (i === j) {
          console.log("1");
        } else {
          console.log("0");
        }
      }
      console.log("----------");
    }
  }
}
console.log("10.identity matrix:");
identityMatrix(4);

//11. Write a JavaScript function which will take an array of numbers stored and find the second lowest and second greatest numbers, respectively.
// Sample array: [1,2,3,4,5]
// Expected Output: 2,4
function secondLowGreat(arrLG) {
  arrLG.sort((x, y) => x - y);
  const result = [];
  result.push(arrLG[1], arrLG[arrLG.length - 2]);
  return result;
}
console.log("11.", secondLowGreat([1, 2, 3, 4, 5]));

//12. Write a JavaScript function which says whether a number is perfect.
// According to Wikipedia: In number theory, a perfect number is a positive integer that is equal to the sum of its proper positive divisors, that is, the sum of its positive divisors excluding the number itself (also known as its aliquot sum). Equivalently, a perfect number is a number that is half the sum of all of its positive divisors (including itself).
// Example: The first perfect number is 6, because 1, 2, and 3 are its proper positive divisors, and 1 + 2 + 3 = 6. Equivalently, the number 6 is equal to half the sum of all its positive divisors: ( 1 + 2 + 3 + 6 ) / 2 = 6. The next perfect number is 28 = 1 + 2 + 4 + 7 + 14. This is followed by the perfect numbers 496 and 8128.
function isPerfectNumber(numPer) {
  var sum = 0;

  for (var i = 1; i < numPer; i++) {
    if (numPer % i == 0) {
      sum += i;
    }
  }
  if (sum == numPer) {
    return true;
  }
  return false;
}
console.log(
  "12. 496 is ",
  isPerfectNumber(496) ? "a perfect number!" : "not a perfect number."
);
console.log(
  "12. 8128 is ",
  isPerfectNumber(8128) ? "a perfect number!" : "not a perfect number."
);

//13. Write a JavaScript function to compute the factors of a positive integer.
function factors(n) {
  if (!n) {
    return "0";
  }
  var perfectNum = [],
    i;
  for (i = 1; i <= Math.floor(Math.sqrt(n)); i++) {
    if (n % i === 0) {
      perfectNum.push(i);
      //avoid square root
      if (n / i !== i) {
        perfectNum.push(n / i);
      }
    }
  }
  perfectNum.sort((a, b) => a - b);
  return perfectNum;
}
console.log("13.", factors(18));

//14. Write a JavaScript function to convert an amount to coins.
// Sample function: amountTocoins(46, [25, 10, 5, 2, 1])
// Here 46 is the amount. and 25, 10, 5, 2, 1 are coins.
// Output: 25, 10, 10, 1
function amountTocoins(amount, conins) {
  if (amount === 0) {
    return [];
  } else {
    if (amount >= conins[0]) {
      let left = amount - conins[0];
      return [conins[0]].concat(amountTocoins(left, conins));
    } else {
      conins.shift();
      return amountTocoins(amount, conins);
    }
  }
}
console.log("14.", amountTocoins(46, [25, 10, 5, 2, 1]));

// 15. Write a JavaScript function to compute the value of bn where n is the exponent and b is the bases. Accept b and n from the user and display the result.
const calcExponent = (b, n) => {
  // const result = b ** n;
  const result = Math.pow(b, n);
  return result;
};
console.log("15.", calcExponent(7, 3));

//16. Write a JavaScript function to extract unique characters from a string.
// Example string: "thequickbrownfoxjumpsoverthelazydog"
// Expected Output: "thequickbrownfxjmpsvlazydg"
function extractUnique(str) {
  //spread operator extract each character and return a array
  return [...str].reduce((acc, curr) => {
    // if accumulater include current char, it only return acc
    return acc.includes(curr) ? acc : acc + curr;
    //initial value is empty
  }, "");
}
console.log("16.", extractUnique("thequickbrownfoxjumpsoverthelazydog"));

//17. Write a JavaScript function to get the number of occurrences of each letter in specified string.
function letterOccur(str) {
  let sordedStr = str.split("").sort().join("");
  let counter = 1;
  for (let i = 0; i < sordedStr.length; i++) {
    if (sordedStr[i] === sordedStr[i + 1]) {
      counter++;
    } else {
      console.log(`${sordedStr[i]} occured ${counter} times.`);
      counter = 1;
    }
  }
}
console.log("17.", letterOccur("helloword"));

//18. Write a function for searching JavaScript arrays with a binary search.
// Note: A binary search searches by splitting an array into smaller and smaller chunks until it finds the desired value.
// 1.declare the start and end index
// 2.while start <= end means the arr has at last 1 element
// 3.find the middle number, check if mid > x, left first part of the array; if mid < x then left the second part.
function binarySearch(arr, x) {
  let start = 0,
    end = arr.length - 1;
  while (start <= end) {
    let mid = Math.floor(start + end / 2);
    if (arr[mid] === x) {
      return `${x} is at the position ${mid + 1}.`;
    } else if (arr[mid] > x) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return false;
}
console.log("18.", binarySearch([1, 3, 5, 7, 8, 9], 9));

// 19. Write a JavaScript function that returns array elements larger than a number.
const findLargerEle = (arr, num) => arr.filter((arr) => arr > num);
console.log("19.", findLargerEle([1, 3, 5, 7, 8, 9], 7));

//20. Write a JavaScript function that generates a string id (specified length) of random characters.
// Sample character list: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
function randomId(len) {
  let text = "";
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (let i = 0; i < len; i++) {
    text += characters[Math.floor(Math.random() * characters.length)];
  }
  return text;
}
console.log("20.", randomId(10));

//21. Write a JavaScript function to get all possible subset with a fixed length (for example 2) combinations in an array.
// Sample array: [1, 2, 3] and subset length is 2
// Expected output: [[2, 1], [3, 1], [3, 2]]
function subset(n, arr) {
  let combinations = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + n - 1; j < arr.length; j++) {
      combinations.push([arr[j], arr[i]]);
    }
  }
  return combinations;
}
console.log("21.", subset(2, [1, 2, 3]));

// 22. Write a JavaScript function that accepts two arguments, a string and a letter and the function will count the number of occurrences of the specified letter within the string.
// Sample arguments: 'microsoft.com', 'o'
// Expected output: 3
function specialLetterOccur(str, char) {
  let counter = 0;
  for (let i = 0; i < str.length; i++) {
    if (str.charAt(i) === char) {
      counter += 1;
    }
  }
  return counter;
}
console.log("22.", specialLetterOccur("microsoft.com", "o"));

// 23. Write a JavaScript function to find the first not repeated character.
// Sample arguments: 'abacddbec'
// Expected output: 'e'
function notRepeatedChar(str) {
  var arra1 = str.split("");
  var result = "";
  var ctr = 0;

  for (var i = 0; i < arra1.length; i++) {
    ctr = 0;

    for (var y = 0; y < arra1.length; y++) {
      if (arra1[i] === arra1[y]) {
        ctr += 1;
      }
    }

    if (ctr < 2) {
      result = arra1[i];
      break;
    }
  }
  return result;
}
console.log("23.", notRepeatedChar("abacddbec"));

// 24. Write a JavaScript function to apply Bubble Sort algorithm.
// Note: According to wikipedia "Bubble sort, sometimes referred to as sinking sort, is a simple sorting algorithm that works by repeatedly stepping through the list to be sorted, comparing each pair of adjacent items and swapping them if they are in the wrong order".
// Sample array: [12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213]
// Expected output: [3223, 546, 455, 345, 234, 213, 122, 98, 84, 64, 23, 12, 9, 4, 1]
function bubbleSort(arr) {
  var i, j;
  var len = arr.length;
  var isSwapped = false;

  for (i = 0; i < len; i++) {
    isSwapped = false;

    for (j = 0; j < len; j++) {
      if (arr[j] < arr[j + 1]) {
        var temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        isSwapped = true;
      }
    }
    // IF no two elements were swapped by inner loop, then break
    if (!isSwapped) {
      break;
    }
  }
  return arr;
}

const arr = [12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213];
console.log("24.", bubbleSort(arr));

// 25. Write a JavaScript function that accept a list of country names as input and returns the longest country name as output.
// Sample function: Longest_Country_Name(["Australia", "Germany", "United States of America"])
// Expected output: "United States of America"
const longestCountryN = (lst) => {
  return lst.reduce((longestN, curr) => {
    return longestN > curr ? longestN : curr;
  }, "");
};
console.log(
  "25.",
  longestCountryN(["Australia", "Germany", "United States of America"])
);

// 26. Write a JavaScript function to find longest substring in a given a string without repeating characters.
function longestSub(str) {
  const longestSet = new Set();
  let right = -1,
    strLen = 0;
  for (let i = 0; i < str.length; ++i) {
    if (i != 0) {
      longestSet.delete(str[i - 1]);
    }
    while (right + 1 < str.length && !longestSet.has(str[right + 1])) {
      longestSet.add(str[right + 1]);
      ++right;
    }
    strLen = Math.max(strLen, right - i + 1);
  }
  return strLen;
}
console.log(
  "26.longest substr without repeating characters:",
  longestSub("abcadfa")
);

// 27. Write a JavaScript function that returns the longest palindrome in a given string.
// Note: According to Wikipedia "In computer science, the longest palindromic substring or longest symmetric factor problem is the problem of finding a maximum-length contiguous substring of a given string that is also a palindrome. For example, the longest palindromic substring of "bananas" is "anana". The longest palindromic substring is not guaranteed to be unique; for example, in the string "abracadabra", there is no palindromic substring with length greater than three, but there are two palindromic substrings with length three, namely, "aca" and "ada".
// In some applications it may be necessary to return all maximal palindromic substrings (that is, all substrings that are themselves palindromes and cannot be extended to larger palindromic substrings) rather than returning only one substring or returning the maximum length of a palindromic substring.
function longestPalindrome(str) {
  if (str.length <= 1) {
    return str;
  }
  let result = "";
  for (let i = 0; i < str.length; i++) {
    centerExpand(i, i);
    centerExpand(i, i + 1);
  }
  function centerExpand(left, right) {
    while (left >= 0 && right < str.length && str[left] == str[right]) {
      left--;
      right++;
    }
    if (right - left - 1 > result.length) {
      result = str.slice(left + 1, right);
    }
  }
  return result;
}
console.log("27.", longestPalindrome("bananas"));

// 28. Write a JavaScript program to pass a 'JavaScript function' as parameter
function alarm(name) {
  return `Good morning! ${name}^_^`;
}
function inputName(name, fn) {
  return fn(name);
}
console.log("28.", inputName("Christin", alarm));

//29. Write a JavaScript function to get the function name.
function Foo() {}
let foo = new Foo();

if (foo.constructor.name === "Foo") {
  console.log("29. 'foo' is an instance of 'Foo'");
} else {
  console.log("29. Oops!");
}

console.log("29. Function name: ", Foo.name);

//myReduce
Array.prototype.myReduce = function (callbackFn, initialValue) {
  let acc, curr, temp;
  if (initialValue == undefined) {
    acc = this[0];
    for (let i = 1; i < this.length; i++) {
      curr = this[i];
      temp = callbackFn(acc, curr);
      acc = temp;
    }
  } else {
    acc = initialValue;
    for (let i = 0; i < this.length; i++) {
      curr = this[i];
      temp = callbackFn(acc, curr);
      acc = temp;
    }
  }
  return acc;
};
givenArr = [1, 2, 3];
let result = givenArr.myReduce((acc, curr) => {
  return acc + curr;
}, 0);
console.log("myReduce:", result);
