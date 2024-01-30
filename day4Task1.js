// // Do the below programs in anonymous function & IIFE
// ////======anonymous==================================================================
console.log("=====Program a=========================================");

//1. Print odd numbers in an array
const oddCheck = function (arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 != 0) {
      result.push(arr[i]);
    }
  }
  return result;
};
let arr = [1, 4, 5, 6, 4, 3, 7, 9];
console.log("Print odd numbers in an array using Anonymous function");
console.log(`Odd numbers in ${arr} are: ${oddCheck(arr)}`);

// ////--------IIFE---------------------------------------------------------------------------
console.log("Print odd numbers in an array using IIFE function");

((arr) => {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 != 0) {
      result.push(arr[i]);
    }
  }
  console.log(`Odd numbers in ${arr} are: ${result}`);
})(arr);

//

// ////=========anonymous===============================================================================
console.log("=====Program b=========================================");

// //2. Convert all the strings to title caps in a string array
console.log(
  "Convert all the strings to title caps in a string array using Anonymous function"
);
const titleCaps = function (arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(
      arr[i].charAt(0).toUpperCase() + arr[i].substr(1).toLowerCase()
    );
  }
  return result;
};
let uin = "Convert all the strings to title caps in a string array";
let strArray = uin.split(" ");
console.log(`Result : ${titleCaps(strArray)}`);
// ////--------IIFE---------------------------------------------------------------------------
console.log(
  "Convert all the strings to title caps in a string array using IIFE function"
);
((arr) => {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(
      arr[i].charAt(0).toUpperCase() + arr[i].substr(1).toLowerCase()
    );
  }
  console.log(`Result : ${result}`);
})(strArray);
// ////=========anonymous===============================================================================
console.log("====Program c==========================================");

// //3. Sum of all numbers in an array
console.log(" Sum of all numbers in an array using Anonymous function");
const sumOfNumbers = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
};
let numArray = [4, 7, 3, 9, 5, 7];
console.log(`Sum  of ${numArray}:  ${sumOfNumbers(numArray)}`);

// ////---------IIFE--------------------------------------------------------------------------
console.log("Sum of all numbers in an array using IIFE function");

((arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  console.log(`Sum  of ${numArray}:  ${sum}`);
})(numArray);
//
// ////==========anonymous==============================================================================
console.log("===Program d===========================================");

// //4. Return all the prime numbers in an array
console.log(
  "Return all the prime numbers in an array using Anonymous function"
);
const primeCheck = function (num) {
  let flag = true;
  for (let i = 2; i <= num - 1; i++) {
    if (num % i == 0) {
      flag = false;
      break;
    }
  }
  return flag;
};
const primeNumbers = function (arr) {
  let primes = [];
  for (let i = 0; i < arr.length; i++) {
    if (primeCheck(arr[i])) primes.push(arr[i]);
  }
  return primes;
};
let numArr = [4, 7, 3, 9, 5, 7];
console.log(`Prime Numbers in ${numArr} are: ${primeNumbers(numArr)}`);
// ////--------IIFE---------------------------------------------------------------------------
console.log("Return all the prime numbers in an array using IIFE function");

((arr) => {
  let primes = [];
  for (let i = 0; i < arr.length; i++) {
    if (primeCheck(arr[i])) primes.push(arr[i]);
  }
  console.log(`Prime Numbers in ${arr} are: ${primes}`);
})(numArr);

// ////==========anonymous==============================================================================
console.log("=====Program e=========================================");

// //5. Return all the palindromes in an array
const palindromeCheck = function (num) {
  let flag = false;
  let numcopy = num;
  let rev = 0;
  while (numcopy > 0) {
    rev = rev * 10 + (numcopy % 10);
    numcopy = parseInt(numcopy / 10);
  }
  if (num === rev) {
    flag = true;
  }
  return flag;
};
const palindromes = function (arr) {
  let palindromes = [];
  for (let i = 0; i < arr.length; i++) {
    if (palindromeCheck(arr[i])) palindromes.push(arr[i]);
  }
  return palindromes;
};
let numArr1 = [234, 424, 656, 789, 989, 232];
console.log("Return all the palindromes in an array using Anonymous function");
console.log(`Palindrome numbers in ${numArr1} are: ${palindromes(numArr1)}`);

////----------IIFE-------------------------------------------------------------------------
console.log("Return all the palindromes in an array using IIFE function");

((arr) => {
  let palindromes = [];
  for (let i = 0; i < arr.length; i++) {
    if (palindromeCheck(arr[i])) palindromes.push(arr[i]);
  }
  console.log(`Palindrome numbers in ${arr} are: ${palindromes}`);
})(numArr1);
//
// ////==========anonymous==============================================================================
console.log("=====Program f=========================================");

