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
//     if(arr.length<=1){
//         return arr[0]
//     }
//     result = 0; 
//     arr.map((num,idx,arr) =>{
//         result += num
//         arr[idx-1] ? result+=arr.reduce([idx-1]) : result; 
//     });
//     return result
// }


palindromes('abcd');       // []
palindromes('madam');      // [ "madam", "ada" ]

palindromes('hello-madam-did-madam-goodbye');
// returns
// [ "ll", "-madam-", "-madam-did-madam-", "madam", "madam-did-madam", "ada",
//   "adam-did-mada", "dam-did-mad", "am-did-ma", "m-did-m", "-did-", "did",
//   "-madam-", "madam", "ada", "oo" ]

palindromes('knitting cassettes');
// returns
// [ "nittin", "itti", "tt", "ss", "settes", "ette", "tt" ]

function palindromes(str){

    
}