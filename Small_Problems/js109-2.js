//1
// You are given an array of strings and an integer `k`.
// Your task is to return the first longest string consisting of `k` consecutive strings taken from the array.

// Example: 

// longestConsec(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2)
// "abigailtheta"

// n being the length of the string array, if n = 0 or k > n or k <= 0 return "".

// Test Cases
console.log(longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], 2) === "abigailtheta"); // true
console.log(longestConsec(["ejjjjmmtthh", "zxxuueeg", "aanlljrrrxx", "dqqqaaabbb", "oocccffuucccjjjkkkjyyyeehh"], 1) === "oocccffuucccjjjkkkjyyyeehh"); // true
console.log(longestConsec([], 3) === ""); // true
console.log(longestConsec(["itvayloxrp","wkppqsztdkmvcuwvereiupccauycnjutlv","vweqilsfytihvrzlaodfixoyxvyuyvgpck"], 2) === "wkppqsztdkmvcuwvereiupccauycnjutlvvweqilsfytihvrzlaodfixoyxvyuyvgpck"); // true
console.log(longestConsec(["wlwsasphmxx","owiaxujylentrklctozmymu","wpgozvxxiu"], 2) === "wlwsasphmxxowiaxujylentrklctozmymu"); // true
console.log(longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], -2) === ""); // true
console.log(longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 3) === "ixoyx3452zzzzzzzzzzzz"); // true
console.log(longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 15) === ""); // true
console.log(longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 0) === ""); // true


//1
// You are given an array of strings and an integer `k`.
// Your task is to return the first longest string consisting of `k` consecutive strings taken from the array.

// Example: 

// longestConsec(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2)
// "abigailtheta"

// n being the length of the string array, if n = 0 or k > n or k <= 0 return "".

// takes an arr and a number of repeating strings -> returns a str 

// this is a repeating element of 2 , abigail, theta forms twice in this arr 
// takes a combines the number of elemes together 
// takes the length of the elements together 
// the 1st longest one, return that element 
// track all of the str Combinations from the length of k  
// let strCombinations = []
// let longestStr = ''
//  if k = 0, the length of the arr is equal to = 0 or k > arr.length, return an empty string
// loop over arr 
// while less than k, add to the str
// after the string is built, compare to 

// "zone"+"abigail" = "zoneabigail", "abigailtheta",
// map over combinations , if it is the longest combination, return 

function longestConsec(arr, k){
    let longestStr = ''; 
    let strCombinations = []; 
  
    if( k <= 0 || arr.length === 0 || k>arr.length) return longestStr
  
      for(let i = 0 ; i < arr.length ; i++){
        let compareSlice = i+k 
        let strCombo = arr.slice(i, compareSlice)
        strCombo = strCombo.join('')
        strCombinations.push(strCombo)
      }
  
      strCombinations.map((word )=> {
        if(word.length>longestStr.length){
          longestStr = word 
        }
      })
  
    return longestStr
  
  }
  

   // [ 1, 2, undefined, { '1': 2 }, <2 empty items>, null, '-1': 2 ]
let arr = [ 1, 2, undefined, { '1': 2 }]
arr.length = 6;
arr.push(null);
arr['-1'] = 2;
​
console.log(arr);