// //6. Return median of two sorted arrays of the same size.
console.log(
  "Return median of two sorted arrays of the same size using Anonymous function"
);
const getMedian = function (ar1, ar2, n) {
  var i = 0;
  var j = 0;
  var count;
  var m1 = -1,
    m2 = -1;

  /* Since there are 2n elements, median will be average
    of elements at index n-1 and n in the array obtained after
    merging ar1 and ar2 */
  for (count = 0; count <= n; count++) {
    /*Below is to handle case where all elements of ar1[] are
        smaller than smallest(or first) element of ar2[]*/
    if (i == n) {
      m1 = m2;
      m2 = ar2[0];
      break;
    } else if (j == n) {
      /*Below is to handle case where all elements of ar2[] are
        smaller than smallest(or first) element of ar1[]*/
      m1 = m2;
      m2 = ar1[0];
      break;
    }
    /* equals sign because if two
            arrays have some common elements */
    if (ar1[i] <= ar2[j]) {
      m1 = m2; /* Store the prev median */
      m2 = ar1[i];
      i++;
    } else {
      m1 = m2; /* Store the prev median */
      m2 = ar2[j];
      j++;
    }
  }
  return (m1 + m2) / 2;
};
var ar1 = [1, 12, 15, 26, 38];
var ar2 = [2, 13, 17, 30, 45];
var an1 = ar1.length;
var an2 = ar2.length;

if (an1 == an2)
  console.log(`Median of ${ar1} and ${ar2} is: ${getMedian(ar1, ar2, an1)}`);
else console.log("Doesn't work for arrays of unequal size");

// ////----------IIFE-------------------------------------------------------------------------
console.log(
  "Return median of two sorted arrays of the same size using IIFE function"
);

((ar1, ar2, n) => {
  var i = 0;
  var j = 0;
  var count;
  var m1 = -1,
    m2 = -1;

  /* Since there are 2n elements, median will be average
    of elements at index n-1 and n in the array obtained after
    merging ar1 and ar2 */
  for (count = 0; count <= n; count++) {
    /*Below is to handle case where all elements of ar1[] are
        smaller than smallest(or first) element of ar2[]*/
    if (i == n) {
      m1 = m2;
      m2 = ar2[0];
      break;
    } else if (j == n) {

    /*Below is to handle case where all elements of ar2[] are
        smaller than smallest(or first) element of ar1[]*/
      m1 = m2;
      m2 = ar1[0];
      break;
    }
    /* equals sign because if two
            arrays have some common elements */
    if (ar1[i] <= ar2[j]) {
      m1 = m2; /* Store the prev median */
      m2 = ar1[i];
      i++;
    } else {
      m1 = m2; /* Store the prev median */
      m2 = ar2[j];
      j++;
    }
  }
  console.log(`Median of ${ar1} and ${ar2} is: ${(m1 + m2) / 2}`);
})(ar1, ar2, an1);
////==========anonymous==============================================================================
console.log("======Program g========================================");

// //7. Remove duplicates from an array

let arr1 = [1, 3, 4, 5, 3, 4, 45, 4, 4, 1, 21, 2];
const removeDuplicates = function (arr) {
  let unique = [];
  for (i = 0; i < arr.length; i++) {
    if (unique.indexOf(arr[i]) === -1) {
      unique.push(arr[i]);
    }
  }
  return unique;
};
console.log("Remove duplicates from an array using Anonymous function");
console.log(`${arr1} after removing duplicates : ${removeDuplicates(arr1)}`);

// ////----------IIFE-------------------------------------------------------------------------

console.log("Remove duplicates from an array using IIFE function");
((arr) => {
  let unique = [];
  for (i = 0; i < arr.length; i++) {
    if (unique.indexOf(arr[i]) === -1) {
      unique.push(arr[i]);
    }
  }
  console.log(`${arr} after removing duplicates : ${unique}`);
})(arr1);

//
// // ////==========anonymous==============================================================================
// // //8. Rotate an array by k times
console.log("======Program h========================================");
const rotate = function (a, n, k) {
  k = k % n;
  let result = [];
  for (let i = 0; i < n; i++) {
    if (i < k) {
      result.push(a[n + i - k]);
    } else {
      result.push(a[i - k]);
    }
  }
  return result;
};
let array = [1, 2, 3, 4, 5];
let n = array.length;
let k = 2;
console.log("Rotate an array by k times using Anonymous function");
console.log(
  `The result after rotating ${array} by ${k} times: ${rotate(array, n, k)}`
);
console.log("Rotate an array by k times using IIFE function");

let array2 = [1, 2, 3, 4, 5];
let n2 = array.length;
let k2 = 2;
((a, n, k) => {
  k = k % n;
  let result = [];
  for (let i = 0; i < n; i++) {
    if (i < k) {
      result.push(a[n + i - k]);
    } else {
      result.push(a[i - k]);
    }
  }
  console.log(`The result after rotating ${a} by ${k} times: ${result}`);
})(array2, n2, k2);
console.log("==============================================");

// ////========================================================================================
