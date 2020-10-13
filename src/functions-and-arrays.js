
// LAB FUNCTIONS AND ARRAYS

// Iteration #1: Find the maximum

function maxOfTwoNumbers (wordOne, wordTwo) {
  if (wordOne.length > wordTwo.length) {
    return wordOne;
  } else if (wordTwo.length > wordOne.length) {
    return wordTwo;
  } else {
    return wordOne;
  } 
}

// Iteration #2: Find longest word


const words = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot'];
 

function findLongestWord (words) {
  if (words.length !== 0) {
  let longestWord = '';
  for (let i=0; i<words.length; i++) {
   if (words[i].length > longestWord.length) {
    longestWord = words[i];
    }
  }
  return longestWord;}
  else {return null;}
}

findLongestWord (words);


// Iteration #3: Calculate the sum

const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers (numbers) {
  let sum = 0;
  for (let i=0; i<numbers.length; i++) {
    sum = sum + numbers[i]
  }
  return sum
}
console.log(sumNumbers(numbers))

// 3.1 BONUS 


// I'm trying the bonus with a switch : not working, not sure it's correct syntax for a switch (in case):

/*
function sum (array) {
  
  let sum1 = 0;
  for (let i=0; i<array.length; i++) {
    let iteration = array[i];
    if (typeOf (iteration) === "string") {
      sum1 = sum1 + array[i].length;
    } else if (typeOf (iteration) === "string") 
    { sum1 = sum1 + array[i].length;} {
      else if (iteration === false)
    {sum1 = sum1;
    } else if (iteration === true) {
      sum1 = sum1 + 1;
    } else if (typeOf (iteration) === number) {
      sum1 = sum1 + array[i]
    }}


const mixedArr = [6, 12, 'miami', 1, true, 'barca', '200', 'lisboa', 8, 10];
*/

// Then I'm trying the bonus with an if else if statement, but it's not working neither:
/*
function sum (array) {
  
  let sum1 = 0;
  
  for (let i=0; i<array.length; i++) 
  { let iteration = array[i];
    if (typeOf (iteration) === "string") {
      sum1 = sum1 + array[i].length;
    } 
    else if (typeOf (iteration) === "string") 
    { sum1 = sum1 + array[i].length;} 
      else if (iteration === false)
    {sum1 = sum1;
    } 
    else if (iteration === true) {
      sum1 = sum1 + 1;
    } 
    else if (typeOf (iteration) === number) {
      sum1 = sum1 + array[i]
    }
    else { console.log ("Please check the content of your array!");}
  }


const mixedArr = [6, 12, 'miami', 1, true, 'barca', '200', 'lisboa', 8, 10];
  
sum (mixedarr);
*/


// Iteration #4: Calculate the average
// Level 1: Array of numbers
const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers (array) {
  if (array.length !== 0) {
    return sumNumbers(array) / array.length;
  } else { return null;}
}

let result1 = averageNumbers([1, 2, 3]);
console.log(result1);



// Level 2: Array of strings
const wordsArr = ['seat', 'correspond', 'linen', 'motif', 'hole', 'smell', 'smart', 'chaos', 'fuel', 'palace'];


function sumOfLength (array) {
let sumString = 0;
  for (let i=0; i<array.length; i++) {
    sumString = sumString + array[i].length
  }
  return sumString
}

console.log(sumOfLength (["yes","no"]))


function averageWordLength (array) {
  if (array.length !== 0) {
  let stringAverage = sumOfLength(array)/ array.length;
  return stringAverage;}
  else 
  {return null}
}

console.log (averageWordLength(wordsArr))

// BONUS to do later: Bonus - Iteration #4.1: A generic avg() function

// Iteration #5: Unique arrays
const wordsUnique = [
  'crab',
  'poison',
  'contagious',
  'simple',
  'bring',
  'sharp',
  'playground',
  'poison',
  'communion',
  'simple',
  'bring'
];

// I don't manage to shorten the array by erasing the double value ???

function uniquifyArray(array) {
  if (array.length !== 0) {
      for (let i=0; i<array.length; i++) {
        if (array.indexOf(i) === array.lastIndexOf(i)) {
          return array;}
          else if (array.indexOf(i) !== array.lastIndexOf(i)) {
        array = array.splice(i, 1);
        return array;
        } else {
          return array;
        }}
    } 
    else {
  return null
  }
}

