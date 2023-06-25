// Given an array of numbers, for each number, find out how
// many numbers in the array are smaller than it. When
// counting numbers, only count unique values. That is, if a
// given number occurs multiple times in the array, it
// should only be counted once.

// Examples:

// console.log(smallerNumbersThanCurrent([8, 1, 2, 2, 3])); // [3, 0, 1, 1, 2]
// console.log(smallerNumbersThanCurrent(
//   [1, 4, 6, 8, 13, 2, 4, 5, 4])); // [0, 2, 4, 5, 6, 1, 2, 3, 2]
// console.log(smallerNumbersThanCurrent([7, 7, 7, 7])); // [0,0,0,0]
// console.log(smallerNumbersThanCurrent([6, 5, 4, 8])); // [2, 1, 0, 3]
// console.log(smallerNumbersThanCurrent([1])); // [0]

//Hold a number captive 
//create a unique set of numbers 
//compare that number with every element in the array
//count how many nmber are smaller than that number 
//if the length of the arr is 1, return 0 

// function smallerNumbersThanCurrent(arr){
//     let result = []; 
//     let unique = [...new Set(arr)];
//     for(let i=0; i<arr.length; i++){
//         let current = arr[i]; 

//         let count =0; 
//         // console.log(arr[i])
//         unique.forEach(element => {
//             if(current == element){
//                 count
//             }else if(current>element){
//                 count+=1
//             }
//         });
//         result.push(count);
//     }
//     return console.log(result)
// }

// function onlyUnique(value, index, self) {
//     return self.indexOf(value) === index;
//   }
  
//   // usage example:
//   var a = ['a', 1, 'a', 2, '1'];
//   var unique = a.filter(onlyUnique);

// Write a function that takes one argument, an array of
// integers. The function should return minimum sum of 5
// consecutive numbers in the array. If the array contains
// less than 5 elements, the function should return null.

// Make a guard clause for any array less than 5 elements long 
// minimum sum of the smallest 5 conscutive numbers 

// add 5 elements together 
// compare sum to other sums 
// return smallest sum 
// take an arr, return a number or null 

// Examples:

console.log(minimumSum([1, 2, 3, 4]) === null);
console.log(minimumSum([1, 2, 3, 4, 5, -5]) === 10); // 
console.log(minimumSum([1, 2, 3, 4, 5, 6]) === 15);
console.log(minimumSum([55, 2, 6, 5, 1, 2, 9, 3, 5, 100]) === 16);
console.log(minimumSum([-1, -5, -3, 0, -1, 2, -4]) === -10);

// // The tests above should each log "true".

function minimumSum(arr) {
    // Guard clause to return null if the array has less than 5 elements
    if (arr.length < 5) {
      return null;
    }
  
    // Initialize minimum sum to the sum of the first 5 elements
    let minSum = arr.slice(0, 5).reduce((sum, num) => sum + num, 0);
  
    // Iterate through the array, keeping track of the current sum
    // and updating the minimum sum if necessary
    for (let i = 1; i <= arr.length - 5; i++) {
      let currentSum = arr.slice(i, i + 5).reduce((sum, num) => sum + num, 0);
      if (currentSum < minSum) {
        minSum = currentSum;
      }
    }
    console.log(minSum)
    return minSum;
  }
  

// Write a function that takes an array of integers and
// returns the two numbers that are closest together in
// value.

//Should ask if order needs to be the same for each 

// Examples:

// console.log(closestNumbers([5, 25, 15, 11, 20]));     // [15, 11]
// console.log(closestNumbers([19, 25, 32, 4, 27, 16])); // [25, 27]
// console.log(closestNumbers([12, 7, 17]));             // [12, 7]

// function closestNumbers(arr){
//     // sort out the arr 
//     // check the distance between every number 
//     //return the first lowest pair 
//     let result = []; 
//     arr.sort((a,b)=> a-b)
//     for(let i=0; i<arr.length; i++){
//         for(let j=1; j<arr.length; j++){
//             result.push([arr[j], arr[i]], arr[j]-arr[i])
//         }
//     }
//     let smallest = result.filter((val, idx, arr)=>{
//         if(idx%2===1 && val>0) return arr[idx]
//     })

//     smallest = result.indexOf(Math.min(...smallest))
//     return result[smallest-1]

// }

