// rotateArray([7, 3, 5, 2, 9, 1]);       // [3, 5, 2, 9, 1, 7]
// rotateArray(['a', 'b', 'c']);          // ["b", "c", "a"]
// rotateArray(['a']);                    // ["a"]
// rotateArray([1, 'a', 3, 'c']);         // ["a", 3, "c", 1]
// rotateArray([{ a: 2 }, [1, 2], 3]);    // [[1, 2], 3, { a: 2 }]
// rotateArray([]);                       // []

// // return `undefined` if the argument is not an array
// rotateArray();                         // undefined
// rotateArray(1);                        // undefined


// // the input array is not mutated
// let array = [1, 2, 3, 4];
// rotateArray(array);                    // [2, 3, 4, 1]
// array;                                 // [1, 2, 3, 4]

// function rotateArray(arr){
//     //Guard clause to check that input is always an array 
//     if(!Array.isArray(arr)){
//         return console.log(undefined); 
//     } 

//     if(arr.length ==0 ){
//         return console.log([]); 
//     }else{
//         let result =[]; 
//         for(let i=1; i<arr.length;i++){
//             result.push(arr[i]); 
//         }
//         result.push(arr[0]); 
//         return console.log(result); 
//     }
    
// }


// letterPercentages('abCdef 123');
// // { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

// letterPercentages('AbCd +Ef');
// // { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

// letterPercentages('123');
// // { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }

// function letterPercentages (str){
//     let lowerCount=0; 
//     let upperCount=0; 
//     let neitherCount=0; 

//     for(let i=0; i<str.length; i++){
//         //Tests if it is a number 
//         if(Number.isInteger(Number(str[i]))){
//             neitherCount++; 
//         }else if(str[i].toLowerCase() !== str[i].toUpperCase()){
//             lowerCount++; 
//         }else{
//            neitherCount++; 
//         }
//     }

//     return console.log(` lowercase: "${lowerCount/str.length*100}" uppercase: "${upperCount/str.length*100}" neither: "${neitherCount/str.length*100}"`)
// }

// crunch('ddaaiillyy ddoouubbllee');    // "daily double"
// crunch('4444abcabccba');              // "4abcabcba"
// crunch('ggggggggggggggg');            // "g"
// crunch('a');                          // "a"
// crunch('');                           // ""

// function crunch (str){
//    let result = '';  
//    if(str.length<2){
//     return console.log(str); 
//    }
//    for(let i=0; i<str.length; i++){   
//         if(str[i]===' '){
//             result+=' '
//             continue
//         }  
//         if(str[i]===str[i+1]){
//             result += str.slice(i,i+1)
//         }
//     }
//     return console.log(result) 
// }

wordToDigit('Please call me at five five five one two three four. Thanks.');
// "Please call me at 5 5 5 1 2 3 4. Thanks."

function wordToDigit(str){
    //Check string if it is a number
    //if it is a number, return with corressponding numerical digit 
    //return new string 

    let words= str.split(' ');
    let numWords = {
        'zero':0, 
        'one': 1, 
        'two':2, 
        'three':3, 
        'four':4, 
        'five':5, 
        'six':6, 
        'seven':7, 
        'eight':8, 
        'nine':9
    }
    let result = []; 
   // console.log(words.filter(word => word =! words.includes(numWords(keys))))
    for(let i=0; i<words.length; i++){
        result.push(words[i]); 
        
        if(numWords.hasOwnProperty(words[i])){
         
           result.push(numWords[words[i]]) 
        }
    }
    
    return result.join(' '); 
}



// console.log(fibonacci(20))
// fibonacci(1);       // 1
// fibonacci(2);       // 1
// fibonacci(3);       // 2
// fibonacci(4);       // 3
// fibonacci(5);       // 5
// fibonacci(12);      // 144
// ;      // 6765

// function fibonacci(num){
//     let fib = 0; 
//     if(num ===1 || num ===2 ){
//         fib = 1
//     }
// let result = fib
//  return result; 
// }

// n : Place a value, n, in the register. Do not modify the stack.
// PUSH : Push the register value onto the stack. Leave the value in the register.
// ADD : Pop a value from the stack and add it to the register value, storing the result in the register.
// SUB : Pop a value from the stack and subtract it from the register value, storing the result in the register.
// MULT : Pop a value from the stack and multiply it by the register value, storing the result in the register.
// DIV : Pop a value from the stack and divide the register value by the popped stack value, storing the integer result back in the register.
// REMAINDER : Pop a value from the stack and divide the register value by the popped stack value, storing the integer remainder of the division back in the register.
// POP : Remove the topmost item from the stack and place it in the register.
// PRINT : Print the register value.

