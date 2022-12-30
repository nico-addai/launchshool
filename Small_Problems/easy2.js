// function evenValues(array) {
//     let evens = [];
  
//     array.forEach(value => {
//       if (value % 2 === 0) {
//         evens.push(value);
//       }
//       array.shift();
//     });
  
//     return evens;
//   }
  
//   console.log(evenValues([1, 3, 4, 2, 4, 6, 5, 7, 9, 10, 12]));

// const greetings = (arr, obj) => 
//   `Hello, ${arr.join(' ')}! Nice to have a ${obj.title} ${obj.occupation} around!`

// console.log(
//   greetings(["John", "Q", "Doe"], { title: "Master", occupation: "Plumber" })
// );

// let alphabeticNumberSort = arr => {
//   const ALPHABETS = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight',
//     'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen',
//     'eighteen', 'nineteen'];

//   arr = arr.map(num => ALPHABETS[num]);
//   return arr.sort().map(el => ALPHABETS.indexOf(el));
// };

// alphabeticNumberSort(
//   [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]);
// // [8, 18, 11, 15, 5, 4, 14, 9, 19, 1, 7, 17, 6, 16, 10, 13, 3, 12, 2, 0]

// const multiply = (num1,num2) => num1*num2; 

// console.log(multiply(5, 3) === 15); // logs true

// const square = num => num*num; 
// console.log(square(5) === 25); // logs true
// console.log(square(-8) === 64); // logs true

/*
==> Enter the first number:
23
==> Enter the second number:
17
==> 23 + 17 = 40
==> 23 - 17 = 6
==> 23 * 17 = 391
==> 23 / 17 = 1
==> 23 % 17 = 6
==> 23 ** 17 = 1.4105003956066297e+23

*/
// const readline = require('readline-sync')

// const prompt = str =>{
//   console.log(`=>${str}`)
//  }

// prompt("Enter the first number:"); 
// const num1 = readline.question(); 

// prompt("Enter the second number:");
// const num2 = readline.question()

// prompt(`${num1} + ${num2} = ${Number(num1) + Number(num2)}`)
// prompt(`${num1} - ${num2} = ${Number(num1) - Number(num2)}`)
// prompt(`${num1} * ${num2} = ${Number(num1) * Number(num2)}`)
// prompt(`${num1} / ${num2} = ${Number(num1) / Number(num2)}`)
// prompt(`${num1} % ${num2} = ${Number(num1) % Number(num2)}`)

/*

Write a function that returns the next to last word in the String passed to it as an argument.

Words are any sequence of non-blank characters.

You may assume that the input String will always contain at least two words.

Examples:

Copy Code
console.log(penultimate("last word") === "last"); // logs true
console.log(penultimate("Launch School is great!") === "is"); // logs true
*/

// const penultimate = (phrase) => {
//     let result = phrase.split(' ')
// return result[result.length - 2]; 
// }; 
// console.log(penultimate("last word") === "last"); // logs true
// console.log(penultimate("Launch School is great!") === "is"); // logs true

/*
In this exercise, you will write a function named xor that takes two arguments, and returns true if exactly one of its arguments is truthy, false otherwise. Note that we are looking for a boolean result instead of a truthy/falsy value as returned by || and &&.

Examples:

Copy Code
console.log(xor(5, 0) === true);
console.log(xor(false, true) === true);
console.log(xor(1, 1) === false);
console.log(xor(true, true) === false);
*/


// function xor(num1, num2){
//     if(num1  && num2 ){
//         return false;
//     }else if(!num1 && !num2){
//         return false; 
//     }else{
//         return true; 
//     }
// }

// function xor(num1, num2) {
//     if (num1 && !num2) {
//       return true
//     } else if (!num1 && num2) {
//       return true
//     } else {
//       return false;
//     }
//   }

// console.log(xor(5, 0));
// console.log(xor(false, true));
// console.log(xor(1, 1));
// console.log(xor(true, true));

// const stringToInteger = numStr => Number(numStr); 
// console.log(stringToInteger("4321") === 4321); // logs true
// console.log(stringToInteger("570") === 570); // logs true

/*
Madlibs is a simple game where you create a story template with "blanks" for words. You, or another player, then construct a list of words and place them into the story, creating an often silly or funny story as a result.

Create a simple madlib program that prompts for a noun, a verb, an adverb, and an adjective, and injects them into a story that you create.

Example:

Copy Code
Enter a noun: dog
Enter a verb: walk
Enter an adjective: blue
Enter an adverb: quickly

// console output
Do you walk your blue dog quickly? That's hilarious!
The blue dog walks quickly over the lazy dog.
The dog quickly walks up blue Joe's turtle.

*/

// console.log(oddities([2, 3, 4, 5, 6])); // logs [2, 4, 6]
// console.log(oddities([1, 2, 3, 4, 5, 6])); // logs [1, 3, 5]
// console.log(oddities(["abc", "def"])); // logs ['abc']
// console.log(oddities([123])); // logs [123]
// console.log(oddities([])); // logs []

// function oddities(arr){
//     let result =[]
//     for(let i=0; i<arr.length; i++){
//         if(i%2===0){
//             result.push(arr[i])
//         }    
//     }
//     return result; 
// }

// console.log(stringToInteger("4321") === 4321); // logs true
// console.log(stringToInteger("570") === 570); // logs true

// const stringToInteger = (str) => str*1

// const stringToSignedInteger = (str) => str*1

// console.log(stringToSignedInteger("4321") === 4321); // logs true
// console.log(stringToSignedInteger("-570") === -570); // logs true
// console.log(stringToSignedInteger("+100") === 100); // logs true

// integerToString(4321);        // "4321"
// integerToString(0);           // "0"
// integerToString(5000);        // "5000"
// integerToString(1234567890);  // "1234567890"
// function integerToString(num){
//     let result = ['"', num, '"']

//     return console.log(typeof result.join(''))
// }

// function teddy(){
//     let age = 0
//     while(age<19){
//         age=Math.floor(Math.random()*120)
//     }

//    return console.log(`Teddy is ${age} years old!`)
// }

// teddy()

What is your age? 30
At what age would you like to retire? 70

It's 2017. You will retire in 2057.
You have only 40 years of work to go!

