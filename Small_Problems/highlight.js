// Initialize an empty array called substrings to hold all possible substrings.
// Loop over each character in the input string:
// Starting at the current character, concatenate it with subsequent characters to form substrings.
// For each new substring, add it to the substrings array.
// Return the substrings array containing all possible substrings.

// "abcde" =>  5 

const substrings = str =>{
    let substrings = []; 
    for(let char = 0; char < str.length; char++ ){
        substrings.push(str.slice(char))
    }
    return substrings; 
}

console.log(substrings("abde"))
console.log(substrings("ababab"))


snail = function(array) {
    // enjoy
  //   Initialize a result array called snail.
  // Check if the length of the n x n array is greater than 0.
  // If it's equal to 0, return an empty array [[]].
  // Push elements of the first provided array into the snail array.
  // Loop over subsequent arrays:
  // Starting on the second provided array, push the last element into the snail array.
  // Continue adding the last element in the current array until it reaches the last array within 
    //the input.
  // Add all elements from right to left to the snail array.
  // Add the first element in each array to the snail array until it reaches the second-to-last array
    // and add to the second-to-last element.
  // Repeat until all the snail array elements are equal to the number of nested elements in 
    // the input array.
  // Flatten the snail array and return it.
    
    let snail = []; 
    let len = array.length
    if ( array.length === 0 ) return [[]]
    
    array[0].forEach(num=>snail.push(num))
    array.shift()
    
      for (let i = 0 ; i < len; i++) {
        if (i < len-1 && array[i] ) {
          snail.push(array[i].pop())
        } else {
          snail.push(array.pop().reverse())
        }
      }
      
      for( let i=len-2; i > 0 ; i--){
        if ( i > 0 && array[i] ){
            snail.push(array[i].pop())
        } else {
          snail.push(array.pop().reverse())
        }
      }
    console.log(array)
    
    return snail.flat(); 
  }