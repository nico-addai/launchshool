/*
B:O   X:K   D:Q   C:P   N:A
G:T   R:E   F:S   J:W   H:U
V:I   L:Y   Z:M

This limits the words you can spell with the blocks to only those words that 
do not use both letters from any given block. You can also only use each block 
once.

Write a function that takes a word string as an argument and returns true if 
the word can be spelled using the set of blocks, false otherwise. You can 
consider the letters to be case-insensitive when you apply the rules.
*/

const isBlockWord = str => {
  str = str.toUpperCase()
  let usedLetters = []; 
  let keyBank = {B:"O", X:"K", D:"Q",  C:"P", N:"A",
    G:"T", R:"E",  F:"S", J:"W",  H:"U",
    V:"I", L:"Y", Z:"M"}

    let flat = Object.entries(keyBank) 
   
 for(let letter in str){
    if(!usedLetters.includes(str[letter])){
        if(flat.flat().includes(str[letter])) {
            console.log(flat.flat().indexOf(str[letter]))
        }       
   
    } else {
      return false;
    }
   
 } 
 console.log(usedLetters)
 return true; 
}


// console.log(isBlockWord('BATCH'));      // true
console.log(isBlockWord('BUTCH'));      // false
// console.log(isBlockWord('jest'));       // true

/*
Understanding the [P]roblem
===========================
Takes a string ->  returns a boolean value  

Rules
====
B:O   X:K   D:Q   C:P   N:A
G:T   R:E   F:S   J:W   H:U
V:I   L:Y   Z:M
- Can only use one letter in a key:value pair
- If it can be done, return true else return false 
- not case sensitive 

[E]xamples/Test Cases
=====================
-- Mental Model --
Transform each test case into the output string, step by step 
'BATCH' => B:O +  N:A +  G:T + C:P + H:U -> // true
'BUTCH' => B:O + H:U + G:T + C:P +XX  // false
'jest' => J:W + R:E + F:S + G:T -> // true

[D]ata Structure
================
- Do we need an array or an object to hold our data for our solution?
- an arr - if it is present maybe push into compare current letter 


[A]lgorithm
===========
What is the sticky bit of this problem?
- checking to make sure both key and property are either deleted from 
available keys or in the data arr we compare to 

- Initalize a usedLetters arr []
- Captialzie word 
- Initalize key bank 
- loop over word 
    - check if is in usedLetters 
        -if not check keyBank 
            - add keyBank property and value to usedLetters

        -else
            return false 
   - return true 

*/ 