// function minilang(n){
//     let stack = []; 
//     let register = n[0]; 
//     let numbersArray = [0,1,2,3,4,5,6,7,8,9]
//     let result = 0; 

//     if(n.includes('PRINT')){
//         return result; 
//     }
    
// }
// console.log(minilang('PRINT'));
// // 0

// minilang('5 PUSH 3 MULT PRINT');
// // 15

// minilang('5 PRINT PUSH 3 PRINT ADD PRINT');
// // 5
// // 3
// // 8

// minilang('5 PUSH POP PRINT');
// // 5

// minilang('3 PUSH 4 PUSH 5 PUSH PRINT ADD PRINT POP PRINT ADD PRINT');
// // 5
// // 10
// // 4
// // 7

// minilang('3 PUSH PUSH 7 DIV MULT PRINT');
// // 6

// minilang('4 PUSH PUSH 7 REMAINDER MULT PRINT');
// // 12

// minilang('-3 PUSH 5 SUB PRINT');
// // 8

// console.log(minilang('6 PUSH'));
// (nothing is printed because the `program` argument has no `PRINT` commands)


// const codePretty = () => {
//     for (let padding = 1; padding <= 10; padding++) {
//         console.log(" ".repeat(padding) + "The Flinstones Rock!");
//       }
// }
// codePretty()

// rotateRightmostDigits(735291, 1);      // 735291
// rotateRightmostDigits(735291, 2);      // 735219
// rotateRightmostDigits(735291, 3);      // 735912
// rotateRightmostDigits(735291, 4);      // 732915
// rotateRightmostDigits(735291, 5);      // 752913
// rotateRightmostDigits(735291, 6);      // 352917

// function rotateRightmostDigits(numb, rotate){
//   if(rotate===1) return numb; 
//   let strNumb = String(numb); 
//   let sliceInterest = strNumb.slice([strNumb.length-rotate],[strNumb.length-rotate+1])
//   let strArr = String(numb).split('')
//   months.splice(4, 1, 'May');
//   strArr.push(sliceInterest)
//   console.log(strArr)


// }

// console.log(triangle(3, 3, 3));        // "equilateral"
// console.log(triangle(3, 3, 1.5));      // "isosceles"
// console.log(triangle(3, 4, 5));        // "scalene"
// console.log(triangle(0, 3, 3));        // "invalid"
// console.log(triangle(3, 1, 1));        // "invalid"

// function triangle(t1, t2, t3){
//     let arr = [t1, t2, t3]; 
//     arr.sort(); 
//    //the sum of the lengths of the two shortest sides must be greater 
//    //than the length of the longest side,
//     if( arr[0]+arr[1]<=arr[2] || t1===0 || t2===0 || t3===0  ){
//         return 'invalid'
//     }else if(t1===t2 && t2===t3){
//         return 'equilateral'
//     }else if((t1===t2 || t2===t3)){
//         return 'isosceles'
//     }else{
//         return 'scalene'
//     }
// }

// console.log(triangle(60, 70, 50));       // "acute"
// console.log(triangle(30, 90, 60));       // "right"
// console.log(triangle(120, 50, 10));      // "obtuse"
// console.log(triangle(0, 90, 90));        // "invalid"
// console.log(triangle(50, 50, 50));       // "invalid"

// To be a valid triangle, the sum of the angles must be exactly 180 degrees, and 
// every angle must be greater than 0. If either of these conditions is not satisfied, 
// the triangle is invalid.

// function triangle(t1, t2, t3){
//     let arr = [t1, t2, t3]
//     arr.sort();
//     // console.log(arr)
//     if(!(t1+t2+t3===180)){
//         return 'invalid'
//     }
//     if((t1===0) || (t2===0) || (t3===0) ){
//         return 'invalid'
//     }
// //Valid triangles 
//         if(arr.includes(90)){
//             return 'right'
//         }else if(arr[0]>90 || arr[1]>90 || arr[2]>90){
//             return 'obtuse'
//         }else{
//             return 'acute'
//         }

// }

fridayThe13ths(1986);      // 1
fridayThe13ths(2015);      // 3
fridayThe13ths(2017);      // 2

function fridayThe13ths(year){
    
}