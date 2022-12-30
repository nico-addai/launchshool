/*
Write a function that takes a string argument and returns a new string that contains the value of the 
original string with all consecutive duplicate characters collapsed into a single character.

Examples:

Copy Code
crunch('ddaaiillyy ddoouubbllee');    // "daily double"
crunch('4444abcabccba');              // "4abcabcba"
crunch('ggggggggggggggg');            // "g"
crunch('a');                          // "a"
crunch('');                           // ""
*/

// function crunch(str) {
//     let result = str.split('');
//     let letterTest=result[0];
//     let  trueResuly= [letterTest]; 
//     for(let i=0; i<str.length; i++){
//         if(letterTest===str[i]){
//             letterTest=str[i]
//             continue
//         }else{
//             trueResuly.push(str[i]); 
//             letterTest=str[i]
//         }
//     }


//     return trueResuly.join(''); 
// }

// console.log(crunch('ggggggggggggggg')); 
// console.log(crunch('ddaaiillyy ddoouubbllee'));    // "daily double"
// console.log(crunch('4444abcabccba'));              // "4abcabcba"
// console.log(crunch('ggggggggggggggg'));            // "g"
// console.log(crunch('a'));                          // "a"
// console.log(crunch(''));                           // ""

//Enter a noun: dog
// Enter a verb: walk
// Enter an adjective: blue
// Enter an adverb: quickly

// // console output
// Do you walk your blue dog quickly? That's hilarious!
// The blue dog walks quickly over the lazy dog.
// The dog quickly walks up blue Joe's turtle.
// let readline = require('readline-sync'); 

// function madlibs(){

//     console.log('Welcome to Madlibs! Try to ')
//    let noun = readline.question('Enter a noun: '); 
//    let verb = readline.question('Enter a verb: '); 
//    let adverb = readline.question('Enter an adverb: '); 
//    let adjective = readline.question('Enter an adjective: '); 

//    console.log(`The ${adjective} ${noun} ${verb} ${adverb}.`)

// }

// madlibs(); 

// getGrade(95, 90, 93);    // "A"
// getGrade(50, 50, 95);    // "D"

// function getGrade(num1, num2, num3){
//     let average = Math.floor((num1 + num2 + num3) / 3); 

//     switch(true){
//         case average>=0 && average<60: 
//         return console.log('F');

//         case average>=60 && average<70: 
//         return console.log('D'); 

//         case average>=70 && average<80: 
//         return console.log('C'); 

//         case average>=80 && average<90: 
//         return console.log('B'); 

//         case average>=90: 
//         return console.log('A'); 

//         default:
//             console.log(`Sorry, can't parse ${average}.`);
//     }

// }

// twice(37);          // 74
// twice(44);          // 44
// twice(334433);      // 668866
// twice(444);         // 888
// twice(107);         // 214
// twice(103103);      // 103103
// twice(3333);        // 3333
// twice(7676);        // 7676

// function twice(num){
//     let str = num.toString(); 
//     if(str.length%2!=0){
//         return console.log(num*2) 
//     }else{
//        if(str.substring(0, (str.length/2)) ===str.substring((str.length/2))) {
//         return console.log(num)
//        }else{
//         return console.log(num*2) 
//        }
//     } 
// }

// logInBox('To boldly go where no one has gone before.');
// logInBox('');

// function logInBox(str){
//     console.log( `+-${'-'.repeat(str.length)}-+`)
//     console.log( `| ${' '.repeat(str.length)} |`)
//     console.log(`| ${str} |`) 
//     console.log( `| ${' '.repeat(str.length)} |`)
//     console.log( `+-${'-'.repeat(str.length)}-+`)
// }

// const stringy = (num) => console.log('10'.repeat(num/2))
// stringy(6);    // "101010"
// stringy(9);    // "101010101"
// stringy(4);    // "1010"
// stringy(7);    // "1010101"

// cleanUp("---what's my +*& line?");    // " what s my line "
// function cleanUp(str){

//    let result = []; 

//    for(let i=0; i<str.length; i++){
  
//         if(str.charCodeAt(i)>=65 && str.charCodeAt(i)<=90){
//             result.push(str[i])
//         }else if(str.charCodeAt(i)>=97 && str.charCodeAt(i)<=122){
//             result.push(str[i])
//         }else{
//             result.push('')
//         }
            
