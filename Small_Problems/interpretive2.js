// Write a function that displays a four-pointed diamond in an nxn grid, 
// where n is an odd integer supplied as an argument to the function. You may 
// assume that the argument will always be an odd integer.

diamond(1);
// logs
// * 
diamond(3);
// logs
// * 
// ***
// * 
//

diamond(9);
// logs
//     *
//    ***
//   *****
//  *******
// *********
//  *******
//   *****
//    ***
//     *

/*
Understanding the [P]roblem
===========================
Takes an odd number ->  outputs a string diamond of * 

Rules
====
- Provided an odd number always 
- on an nxn grid ex 9x9 
- prints diamond using * 

[E]xamples/Test Cases
=====================
-- Mental Model --
Transform each test case into the output string, step by step 

3 => * >*** > * 
9 => * >  *** > ***** > ******* > ********* > ******* > ***** > *** > * 

[D]ata Structure
================
- Do we need an array or an object to hold our data for our solution?
- What will our  solution’s data structures look like? 
No data structures needed - 
We could print using a while loop that going ascending then descending 
or 
create an arr that has the values in the right order 


[A]lgorithm
===========
What is the sticky bit of this problem?
Making sure that it prints in the correct order 
- Initalize a printingPress arr = []
- create a helper diamondString to create *** strings 
 - have an empty string 
    - create a while loop for i while it is greater than 0  
        - push * corressponding to i 
        - i -1 
- Initalize a for loop ascending starting at one While i is less than n
- increment by 2 
    - pass i as an argument to diamondString
    - push diamondString return value to prinitingPress 
- Initalize a for loop descending starting at n 
 - have an empty string 
    - pass i as an argument to diamondString
- loop over prinitingPress and print each line 
*/ 

function diamond(n){
  let printingPress = []

  const diamondString = num => {
    //  have an empty string 
    let diamond = ''
    // create a while loop for i while it is greater than 0  
    while(num>0){
        diamond+='*'
        num--
    }
    return diamond; 
  }

  for(let i = 1 ; i <= n ; i++ ){
    if(i%2==1){
     printingPress.push(diamondString(i))
    }
    
  }

  if(n>1){
    for(let i = n-1 ; i >= 0 ; i-- ){
        if(i%2==1){
         printingPress.push(diamondString(i))
        } 
  }
  }

  for(let i = 0 ; i < printingPress.length ; i++){
    if(printingPress[i].length<n){
        // printingPress[i]
        let pad = Math.floor(n/2)
        console.log(pad
            )
        console.log(printingPress[i].padStart(pad))
        // printingPress.splice(i,1); 
        
    }else{
        console.log(printingPress[i])
    }
  }


console.log(printingPress)


}