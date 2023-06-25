// Write a function that rotates an array by moving the first element to the end 
// of the array. Do not modify the original array.


/*
Understanding the [P]roblem
===========================
Takes an array ->  returns a rotated array 

Rules
====
- Do not modify the original array 
- If the input is not an array, return undefined.
- If the input is an empty array, return an empty array.
- Review the test cases below, then implement the solution accordingly.

[E]xamples/Test Cases
=====================
-- Mental Model --
Transform each test case into the output string, step by step 
[7, 3, 5, 2, 9, 1] => [3, 5, 2, 9, 1,] + 7 => [3, 5, 2, 9, 1, 7]
['a', 'b', 'c']=> 'b', 'c' + "a" => ["b", "c", "a"]
['a'] => ["a"]
[1, 'a', 3, 'c'] => ["a", 3, "c", 1]
[{ a: 2 }, [1, 2], 3] => [[1, 2], 3, { a: 2 }]
[] => []

[D]ata Structure
================
- Do we need an array or an object to hold our data for our solution?
- a deep copy of the orginal array 

[A]lgorithm
===========
What is the sticky bit of this problem? - deep copy 
- Initalize deepCopy of the arr 
- Unshift first el
- Push to deepCopy 
- Return deepCopy 

*/ 

function rotateArray(arr){
    if(!Array.isArray(arr)) return undefined
    if(arr.length ===0 ) return []
    let deepCopy = [...arr]

    let firstEl = deepCopy.shift()
    deepCopy.push(firstEl)

    return deepCopy;
}


console.log(rotateArray([7, 3, 5, 2, 9, 1]));       // [3, 5, 2, 9, 1, 7]
console.log(rotateArray(['a', 'b', 'c']));          // ["b", "c", "a"]
console.log(rotateArray(['a']));                    // ["a"]
console.log(rotateArray([1, 'a', 3, 'c']));         // ["a", 3, "c", 1]
console.log(rotateArray([{ a: 2 }, [1, 2], 3]));    // [[1, 2], 3, { a: 2 }]
console.log(rotateArray([]));                       // []

// return `undefined` if the argument is not an array
console.log(rotateArray());                         // undefined
console.log(rotateArray(1));                        // undefined


// the input array is not mutated
let array = [1, 2, 3, 4];
console.log(rotateArray(array));                    // [2, 3, 4, 1]
console.log(array);                                 // [1, 2, 3, 4]


// Write a function that rotates the last count digits of a number. 
// To perform the rotation, move the first of the digits that you want to 
// rotate to the end and shift the remaining digits to the left.

/*
Understanding the [P]roblem
===========================
Takes a number and the count digits ->  returns number with counts digit 
rotated to the right 

Rules
====
- works on large numbers 

[E]xamples/Test Cases
=====================
735291, 1 => 1 =>at the rightmost position =>  735291
735291, 2 => 9 => pushes 9 to the end of the num => 735219
735291, 3 => 2 => pushed 2 to the rightmost position=> 735912
735291, 4 =>5 => Push => 732915
735291, 5 => 3=> Push => 752913
735291, 6 => 7 => Push => 352917

length - n where n is the counts number 
-- Mental Model --
Transform each test case into the output string, step by step 
num => arr => hold counts digit => push to the end of arr => return solution 
[D]ata Structure
================
- Do we need an array or an object to hold our data for our solution?
- What will our  solution’s data structures look like? 
Arr 

[A]lgorithm
===========
What is the sticky bit of this problem? Making sure returned num is a num 
- Initalize numArr by spliting the number to digits 
- Remove numArr.length - n where n is the counts digit 
- push to the end of numArr
Return joined numArr in number type 

*/ 

function rotateRightmostDigits(num, n) {
  let numArr =  String(num).split('')
  let count = numArr.splice(numArr.length-n,1)
  numArr.push(count)
  return Number(numArr.join(''))
}

console.log(rotateRightmostDigits(735291, 1));      // 735291
console.log(rotateRightmostDigits(735291, 2));      // 735219
console.log(rotateRightmostDigits(735291, 3));      // 735912
console.log(rotateRightmostDigits(735291, 4));      // 732915
console.log(rotateRightmostDigits(735291, 5));      // 752913
console.log(rotateRightmostDigits(735291, 6));      // 352917

// Take the number 735291 and rotate it by one digit to the left, getting 352917. 
// Next, keep the first digit fixed in place and rotate the remaining digits to get 
// 329175. Keep the first two digits fixed in place and rotate again to get 321759. 
// Keep the first three digits fixed in place and rotate again to get 321597. 
// Finally, keep the first four digits fixed in place and rotate the final two 
// digits to get 321579. The resulting number is called the maximum rotation of the 
// original number.

// 735291 => 3 52917 => 3 29175 => 321759 => 321597 => 321579

// Write a function that takes an integer as an argument and returns the maximum 
// rotation of that integer. You can (and probably should) use the 
// rotateRightmostDigits function from the previous exercise.

/*
Understanding the [P]roblem
===========================
Takes numb ->  returns max rotated num 

Rules
====

735291 => 352917 => 329175 => 321759 => 321597 => 321579

[E]xamples/Test Cases
=====================


-- Mental Model --
Transform each test case into the output string, step by step 

[D]ata Structure
================
- Do we need an array or an object to hold our data for our solution?
- What will our  solution’s data structures look like? 


[A]lgorithm
===========
What is the sticky bit of this problem?

*/ 

function maxRotation(number) {
    let numberDigits = String(number).length;
    for (let count = numberDigits; count >= 2; count--) {
      number = rotateRightmostDigits(number, count);
    }
    return number;
  }

console.log(maxRotation(735291));          // 321579
console.log(maxRotation(3));               // 3
console.log(maxRotation(35));              // 53
console.log(maxRotation(105));             // 15 -- the leading zero gets dropped
console.log(maxRotation(8703529146));      // 7321609845