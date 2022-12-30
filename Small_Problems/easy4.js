// function teddyAge(){
//     let age=Math.round(Math.random()*120); 
//     if(age<20){
//         age=20; 
//     }
//     return console.log(`Teddy is ${age} years old!`); 
// }

// teddyAge(); 
// teddyAge(); 
// teddyAge(); 

// function numberProgram (){
//     let readline = require('readline-sync')
//     let iteration = 0; 
//     let numbArray = []; 
//     let place = ["1st", "2nd", "3rd", "4th", "5th", "last"]

//     console.log("Welcome to Number Compare! Enter 6 numbers. ")
//     while(iteration<5){
//         console.log(`Enter ${place[iteration]} number: `)
//         numbArray[iteration] = Number(readline.prompt())
//         iteration++; 
//     }
//     console.log(`Enter ${place[place.length-1]} number: `)
//     let lastNumver = Number(readline.prompt())
//     const eithOr = numbArray.includes(lastNumver) ? `The number ${lastNumver} appears in`: `The number ${lastNumver} does not appear in`
//     return console.log(`${eithOr} ${numbArray[0]}, ${numbArray[1]}, ${numbArray[2]}, ${numbArray[3]}, ${numbArray[4]}.`)
// }

// numberProgram(); 

// function retire(){
//     let readline = require('readline-sync'); 
//     console.log(`What is your age?`)
//     let ageNow = readline.prompt(); 
//     console.log(`At what age would you like to retire?`)
//     let ageLater = readline.prompt(); 
//     const today = new Date();
//     const year = today.getFullYear();
    
//     return console.log(`
//     It's ${year}. You will retire in ${year+(ageLater-ageNow)}.
//     You have only ${(ageLater-ageNow)} years of work to go!`)
// }

// retire()

// wordSizes('Four score and seven.');                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
// wordSizes('Hey diddle diddle, the cat and the fiddle!');  // { "3": 5, "6": 1, "7": 2 }
// wordSizes("What's up doc?");                              // { "2": 1, "4": 1, "6": 1 }
// wordSizes('');                                            // {}

// const isPalindromicNumber = num=> num.toString().split('').join('')===num.toString().split('').reverse().join('') 

// isPalindromicNumber(34543);        // true
// isPalindromicNumber(123210);       // false
// isPalindromicNumber(22);           // true
// isPalindromicNumber(5);            // true

// const isPalindrome = str => console.log(str == str.split('').reverse('').join(''))

// isPalindrome('madam');               // true
// isPalindrome('Madam');               // false (case matters)
// isPalindrome("madam i'm adam");      // false (all characters matter)
// isPalindrome('356653');              // true

// let runningTotal = (array) => {
//     let total = 0;
//     let runningTotalArray = array.map((num) => total += num);
  
//     return runningTotalArray;
//   }

// runningTotal([2, 5, 13]);             // [2, 7, 20]
// runningTotal([14, 11, 7, 15, 20]);    // [14, 25, 32, 47, 67]
// runningTotal([3]);                    // [3]
// runningTotal([]);                     // []

// function runningTotal(arr){
   
//     if(arr.length>0){
//          let result = [arr[0]]; 
//     for(let i=1; i<arr.length; i++){
//         result.push(result[i-1]+arr[i]); 
//     }    
//     return console.log(result)
//     } else{
//         return console.log([])
//     }
    

// }

// Write a function that takes a string consisting of zero or more space separated words and 
// returns an object that shows the number of words of different sizes.

// Words consist of any sequence of non-space characters.

//input a string -> return an object 
//object is the count of each word 
//if an empty string, return an empty object 

function wordSizes(str){
    let result = {}
    let count = 1; 
    let punct = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
    
    if(!str) return console.log(result); 

    str.split(' ').map(word=>{
        word =  (word.split('').filter(letter => punct.includes(letter))).join('')
        //note the importance of tracking how you increment your word length 
        result[word.length] ? result[word.length] +=1 : result[word.length] = count
    })
    console.log(result); 
}

wordSizes('Four score and seven.');                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
wordSizes('Hey diddle diddle, the cat and the fiddle!');  // { "3": 5, "6": 1, "7": 2 }
wordSizes("What's up doc?");                              // { "2": 1, "4": 1, "6": 1 }
wordSizes('');                                            // {}

// swap('Oh what a wonderful day it is');  // "hO thaw a londerfuw yad ti si"
// swap('Abcde');                          // "ebcdA"
// swap('a');                              // "a"

// function swap(str){
//    let result = str.split(' ').map(word => {
//         if(word.length===1){
//             return word;
//         }else if(word.length===2){
//             return word[1] +word[0]
//         }else{
//             return word[word.length-1]+word.substring(1, word.length-1)+word[0]
//         }
//         })
//    return result.join(' ')
// }