//         }
   
//         result = result.filter((letter, idx, arr)=>{
//             if(letter==='' && arr[idx] ===arr[idx+1]){

//             }
//         })
//    return console.log(result)
// }


function cleanUp(str){
  const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let strArr = str.split(''); 
  let result = []

  for(let i=0; i<strArr.length; i++){
    if(alphabet.includes(strArr[i])) {
      result.push(strArr[i])
    }else{
      result.push(' ')
    }
  }

  for(let i=0; i<result.length; i++){
      if(result[i]===' ' && 
      (result[i-1]===' '||result[i+1]===' ')){
        result.splice(i,1)
      }
  }
  for(let i=0; i<result.length; i++){
    if(result[i]===' ' && 
    (result[i-1]===' '||result[i+1]===' ')){
      result.splice(i,1)
    }
}
  return result.join(''); 
}

console.log(cleanUp("---what's my +*& line?"));    // " what s my line "

// function century(year){
// let yearName = year.toString()[year.toString().length-1]; 
// let century = String(Math.ceil(year/100)); 

// if(year%100===0){
//     century; 
// }else{
//     century = String(Math.ceil(year/100)); 
//     yearName = century[century.length-1];
// }

// //Switch according to the number 
// if (century[century.length -2] === "1") {
//     century = century.concat("th") 
  
//    } else{
// switch(yearName){
//     case '1':
//         century = century.concat('','st')
//         break; 
//     case '2':
//         century = century.concat('','nd')
//         break; 
//     case '3':
//         century = century.concat('','rd')
//         break;
//     default: 
//         century = century.concat('','th')
// }
//    }
// //rond up century with excpetion of edge cases 00

// console.log(century); 
// }
// Write a function that takes a year as input and returns the century. 
// The return value should be a string that begins with the century number, 
// and ends with 'st', 'nd', 'rd', or 'th' as appropriate for that number.

// New centuries begin in years that end with 01. So, the years 1901 -
//  2000 comprise the 20th century.

// function century(year){
// let yearName = year.toString()[year.toString().length-1]; 
// let century = String(Math.ceil(year/100)); 

// if(year%100===0){
//     century; 
// }else{
//     century = String(Math.ceil(year/100)); 
//     yearName = century[century.length-1];
// }

// //Switch according to the number 
// if (century[century.length -2] === "1") {
//     century = century.concat("th") 
  
//    } else{
// switch(yearName){
//     case '1':
//         century = century.concat('','st')
//         break; 
//     case '2':
//         century = century.concat('','nd')
//         break; 
//     case '3':
//         century = century.concat('','rd')
//         break;
//     default: 
//         century = century.concat('','th')
// }
//    }
// //rond up century with excpetion of edge cases 00

// console.log(century); 
// }

// // The Fibonacci series is a series of numbers (1, 1, 2, 3, 5, 8, 13, 21, ...) 
// // such that the first two numbers are 1 by definition, and each subsequent 
// // number is the sum of the two previous numbers. Fibonacci numbers often appear 
// // in mathematics and nature.

// // Computationally, the Fibonacci series is a simple series, but the results 
// // grow at an incredibly rapid rate. For example, the 100th Fibonacci number is
// //  354,224,848,179,261,915,075—that's enormous, especially considering that 
// //  it takes six iterations just to find the first 2-digit Fibonacci number.

// // Write a function that calculates and returns the index of the first Fibonacci 
// // number that has the number of digits specified by the argument. (The first 
// //     Fibonacci number has an index of 1.)

// // You may assume that the argument is always an integer greater than or equal
// //  to 2.

// findFibonacciIndexByLength(2n) === 7n;    // 1 1 2 3 5 8 13
// findFibonacciIndexByLength(3n) === 12n;   // 1 1 2 3 5 8 13 21 34 55 89 144
// findFibonacciIndexByLength(10n) === 45n;
// findFibonacciIndexByLength(16n) === 74n;
// findFibonacciIndexByLength(100n) === 476n;
// findFibonacciIndexByLength(1000n) === 4782n;
// findFibonacciIndexByLength(10000n) === 47847n;

// // The last example may take a minute or so to run.

// function findFibonacciIndexByLength(bigInt){
//     let firstIndex = 1; 
//     let secondIndex = 1

//     let bigIntFibnoccia = bigInt + bigInt
// }