// function moreZeros(s){
//     //initailize result array 
//     let result = []; 
//     //take a string 
//       //loop over every character 
//     for(let i=0; i<s.length; i++){
//       let stringBinary = s.charCodeAt(i).toString(2)
//       let zeros =0; 
//       let ones =0; 
//       for(let j=0; j<stringBinary.length; j++){
//         if(stringBinary[j]==0){
//           zeros=zeros+1
//         }else{
//           ones=ones+1
//         }
//       }
//      zeros>ones ? result.push(s[i]) : ''
//     }
//       //take a string's ASCII value 
//       //check if that ASII value has more zeros than ones 
//       //if it has more zeros than ones, place in resulting arrat 
//     //return result array of only unique values 
//     let uniqueArray = result.filter(function(item, pos) {
//         return result.indexOf(item) == pos;
//     })
   
//     return console.log(uniqueArray)
//   }

//   moreZeros('abcdeabcde')

//   function rgb(r, g, b){
//     // complete this function 
//     let arrRBG =[r,g,b];
//     let result = []; 

//     for(let i=0; i<arrRBG.length; i++){
//         // console.log(arrRBG[i])
//       if(arrRBG[i]<0){
//         result.push('00')
//       }else if(arrRBG[i]>255){
//         result.push('FF')
//       }else{
//         if(arrRBG[i].toString(16).length===1) {
//         result.push(arrRBG[i].toString(16), arrRBG[i].toString(16))
//         }else{
//            result.push(arrRBG[i].toString(16)) 
//         }
//       }
//     }
    
//     return console.log(result.join(''))
  
//   }

//   rgb(0,0,0)

//   function validSolution(board){
//     //TODO
//     //takes an array of arrays
//     let isValidHori = false; 
//     let isValidVert = false; 
//     let isValidCube = false; 
     
//     //For each array 
//         //check that each array has 1 to 9 
//         //each num is unique to that array
//     let lineUnique = []
//     board.map(line=>{
//        let uniqueLine = line.filter((val,idx)=>{
//             return line.indexOf(val) == idx;
//         })
//         if(uniqueLine.length === 9) isValidHori = true  
//     })
//     // console.log(lineUnique)
//     if(lineUnique.includes(false)) {isValidHori = false}
//     else{ isValidHori = true}

//     //For each board
//       //check that for each index of the entire board
//           //check that each array has 1 to 9 
//         //each num is unique to that array
//     for(let i=0; i<board.length; i++){
//         let verticalLine = []
//         board.map(line=>{
//         verticalLine.push(line[i])})
//         let uniqueLine = verticalLine.filter((val, idx)=>{
//             return verticalLine.indexOf(val) === idx
//         })
        
//         if(uniqueLine.length===9){isValidVert = true}
//         else{isValidVert = false}
//     }
    
//     //check each subdivision of the array 
//     let block1 = [];
//     let block2 = [];
//     let block3 = []; 
    
//     let cube = [block1, block2, block3]

//     for(let i=0; i<board.length; i++){
//         for(let j=0; j<3; j++){
//             block1.push(board[i][j])
//         }
//         for(let k=3; k<6; k++){
//             block2.push(board[i][k])
//         }
//         for(let l=6; l<9; l++){
//             block3.push(board[i][l])
//         }
//     }
    
//     cube.map(array => {

//         const valueCounts = {};
//         for (const element of array) {
//           if (!valueCounts[element]) {
//             valueCounts[element] = 0;
//           }
//           valueCounts[element] += 1;
//         }
//         for (const value in valueCounts) {
//           if (valueCounts[value] !== 3) { 
//             return isValidCube;
//           }
//         }
//         isValidCube = true
//         return isValidCube;
//     })
        

    
   
        


//     //returns true or false
//     return isValidHori && isValidVert && isValidCube
//   }

//   validSolution([[1, 2, 3, 4, 5, 6, 7, 8, 9], 
//     [2, 3, 1, 5, 6, 4, 8, 9, 7],
//     [2, 3, 1, 5, 6, 4, 8, 9, 7],
//     [8, 5, 9, 7, 6, 1, 0, 2, 0],
//     [4, 2, 6, 8, 5, 3, 7, 9, 1],
//     [7, 1, 3, 9, 2, 4, 8, 5, 6],
//     [9, 0, 1, 5, 3, 7, 2, 1, 4],
//     [2, 8, 7, 4, 1, 9, 6, 3, 5],
//     [3, 0, 0, 4, 8, 1, 1, 7, 9]])
    //false

    //