// Write a function that takes a string as an argument and
// returns the character that occurs least often in the
// given string. If there are multiple characters with the
// same lowest number of occurrences, then return the one
// that appears first in the string. When counting
// characters, consider uppercase and lowercase versions to
// be the same.

//take a string => return a character (string)
//count instances of each character 
//lower case and uppercase are the same 
//if multiple characters have the same value
//return first charater 


// Examples:

// console.log(leastCommonChar("Hello World") === "h");
// console.log(leastCommonChar("Peter Piper picked a peck of pickled peppers") ===
//                             "t");
// console.log(leastCommonChar("Mississippi") === "m");
// console.log(leastCommonChar("Happy birthday!") === ' ');
// console.log(leastCommonChar("aaaaaAAAA") === 'a');

// // The tests above should each log "true".

// function leastCommonChar(str){
//     let instances = {}
//     let letters = str.toLowerCase().split('')

//     letters.map(letter=> instances[letter] =0)
    
//     for(let i=0; i<letters.length; i++){
//         if(Object.keys(instances).includes(letters[i])){
//             instances[letters[i]]+=1
//         }
//     }

//     // console.log(instances)
//     let values = Object.values(instances)
//     const keys = Object.keys(instances); 
//     const lowest = Math.min(...values)
//     // console.log(lowest)
//     // values = values.sort((a,b)=> a-b); 
//     // if(values[0]===values[1]){
//     //     return str[0]
//     // }else{
//        const indexOfLowest = values.findIndex(function (x) { 
//         return x === lowest })
//         return keys[indexOfLowest] 
    
// }

//1
// Given two words, how many letters do you have to remove from them to make them anagrams?
// Example
// First word: codewars (4 letters removed)
// Second word: hackerrank (6 letters removed)
// Result: 10

// c   e  a r 
//  a c  e r    
// hokrankdws

//  a c  e r  
//  a c  e r    
// hokrankdws

// A word is an anagram of another word if they have the same letters.
// Do not worry about case. All inputs will be lowercase.
      // takes 2 strs -> number of letters needed to be removed to be the same 
      // all cases are lowercase
      // str -> an array -> loop over arr 
      // sort the word so that the can be compared more easily 
//Algo:
// Split words into arrs and save values in 
// Initialize word1 and word2 as arra 
// Initialize wordBank -> this will contain the letters that either word doesn't have 
// Guard clause: If any of the words are equal to 1 in length, return 1 
// Guard clause: If any of the words are equal to 0 in length, return 0 
// Loop over longest word 
    // If the shorter word doesn't include the char, remove it from the char list and push to the wordBank 
// Loop over the shorter word 
    // If the longer word doesn't include a char, remove it from the char list and push to the wordBank 
// Return the length of the wordBank 

console.log(anagramDifference("",""));      // 0
console.log(anagramDifference("a",""));     // 1
console.log(anagramDifference("", "a"));    // 1
console.log(anagramDifference("ab","a"));   // 1
console.log(anagramDifference("ab","cd"));  // 4
console.log(anagramDifference("aab","a"));  // 2
console.log(anagramDifference("a","aab"));  // 2
console.log(anagramDifference("codewars","hackerrank")); // 10

// 2
// Implement a function that calculates the sum of numbers inside of a string.
// Example: "L12aun3ch Sch3oo45l" === 63

// You can expect that the string will include only non-negative numbers.
// "HE2LL3O W1OR5LD" -> 2 + 3 + 1 + 5 = 11  
// he30quick20brown10f0x1203jumps914ov3r1349the102l4zy dog -> 30 + 20 + 10 + 1203 + 914 + 3 + 1349 + 102 + 4
// takes a str -> returns a number ( the sum of the numbers in the str )

// Algo
// Initialize sum = 0 
// Loop over the string 
  // Initilize currentStr 
  // Save every char as a coerced a number to currentStr 
  // Alphabetic chars should be NaN  
      // if alphabetic, re-assign currentStr with next value 
     // If it is a number, and the prev value is a number, 
     // add the two chars to currentStr
  // When it encounters the next string value, stop adding to currentStr 
// Add value of currentStr it to sum  
// Return sum 

console.log(sumOfNumbers("HE2LL3O W1OR5LD") === 11);
console.log(sumOfNumbers("The30quick20brown10f0x1203jumps914ov3r1349the102l4zy dog") === 3635);