const { compose } = require("redux");

const matrix = [
    [1, 5, 8],
    [4, 7, 2],
    [3, 9, 6]
  ];
// [[1, 4, 3], 
// [5, 7, 9], 
// [8, 2, 6]]
  
//   let newMatrix = transpose(matrix);
  
//   console.log(newMatrix);      // [[1, 4, 3], [5, 7, 9], [8, 2, 6]]
//   console.log(matrix);         // [[1, 5, 8], [4, 7, 2], [3, 9, 6]]

  function transpose(matrix){
    // dealing with a MxN matrix 
    let lengthN = matrix[0].length
    let compose = []; 
    
    while(lengthN>0){
        compose.push([])
        lengthN--
    }
    
    for(let j=0; j<compose.length; j++){
        for(let i=0; i<matrix.length; i++){
            compose[j].push(matrix[i][j])
        }
    }

    return console.log(compose)
  }

transpose([[1, 2, 3, 4]]);            // [[1], [2], [3], [4]]
transpose([[1], [2], [3], [4]]);      // [[1, 2, 3, 4]]
transpose([[1]]);                     // [[1]]
transpose([[1, 2, 3, 4, 5], [4, 3, 2, 1, 0], [3, 7, 8, 6, 2]]);
// [[1, 4, 3], [2, 3, 7], [3, 2, 8], [4, 1, 6], [5, 0, 2]]