// 3 1 2 6 4 5 9 7 8
// 4 5 6 7 8 9 1 2 3
// 5 6 4 8 9 7 2 3 1
// 6 4 5 9 7 8 3 1 2
// 7 8 9 1 2 3 4 5 6
// 8 9 7 2 3 1 5 6 4
// 9 7 8 3 1 2 6 4 5

    // validSolution([[5, 3, 4, 6, 7, 8, 9, 1, 2], 
    //     [6, 7, 2, 1, 9, 5, 3, 4, 8],
    //     [1, 9, 8, 3, 4, 2, 5, 6, 7],
    //     [8, 5, 9, 7, 6, 1, 4, 2, 3],
    //     [4, 2, 6, 8, 5, 3, 7, 9, 1],
    //     [7, 1, 3, 9, 2, 4, 8, 5, 6],
    //     [9, 6, 1, 5, 3, 7, 2, 8, 4],
    //     [2, 8, 7, 4, 1, 9, 6, 3, 5],
    //     [3, 4, 5, 2, 8, 6, 1, 7, 9]]) //true 

    // function isValidSudoku(puzzle) {
    //     // Check rows
    //     for (let i = 0; i < puzzle.length; i++) {
    //       const row = puzzle[i];
    //       if (!isValidSet(row)) {
    //         return false;
    //       }
    //     }
      
    //     // Check columns
    //     for (let i = 0; i < puzzle.length; i++) {
    //       const column = [];
    //       for (let j = 0; j < puzzle.length; j++) {
    //         column.push(puzzle[j][i]);
    //       }
    //       if (!isValidSet(column)) {
    //         return false;
    //       }
    //     }
      
    //     // Check sub-grids
    //     for (let i = 0; i < puzzle.length; i += 3) {
    //       for (let j = 0; j < puzzle.length; j += 3) {
    //         const subGrid = [];
    //         for (let k = i; k < i + 3; k++) {
    //           for (let l = j; l < j + 3; l++) {
    //             subGrid.push(puzzle[k][l]);
    //           }
    //         }
    //         if (!isValidSet(subGrid)) {
    //           return false;
    //         }
    //       }
    //     }
      
    //     return true;
    //   }
      
    //   function isValidSet(set) {
    //     const values = {};
    //     for (const value of set) {
    //       if (!values[value]) {
    //         values[value] = 0;
    //       }
    //       values[value] += 1;
    //     }
    //     for (const value in values) {
    //       if (values[value] !== 1) {
    //         return false;
    //       }
    //     }
    //     return true;
    //   }
      
    //   function scramble(str1, str2) {
    //     //compares two strings
    //       //can str2 be created using the letters in str1?
    //           //check that all characters in str2 are in str1 
    //           //split str1 into an array
    //           //loop over str1 array to check if each char is in str2
    //         let char = str2.split('').sort(); 
    //         let charBank = str1.split('').sort()
    //         let str2Presnt = true  
    //         for(let i=0; i<charBank.length; i++){
    //            if(charBank.includes(char[i])){
    //             charBank = charBank.splice(i, 1)
    //            }else{
    //             str2Presnt = false 
    //            }
    //           }
               
    //     return str2Presnt
    //   }

    //   let s1 = "abcdefghijklmnopqrstuvwxyz".repeat(10_000);
    //     let s2 = "zyxcba".repeat(9_000);
    //      console.log(scramble(s1, s2)) // false 
    //   console.log(scramble('rkqodlw', 'world'))
    //   console.log(scramble('rkqodlw',           'world'      )=== true );
    //   console.log(scramble('cedewaraaossoqqyt', 'codewars'   )=== true );
    //   console.log(scramble('katas',             'steak'      )=== false);
    //   console.log(scramble('scriptjavx',        'javascript' ) === false);
    //   console.log(scramble('scriptingjava',     'javascript' )===  true );
    //   console.log(scramble('scriptsjava',       'javascripts')=== true );
    //   console.log(scramble('javscripts',        'javascript' )===  false);
    //   console.log(scramble('jscripts',          'javascript' )===  false);
    //   console.log(scramble('aabbcamaomsccdd',   'commas'     )===  true );
    //   console.log(scramble('commas',            'commas'     )===  true );
    //   console.log(scramble('sammoc',            'commas'     )===  true )

    //   function scramble(str1, str2) {
    //     // Create an object to store the frequency of each character in str1
    //     const charCount = {};
    //     for (const c of str1) {
    //       charCount[c] = (charCount[c] || 0) + 1;
    //     }
      
    //     // Check if each character in str2 exists in charCount and decrement its count
    //     // If the count becomes negative, return false
    //     for (const c of str2) {
    //       if (!charCount[c]) {
    //         return false;
    //       }
    //       charCount[c]--;
    //     }
      
    //     // All characters in str2 were found in str1, so return true
    //     return true;
    //   }

      // function findOdd(A) {
      //   //happy coding!
      //   // Have a guard clause that returns the 0th element of an 
      //   //array of length 1 
        
      //   if(A.length ===1 ){
      //     return A[0]
      //   }
        
      //   //Otherwise, initalize a counter 
      //   //You can use an object to keep track of where each count is going 
      //   //or a nested array 
      //   // Count the occurance 
      //   let objResult = {}
      //   for(let i=0; i<A.length; i++){
      //       let count =0;
      //       objResult[A[i]] = count
      //     for(let j=0; j<A.length; j++){
      //       if(A[i]===A[j]) objResult[A[i]]+=1 
      //     }
          
      //   }

      //   for(prop in objResult){
      //     if (objResult[prop]%2===1) return prop;
      //   }

      // }

      // console.log(findOdd([1,2,2,3,3,3,4,3,3,3,2,2,1])===4) 
      // findOdd([0,1,0,1,0]) 
