// Write a function isPalindrome(str) to check whether the string is a palindrome.

function isPalindrome(str) {
  for (let i = 0; i < str.length; i++) {
    if (str.charAt(i) !== str.charAt(str.length - i - 1)) return false;
  }
  return true;
}
console.log(isPalindrome("madam"));

//  Write a program that prints numbers 1 to 100 but replaces multiples of 3 with "Fizz",      multiples of 5 with "Buzz", and both with "FizzBuzz".

function fizzbuzz(num) {
  for (let i = 1; i <= num; i++) {
    if (i % 3 == 0 && i % 5 == 0) console.log("FizzBuzz");
    else if (i % 5 == 0) console.log("Buzz");
    else if (i % 3 == 0) console.log("Fizz");
    else console.log(i);
  }
}
fizzbuzz(100);
//  Write a function flattenArray(arr) that flattens a multi-dimensional array.
arr = [1, [1, 2, 3], [3, 4, 5], [7, 8, 3, 1]];
function flattenArray(arr) {
  res = [];
  for (rows of arr) {
    if (Array.isArray(rows))
      for (ele of rows) {
        res.push(ele);
      }
    else res.push(rows);
  }
  return res;
}
console.log(flattenArray(arr));

//  Write a function areAnagrams(str1, str2) to check if two strings are anagrams.
function areAnagrams(s1, s2) {
  if (s1.length != s2.length) return;
  var hashmap = new Map();
  for (s of s1) hashmap[s]++;
  for (i of s2) hashmap[i]--;
  for (let [key, value] of hashmap) {
    if (value != 0) return false;
  }
  return true;
}
console.log(areAnagrams("sol", "los"));

// Write a function sumArray(arr) that calculates the sum of all numbers in an array.

function sumArray(arr) {
  sum = 0;
  for (item of arr) sum += item;
  return sum;
}
console.log(sumArray([1, 2, 3, 4, 5, 6]));

// Write a function findMax(arr) that returns the maximum number in an array.

function findMax(arr) {
  max = Number.MIN_VALUE;
  for (item of arr) max = Math.max(max, item);
  return max;
}
console.log(findMax([1, 2, 6, 3, 9]));

// Write a function removeDuplicates(arr) that removes duplicates from an array.
function removeDuplicates(arr) {
  var st = new Set();
  for (item of arr) st.add(item);
  return st;
}
console.log(removeDuplicates([1, 1, 2, 3, 3, 4, 5, 5]));

//  Write a function reverseString(str) that reverses a given string.
function reverseString(str) {
  var res = "";
  for (let i = str.length - 1; i >= 0; i--) res += str[i];
  return res;
}
console.log(reverseString("hello"));

// Write a function factorial(n) that computes the factorial of a given number n.
function factorial(n) {
  var fact = 1;
  for (let i = 1; i <= n; i++) fact *= i;
  return fact;
}
console.log(factorial(5));

// Write a function capitalizeWords(str) that capitalizes the first letter of each word in a string.
function capitalizesWords(str) {
  var res = "";
  for (item of str.split(" "))
    res += item.charAt(0).toUpperCase() + item.slice(1) + " ";
  return res;
}
console.log(capitalizesWords("hello it is me"));
