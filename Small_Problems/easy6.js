// let repeater = (string) => console.log(string.split('').map(char => char + char).join(''));

// repeater('Hello');        // "HHeelllloo"
// repeater('Good job!');    // "GGoooodd  jjoobb!!"
// repeater('');             // ""

// function repeater(str){
//     let result = ''; 
//     if(str.length===0){
//         return str
//     }

//     for(let i=0; i<str.length; i++){
//         result= result.concat('', str[i]+str[i])
//     }
//     return console.log(result); 
// }
// const doubleConsonants = str => {
//     let vowels = 'aeiou'; 
//     let numbers = '0123456789'
//     let punct = ` '"/?!.\|@#$%^&*()[{-_}]`
//     let result = ''
//     str.split('').map(letter=>{
//         if(vowels.includes(letter) ||punct.includes(letter) || numbers.includes(letter)){
//             result+=letter
//         }else{
//             result+=letter+letter
//         }
//     })
//     return console.log(result); 
// }

// doubleConsonants('String');          // "SSttrrinngg"
// doubleConsonants('Hello-World!');    // "HHellllo-WWorrlldd!"
// doubleConsonants('July 4th');        // "JJullyy 4tthh"
// doubleConsonants('');                // ""


// reverseNumber(12345);    // 54321
// reverseNumber(12213);    // 31221
// reverseNumber(456);      // 654
// reverseNumber(12000);    // 21 -- Note that leading zeros in the result get dropped!
// reverseNumber(1);        // 1

// function reverseNumber(num){
//     let result =[]; 
//     String(num).split('').map(num => result.unshift(num))
//     return console.log(Number(result.join('')))
// }

// centerOf('I Love JavaScript'); // "a"
// centerOf('Launch School');     // " "
// centerOf('Launch');            // "un"
// centerOf('Launchschool');      // "hs"
// centerOf('x');                 // "x"

// function centerOf(str){
//     str.length%2===0 ? str.substring(str.length/2-1, str.length/2+1): str[Math.floor(str.length/2)]
    
// }

// console.log(negative(5));     // -5
// console.log(negative(-3));    // -3
// console.log(negative(0));     // -0

// function negative(num){
//     return num<0 ? num : -0-num
// }

// console.log(sequence(5));    // [1, 2, 3, 4, 5]
// console.log(sequence(3));    // [1, 2, 3]
// console.log(sequence(1));    // [1]

// function sequence(num){
//     let result =[]
//     while(num>0){
//         result.unshift(num)
//         num--; 
//     }
//     return result; 
// }

// const swapName = name =>{ 
//     name = name.split(' ')
//     return `${name[1]}, ${name[0]}`
// }
// console.log(swapName('Joe Roberts'));    // "Roberts, Joe"

// console.log(sequence(5, 1));          // [1, 2, 3, 4, 5]
// console.log(sequence(4, -7));         // [-7, -14, -21, -28]
// console.log(sequence(3, 0));          // [0, 0, 0]
// console.log(sequence(0, 1000000));    // []

// function sequence(count, byNum){
//     let result = [];
//     if(count===0) return result

//     let multiple =1; 
//     while(result.length<count){
    
//         result.push(byNum*multiple)
//         multiple++; 

//     }
//     return result; 
// }

// reverseSentence('');                       // ""
// reverseSentence('Hello World');            // "World Hello"
// reverseSentence('Reverse these words');    // "words these Reverse"

// function reverseSentence(str){
//    let words = str.split(' ')
//    let result = []; 
//    words.map(word=>result.unshift(word)); 
//    return result.join(' '); 
// }

// reverseWords('Professional');             // "lanoisseforP"
// reverseWords('Walk around the block');    // "Walk dnuora the kcolb"
// reverseWords('Launch School');            // "hcnuaL loohcS"

// function reverseWords(str){
//     let result = []; 
//     str.split(' ').map(word=>{
//         if(word.length>5){
//             let wordCap =[]
//             for(let i=0; i<word.length; i++){
//                 wordCap.unshift(word[i]); 
//             }
//             result.push(wordCap.join('')); 
//         }else{
//             result.push(word)
//         } 
//     })
//     return result.join(' '); 
// }

// const reverse = arr => {
//     let lengthConst = arr.length; 
//     let result =[]
//     for(let i=0; i<lengthConst; i++){ 
//       let word = arr.shift();  
//       result.unshift(word);  
//     }
//     for(let i=0; i<lengthConst; i++){ 
//       arr.unshift(result[i]);  
//     }
//     return arr; 
// }

// let list = [1, 2, 3, 4];
// let result = reverse(list);
// console.log(result); // logs [4,3,2,1]
// console.log(list === result); // logs true

// let list1 = ["a", "b", "c", "d", "e"];
// let result1 = reverse(list1);
// console.log(result1); // logs  ["e", "d", "c", "b", "a"]
// console.log(list1 === result1); // logs true

// let list2 = ["abc"];
// let result2 = reverse(list2);
// console.log(result2); // logs  ["abc"]
// console.log(list2 === result2); // logs true

// let list3 = [];
// let result3 = reverse(list3);
// console.log(result3); // logs []
// console.log(list3 === result3); // logs true

console.log(isBalanced("What (is) this?") === true);
console.log(isBalanced("What is) this?") === false);
console.log(isBalanced("What (is this?") === false);
console.log(isBalanced("((What) (is this))?") === true);
console.log(isBalanced("((What)) (is this))?") === false);
console.log(isBalanced("Hey!") === true);
console.log(isBalanced(")Hey!(") === false);
console.log(isBalanced("What ((is))) up(") === false);

function isBalanced(str){
  
  // if(!str.includes('(') && !str.includes(')')) return true

  for(let i=0; i<str.length; i++){
    let startWith = false; 
    let firstCharIndex =0; 
    let closeCharIndex =0; 
    for(let i=0; i<str.length; i++){
    if(str[i]==='('){
      startWith=true
      firstCharIndex=i; 
      continue
    }else if(str[i]===')' && startWith){
      closeCharIndex=i; 
      startWith=false
    }else if(!str.substring(i).includes(')')){
      startWith=false
    }else if(str[i]===')' && !startWith){
      startWith=false
    }
  }
  //if the index of ')' is less than the index of '(' return false

  if(closeCharIndex>firstCharIndex && !startWith){
    return false 
  }else{
  if(!startWith) return true 
      else return false
    }
  } 
 
}