console.log (uniquifyArray(wordsUnique));


// Iteration #6: Find elements
const wordsFind = ['machine', 'subset', 'trouble', 'starting', 'matter', 'eating', 'truth', 'disobedience'];


function doesWordExist (array, specificWord) {
  if (array.length !== 0) {
  for (let i= 0; i < array.length; i++) {
  return array.includes(specificWord, [0]);
}}
else { return null }
}

console.log(doesWordExist(wordsFind, "machine"));
console.log(doesWordExist(wordsFind, "machina"));


// Iteration #7: Count repetition
const wordsCount = [
  'machine',
  'matter',
  'subset',
  'trouble',
  'starting',
  'matter',
  'eating',
  'matter',
  'truth',
  'disobedience',
  'matter'
];

function howManyTimes (array, wordToSearch) {
  if (array.length !== 0) {
    let n = 0;
    for (i = 0; i< array.length; i++) {
      if(array[i] === wordToSearch) {n++}
    }
    return n;
  } else {
    return 0;
  }
}

console.log(howManyTimes (wordsCount, "matter"));

// Iteration #8: Bonus

const matrix = [
  [8, 2, 22, 97, 38, 15, 0, 40, 0, 75, 4, 5, 7, 78, 52, 12, 50, 77, 91, 8],
  [49, 49, 99, 40, 17, 81, 18, 57, 60, 87, 17, 40, 98, 43, 69, 48, 4, 56, 62, 0],
  [81, 49, 31, 73, 55, 79, 14, 29, 93, 71, 40, 67, 53, 88, 30, 3, 49, 13, 36, 65],
  [52, 70, 95, 23, 4, 60, 11, 42, 69, 24, 68, 56, 1, 32, 56, 71, 37, 2, 36, 91],
  [22, 31, 16, 71, 51, 67, 63, 89, 41, 92, 36, 54, 22, 40, 40, 28, 66, 33, 13, 80],
  [24, 47, 32, 60, 99, 3, 45, 2, 44, 75, 33, 53, 78, 36, 84, 20, 35, 17, 12, 50],
  [32, 98, 81, 28, 64, 23, 67, 10, 26, 38, 40, 67, 59, 54, 70, 66, 18, 38, 64, 70],
  [67, 26, 20, 68, 2, 62, 12, 20, 95, 63, 94, 39, 63, 8, 40, 91, 66, 49, 94, 21],
  [24, 55, 58, 5, 66, 73, 99, 26, 97, 17, 78, 78, 96, 83, 14, 88, 34, 89, 63, 72],
  [21, 36, 23, 9, 75, 0, 76, 44, 20, 45, 35, 14, 0, 61, 33, 97, 34, 31, 33, 95],
  [78, 17, 53, 28, 22, 75, 31, 67, 15, 94, 3, 80, 4, 62, 16, 14, 9, 53, 56, 92],
  [16, 39, 5, 42, 96, 35, 31, 47, 55, 58, 88, 24, 0, 17, 54, 24, 36, 29, 85, 57],
  [86, 56, 0, 48, 35, 71, 89, 7, 5, 44, 44, 37, 44, 60, 21, 58, 51, 54, 17, 58],
  [19, 80, 81, 68, 5, 94, 47, 69, 28, 73, 92, 13, 86, 52, 17, 77, 4, 89, 55, 40],
  [4, 52, 8, 83, 97, 35, 99, 16, 7, 97, 57, 32, 16, 26, 26, 79, 33, 27, 98, 66],
  [88, 36, 68, 87, 57, 62, 20, 72, 3, 46, 33, 67, 46, 55, 12, 32, 63, 93, 53, 69],
  [4, 42, 16, 73, 38, 25, 39, 11, 24, 94, 72, 18, 8, 46, 29, 32, 40, 62, 76, 36],
  [20, 69, 36, 41, 72, 30, 23, 88, 34, 62, 99, 69, 82, 67, 59, 85, 74, 4, 36, 16],
  [20, 73, 35, 29, 78, 31, 90, 1, 74, 31, 49, 71, 48, 86, 81, 16, 23, 57, 5, 54],
  [1, 70, 54, 71, 83, 51, 54, 69, 16, 92, 33, 48, 61, 43, 52, 1, 89, 19, 67, 48]
];
