/*
You have a bank of switches before you, numbered from 1 to count. Every switch is connected to 
exactly one light that is initially off. You walk down the row of switches and toggle every one of 
them, that is, you flip every switch. All the lights are now on. You walk back to the beginning of 
the row and start another pass. On this second pass, you toggle switches 2, 4, 6, and so on. Now, 
every other light is on. On the third pass, you go back to the beginning again, this time toggling 
switches 3, 6, 9, and so on. You continue to repeat this process until you have made count passes.

Write a program that takes one argument—the total number of switches—and returns an array of the 
lights that are on after count passes.
*/

function lightsOn(switches) {
  let currentSwitch = 1 
  let resultant = []
  let holder = []
// - Push values 1 to count incrementing by 1 into both holder arr and resultant 
  for(let i = 0 ; i < switches ; i++ ){
    resultant.push(i+1)
    holder.push(i+1)
  }

// - Initalize a while loop to stop while currentSwitch is equal to count 
    while(currentSwitch<switches){
        currentSwitch++
        // loop over holder arr always 
        for(let num = 0 ; num < holder.length ; num++ ){
            // Check if the current number is divisible by currentSwitch's value
            if(holder[num]%currentSwitch==0){
                //- if it is, remove the element 
                if(resultant.includes(holder[num])){
                    let index = resultant.indexOf(holder[num])
                     resultant.splice(index, 1)
                     //- Insert it  
                 }else{
                    resultant.push(holder[num])
                 }
            }
        }
        console.log(currentSwitch)
        
    }
    
   return resultant.sort((a,b)=>a-b)      
  }
  
  lightsOn(5);        // [1, 4]
  lightsOn(100);      // [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]

   /*
Understanding the [P]roblem
===========================
Takes a number ->  returns an array of numbers 
The numbers represent the number of switches. 
Return value numbers are the no which are turned on 

Rules
====
- returns an array 
- 1 to count 
- the argument given is count in this cause 
starting from 1 acsending 

[E]xamples/Test Cases
=====================
-- Mental Model --
Transform each test case into the output string, step by step 
lightsOn(5);        // [1, 4]

  [1, 2, 3, 4, 5] on
  [1, 3, 5] on 2 
  [1, 5] on 3 
  [1, 4, 5] on 4 (you are only concerned with the numbers that are the )
  [1, 4] on 5
  5 is not included in this count up 

[D]ata Structure
================
- Do we need an array or an object to hold our data for our solution?
- AN array 
- What will our  solution’s data structures look like? 

[A]lgorithm
===========
What is the sticky bit of this problem?
Making sure to only toggle the the current numbers 

- Initalize currentSwitch value at 1 
- Initalize resultant arr 
- Have a holder arr 
- Push values 1 to count incrementing by 1 into both holder arr and resultant 
- Initalize a while loop to stop while currentSwitch is equal to count 
    - loop over holder arr always 
    - Compare the currentSwitch to 1 to holder arr  
    - Check if the current number is divisible by currentSwitch's value
        - if it is 
            - check if it present in resultant array.
                - if it is, remove the element 
                - else:
                    - Insert it   
        - else
            - Leave the value of the number alone (if it is present let it stay toggled)
    - increment currentSwitch number 
    - return sorted resultant arr in ascending order 
*/ 

// One thing that was helpful was to do all the work in algo, 
// then move it out of sight 
// then copy and past each command as needed to follow along 
