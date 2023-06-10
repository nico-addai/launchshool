// const { compose } = require("redux");

// const matrix = [
//     [1, 5, 8],
//     [4, 7, 2],
//     [3, 9, 6]
//   ];
// // [[1, 4, 3], 
// // [5, 7, 9], 
// // [8, 2, 6]]
  
// //   let newMatrix = transpose(matrix);
  
// //   console.log(newMatrix);      // [[1, 4, 3], [5, 7, 9], [8, 2, 6]]
// //   console.log(matrix);         // [[1, 5, 8], [4, 7, 2], [3, 9, 6]]

//   function transpose(matrix){
//     // dealing with a MxN matrix 
//     let lengthN = matrix[0]
//     lengthN = lengthN.length
//     let compose = []; 
    
//     while(lengthN>0){
//         compose.push([])
//         lengthN--
//     }
    
//     for(let j=0; j<compose.length; j++){
//         for(let i=0; i<matrix.length; i++){
//             compose[j].push(matrix[i][j])
//         }
//     }

//     return compose
//   }

// transpose([[1, 2, 3, 4]]);            // [[1], [2], [3], [4]]
// transpose([[1], [2], [3], [4]]);      // [[1, 2, 3, 4]]
// transpose([[1]]);                     // [[1]]
// transpose([[1, 2, 3, 4, 5], [4, 3, 2, 1, 0], [3, 7, 8, 6, 2]]);
// // [[1, 4, 3], [2, 3, 7], [3, 2, 8], [4, 1, 6], [5, 0, 2]]

// let matrix1 = [
//   [1, 5, 8],
//   [4, 7, 2],
//   [3, 9, 6],
// ];

// let matrix2 = [
//   [3, 7, 4, 2],
//   [5, 1, 0, 8],
// ];

// let newMatrix1 = rotate90(matrix1);
// let newMatrix2 = rotate90(matrix2);
// let newMatrix3 = rotate90(rotate90(rotate90(rotate90(matrix2))));

// console.log(newMatrix1);      // [[3, 4, 1], [9, 7, 5], [6, 2, 8]]
// console.log(newMatrix2);      // [[5, 3], [1, 7], [0, 4], [8, 2]]
// console.log(newMatrix3);      // `matrix2` --> [[3, 7, 4, 2], [5, 1, 0, 8]]

// function rotate90(mat){

//   return mat
// }
/*

Write a function that takes two sorted arrays as arguments and returns a new array that contains all the 
elements from both input arrays in sorted order.

You may not provide any solution that requires you to sort the result array. You must build the result 
array one element at a time in the proper order.

Your solution should not mutate the input arrays.

*/


// merge two arr
// takes 2 arr => 1 arr 
// initialize a result arr 
  // let result = []
// compare sizes as you go along 
// use map to have access to whole arr at once 
// if a > b , push a 
// else slice a before b 
// if either arr1 or arr2 is empty, return non-empty arr 

function merge(arr1, arr2){
  let result = []

  let startArr = arr1.length > arr2.length ? [...arr1] : [...arr2]; 
  let comparArr = arr1.length > arr2.length ? [...arr2] : [...arr1]; 
  if(comparArr.length){
    comparArr.map((ele, idx, arr)=>{
    if(ele > startArr[idx] && ele < arr[idx+1]){
      result.splice(idx, 0, ele)
    }else if(ele === arr[idx+1]|| ele ===startArr[idx]){
      result.push(ele, startArr[idx])
    }
    
  })
  } else{
    return console.log(startArr); 
  }
  

  return console.log(result)
}




merge([1, 5, 9], [2, 6, 8]);      // [1, 2, 5, 6, 8, 9]
merge([1, 1, 3], [2, 2]);         // [1, 1, 2, 2, 3]
merge([], [1, 4, 5]);             // [1, 4, 5]
merge([1, 4, 5], []);             // [1, 4, 5]