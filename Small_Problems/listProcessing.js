// 
// function sum(num){
//     console.log(String(num).split('').reduce((acc, element) => acc + 
//     Number.parseInt(element), 0));
//   }
// // function sum (num) {
// //     let arr = String(num).split('').map(num => parseFloat(num))
// //     arr.map
// //     console.log(arr)
// //     //next.reduce(previousValue, currentValue => previousValue + currentValue, 0)
// // }
// sum(23);           // 5
// sum(496);          // 19
// sum(123456789);    // 45

// //Alphabetic Sort 
// function alphabeticNumberSort(arr){
//     let dict = ['zero', 'one', 'two', 'three', 'four', 'five', 
//     'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 
//     'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']

//      let dictObj = Object.assign({},arr)
     
//      for(let i=0; i<Object.values(dictObj).length; i++){
//         dictObj[i] = dict[i]; 
//      }

//      console.log(dictObj)
//      console.log(Object.keys(dictObj).sort()); 


//     return 

// }

// alphabeticNumberSort(
//     [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]);
//  // [8, 18, 11, 15, 5, 4, 14, 9, 19, 1, 7, 17, 6, 16, 10, 13, 3, 12, 2, 0]

// removeVowels(['abcdefghijklmnopqrstuvwxyz']);         // ["bcdfghjklmnpqrstvwxyz"]
// removeVowels(['green', 'YELLOW', 'black', 'white']);  // ["grn", "YLLW", "blck", "wht"]
// removeVowels(['ABC', 'AEIOU', 'XYZ']);                // ["BC", "", "XYZ"]

// // compare to see if a, e, i, o, u is present 
// //not case sensitive 
// //

// function removeVowels(arr){
// let vowels = 'aeiouAEIOU'; 
// let result = []; 
// arr.filter(word=>{
//     let resultWord = []; 
//     for(let i=0; i<word.length; i++){
//         if(!vowels.includes(word[i])){
            
//             resultWord.push(word[i])
//         }
    
//     }
// result.push(resultWord.join(''))
// })

// return result
// }

// const wordCap = str => str.split(' ').map(word=> word[0].toUpperCase()+word.substring(1)).join(' ')

// wordCap('four score and seven');       // "Four Score And Seven"
// wordCap('the javaScript language');    // "The Javascript Language"
// wordCap('this is a "quoted" word');    // 'This Is A "quoted" Word'

// swapCase('CamelCase');              // "cAMELcASE"
// swapCase('Tonight on XYZ-TV');      // "tONIGHT ON xyz-tv"

// function swapCase(str){
//    return (str.split('').map(word=> word.codePointAt(0)>64 && word.codePointAt(0)<91 ? word.toLowerCase() :word.toUpperCase())).join('')
// }

// staggeredCase('I Love Launch School!');        // "I LoVe lAuNcH ScHoOl!"
// staggeredCase('ALL_CAPS');                     // "AlL_CaPs"
// staggeredCase('ignore 77 the 4444 numbers');   // "IgNoRe 77 ThE 4444 nUmBeRs"

// //take a string, return a string
// // for each word, captilize every other 

// function staggeredCase(str){
//     return 
// }

// console.log(sumOfSums([3, 5, 2]));        // (3) + (3 + 5) + (3 + 5 + 2) --> 21
// console.log(sumOfSums([1, 5, 7, 3]));     // (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) --> 36
// console.log(sumOfSums([4]));              // 4
// console.log(sumOfSums([1, 2, 3, 4, 5]));  // 35

// function sumOfSums(arr){
//     let result = 0;
//     let arrRes = []  
    
//     for(let i=0; i<arr.length; i++){
//         result+=arr[i]
//         arrRes.push(result)
//     }

//     const initial = 0;
//     const sumWithInitial = arrRes.reduce((acc, current) => acc + current,
//             initial
//             );

//     return sumWithInitial
// }


// palindromes('abcd');       // []
// palindromes('madam');      // [ "madam", "ada" ]

// palindromes('hello-madam-did-madam-goodbye');
// // returns
// // [ "ll", "-madam-", "-madam-did-madam-", "madam", "madam-did-madam", "ada",
// //   "adam-did-mada", "dam-did-mad", "am-did-ma", "m-did-m", "-did-", "did",
// //   "-madam-", "madam", "ada", "oo" ]