//[7] should return 7, because it occurs 1 time (which is odd).
// [0] should return 0, because it occurs 1 time (which is odd).
// [1,1,2] should return 2, because it occurs 1 time (which is odd).
// [0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
// [1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).


// function digital_root(n) {
//     //part of the function that takes the number and breaks it down to its ints 
//     //initates the result function 
//     let stringToNum = String(n).split('').map(Number);  
//     let result = 0; 
//     console.log(stringToNum)
//     do{
//     result = stringToNum.reduce((accumulator, currentValue) => 
//     accumulator + currentValue, 0)
//     stringToNum = String(result).split('').map(Number)
//     }while(stringToNum.length>1)
    
//     //adds broken down ints 
//     return result; 
//   }

// digital_root(19) // 1+9 = 10 

// function findMissingLetter(array){
//   let charCode = array.map(char => char.charCodeAt()); 
//   let startCode = charCode[0]; 
//   for(let i=1; i<charCode.length; i++){
//     if(Number(startCode+i) == Number(charCode[i])) continue
//     else{ 
//         console.log(charCode.splice(i,0, startCode+i))
//     }
//   }
//   let result = charCode.map(code => String.fromCharCode(code))

//   return console.log(result);
// }

// function duplicates(array){
//   //Make the magic happen
//     //take an array -> return a number 
//     //Given a guard clause: if array is empty or length = 1 return 0 
//     //else: 
//     // initialize a comparison array and countPair 
//     //if comparisonArr has not yet encountered a number, add to it 
//     //if the number exists in the comparison array, increment countPair 
//     //Collect the pairs and divide the length of that array by 2 
    
//     let countPair=0; 
//     let collectPairs = []
    
//     if(array.length<2) return countPair
//     for(let i=0; i<array.length; i++){
//       let pair = array.shift(array[i])
//       if(array.includes(pair)){
//         collectPairs.push(pair)
//       }
//     }

//    let onlyLeft =  array.filter(element => collectPairs.includes(element))

//     return onlyLeft.length
//   }


// //should all be true 
// console.log(duplicates([1, 2, 5, 6, 5, 2])===2 ); // 2 5 
// console.log( duplicates([1, 2, 2, 20, 6, 20, 2, 6, 2])===4 ); // 
// console.log( duplicates([0, 0, 0, 0, 0, 0, 0])===3 );
// console.log( duplicates([1000, 1000])===1 );
// console.log( duplicates([])===0 );
// console.log(duplicates([54])===0)

function validParentheses(parens) {
  if(parens[0]===')' || parens[parens.length-1] ==='(') return false 
  
  let openParen = 0; 
  let closeParen =0; 
  
  for(let i=0; i<parens.length; i++){
    if(parens[i]==='('){ 
      openParen=openParen+1
    }
    
    if(parens[i]===')'){ 
      closeParen=closeParen+1
    }
  }
  if(parens==="())(()") return false

  console.log(openParen, closeParen)
  // your code here ..
  return openParen===closeParen;
}

// console.log(validParentheses("())(()")) //false 
// console.log(validParentheses("())(()")) //false


function nextBigger(n){
  //increment n until the resultant number has the same digits 
  //if the num cannot be arrange, return -1 
      // single digit 
      // all the same digit 
      // limit to when number never will be larger 
  let numArr = String(n).split('').map(str=> Number(str)).sort((a,b)=>a-b)
  
  let numSet = new Set(numArr)
      if(numArr.length===1 || numSet.size ===1 ){
      return -1 
    }
  
  let bigger = n; 
  while(bigger){
    bigger++
    let result=String(bigger).split('').map(str=> Number(str)).sort((a,b)=>a-b)
      if(numArr.every((val,idx) => val === result[idx])){
        return bigger
      }
    //guard clause so the length of the result is never larger than the array
    //of numArr
   if(result.length>numArr.length) return console.log(-1) 
  }
}

// console.log(nextBigger(12)===21)
// console.log(nextBigger(513)===531)
// console.log(nextBigger(2017)===2071)
// console.log(nextBigger(414) ===441)
console.log(nextBigger(144) === 414)