// palindromes('knitting cassettes');
// // returns
// // [ "nittin", "itti", "tt", "ss", "settes", "ette", "tt" ]

// function isPalindrome(word) {
//     return word.length > 1 && word === word.split("").reverse().join("");
//   }
            
//   function palindromes(string) {
//     return console.log(substrings(string).filter(isPalindrome))
//   }


// Write a function that takes two array arguments, each containing a list of numbers, and returns 
// a new array containing the products of all combinations of number pairs that exist between the two 
// arrays. The returned array should be sorted in ascending numerical order.

// You may assume that neither argument will be an empty array.

// Example:
// multiplyAllPairs([2, 4], [4, 3, 1, 2]);    // [2, 4, 4, 6, 8, 8, 12, 16]

// function multiplyAllPairs(arr1, arr2){
//     let result = [];
    
//     arr1.map(numb=>{
//         for(let i=0; i<arr2.length; i++){
//             result.push(numb*arr2[i])
//         }
//     })
//     return result.sort((a,b)=>a-b)
// }

// leadingSubstrings('abc');      // ["a", "ab", "abc"]
// leadingSubstrings('a');        // ["a"]
// leadingSubstrings('xyzzy');    // ["x", "xy", "xyz", "xyzz", "xyzzy"]

// function leadingSubstrings(str){
//     let result = []; 
//     for(let i=1; i<str.length; i++){
//         result.push(str.substr(0,i))
//     }
//     result.push(str)

//     return result
// }

// substrings('abcde');

// // returns
// [ "a", "ab", "abc", "abcd", "abcde",
//   "b", "bc", "bcd", "bcde",
//   "c", "cd", "cde",
//   "d", "de",
//   "e" ]

// function substrings(str){
//     let result = []; 
//     for(let i=0; i<str.length; i++){
//         for(let j=1; j<(str+1).length; j++){
//             if(str.slice(i,j)) result.push(str.slice(i,j))

//         }
//     }
//     return result
// }

buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]);
// returns ["apple", "apple", "apple", "orange", "banana", "banana"]

function buyFruit(){
    let result = [];
    for(let i=0; i<arguments.length; i++){
        for(let j=0; j<arguments[i].length; j++){
            let tab = arguments[i][j][1]; 
            while(tab){
                result.push(arguments[i][j][0])
                tab--; 
            }
        }
    }
    return result; 
}

let transactions = [ { id: 101, movement: 'in',  quantity:  5 },
                     { id: 105, movement: 'in',  quantity: 10 },
                     { id: 102, movement: 'out', quantity: 17 },
                     { id: 101, movement: 'in',  quantity: 12 },
                     { id: 103, movement: 'out', quantity: 20 },
                     { id: 102, movement: 'out', quantity: 15 },
                     { id: 105, movement: 'in',  quantity: 25 },
                     { id: 101, movement: 'out', quantity: 18 },
                     { id: 102, movement: 'in',  quantity: 22 },
                     { id: 103, movement: 'out', quantity: 15 }, ];

// Write a function that takes two arguments, an inventory item ID and a list of transactions, 
// and returns an array containing only the transactions for the specified inventory item.

// transactionsFor(101, transactions);
// // returns
// // [ { id: 101, movement: "in",  quantity:  5 },
// //   { id: 101, movement: "in",  quantity: 12 },
// //   { id: 101, movement: "out", quantity: 18 }, ]

function transactionsFor(idNum, filterSheet){
    let samefilter = filterSheet.filter(id => id.id ===idNum)
    return samefilter
}

isItemAvailable(101, transactions);     // false
isItemAvailable(103, transactions);     // false
isItemAvailable(105, transactions);     // true

function isItemAvailable(idNum, filterCheck){
    let quantity = 0;

    transactionsFor(idNum, filterCheck).map((obj) => {
      if (obj.movement === "in") quantity += obj.quantity;
      else if (obj.movement === "out") quantity -= obj.quantity;
    })
  
    return console.log(quantity > 0);
}