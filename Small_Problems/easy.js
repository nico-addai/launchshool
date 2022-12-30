//Isn't it Odd? 
//Assesses if a number is odd and returns a boolean value 
// const isOdd = (num) => !(num%2===0)


//Odd Numbers 
// Log all odd numbers from 1 to 99, inclusive, to the console, with each number on a separate line.
// function oddLogger() {
//     let hundredSet = 100;
//     while(hundredSet){
//         if(hundredSet%2==1){
//             console.log(hundredSet); 
//         }
//         hundredSet-=1
//     }
// }


//Even Numbers 
//Log all even numbers from 1 to 99, inclusive, to the console, with each number on a separate line.
// function evenLogger(){
//     let hundredSet = 99;
//     while(hundredSet){
//         if(hundredSet%2==0){
//             console.log(hundredSet); 
//         }
//         hundredSet-=1
//     }
// }


//How big is the room?
/*Build a program that asks the user to enter the length and width of a room in meters, 
and then logs the area of the room to the console in both square meters and square feet.
Note: 1 square meter == 10.7639 square feet

Do not worry about validating the input at this time. 
Use the readlineSync.prompt method to collect user input.*/
// const readline = require('readline-sync')

// const prompt = str =>{
//     console.log(`=>${str}`)
// }
// const areaCalc = (length, width) => { 
//     //10.7639 is a the conversion factor 
//     let area = (length*width)/10.7639; 
//     return area.toFixed(2)
// }

// prompt("Welcome to Room Generator! We use feet jere")
// prompt("What length would you like the room to be?")
// const length = readline.question(); 
// prompt("What width would you like the room to be?")
// const width = readline.question(); 

// console.log(`The area of the room in meters is:`, areaCalc(length, width)) 

//Tip Calculator 
/*Create a simple tip calculator. The program should prompt for a bill amount and a tip rate. 
The program must compute the tip, and then log both the tip and the total amount of the bill to the console. 
You can ignore input validation and assume that the user will enter numbers.*/

// const readline = require('readline-sync'); 
// console.log("Welcome to Tip Calculator"); 

// //Calculate the whole bill
// const wholeBill = (bill, tipPercentage) => Number(bill) + tip(bill, tipPercentage); 
// //Calculate the tip 
// const tip = (bill, tipPercentage) => Number(bill)*Number(tipPercentage/100); 

// console.log("What is the bill?"); 
// const bill = readline.question(); 

// console.log("What is the tip percentage?"); 
// const tipPercentage = readline.question(); 

// const thisBill = wholeBill(bill, tipPercentage); 
// const thisTip = tip(bill, tipPercentage); 

// console.log(`The tip is $${thisTip}.`)
// console.log(`The total is $${thisBill}.`)

//Sum or Product of Consecutive Integers
//Write a program that asks the user to enter an integer greater than 0, 
//then asks whether the user wants to determine the sum or the product of all numbers between 
//1 and the entered integer, inclusive.

// const readline = require('readline-sync'); 
// console.log('Sum or Product of Consetuive Integers Machine'); 

// const prompt = (str) => console.log(`==> ${str}`); 

// //Ask user for integer greater than 0 
// prompt("Please enter an integer greater than 0.");
// let userNum = readline.question(); 

// let result = 0; 
// //Ask if user wants the sum or product 
// //if sum, add all the consective numbers 
// //if product, multiply consutive numbers 
// prompt("Would you like to add all numbers to this number inclusive or its product? (S/P)"); 
// let userAns = readline.question().toLowerCase(); 
// let initalUserAns = userNum;  

// if(userAns[0] === 's'){
//     while(userNum){
//         result+=Number(userNum); 
//         userNum--;
//     }
// }else if(userAns[0] === 'p'){
//     while(userNum){
//         result*=Number(userNum); 
//         userNum--;
//     } 
// }else{
//     prompt("Incorrect input. Try again. Sum or product?"); 
//     userAns = readline.question().toLowerCase(); 

// }
// console.log(`The sum of the integers between 1 and ${initalUserAns} is ${result}`); 

// const shortLongShort = (str1, str2) =>{
//     let result = ''; 
//     if(str1.length>str2.length){
//         result=str2+str1+str2;
//     }else{
//         result=str1+str2+str1
//     }
//     return console.log(result)
// }
// shortLongShort('abc', 'defgh');    // "abcdefghabc"
// shortLongShort('abcde', 'fgh');    // "fghabcdefgh"
// shortLongShort('', 'xyz');         // "xyz"

//Leap Year (Part1)

//In the modern era under the Gregorian Calendar, leap years occur in every year that is 
//evenly divisible by 4, unless the year is also divisible by 100. If the year is evenly divisible 
//by 100, then it is not a leap year, unless the year is also evenly divisible by 400.

//Assume this rule is valid for any year greater than year 0. 
//Write a function that takes any year greater than 0 as input and returns true if 
//the year is a leap year, or false if it is not a leap year.
// function isLeapYear(year){
//     let divisibleResult = Number(year)%4;
//     //Is it divisable by 4?;
//     let hundredDivide = Number(year)%100;
//     //Is it divisiable by 100?; 
//     let fourhundredDivide = Number(year)%400;
//     //Is it divisable by 400?);

//     if(year > 1752){
//         if (divisibleResult===0 && hundredDivide >0) {
//             return console.log(true); 
//         }else if(divisibleResult===0 && fourhundredDivide===0){
//             return console.log(true); 
//         }
//         else{
//             return console.log(false); 
//         }
//     }else if(year<1752){
//         if (divisibleResult===0) {
//             return console.log(true); 
//         }
//         return console.log(false); 
//     }
    
// }

// isLeapYear(2016);      // true
// isLeapYear(2015);      // false
// isLeapYear(2100);      // false
// isLeapYear(2400);      // true
// isLeapYear(240000);    // true
// isLeapYear(240001);    // false
// isLeapYear(2000);      // true
// isLeapYear(1900);      // false
// isLeapYear(1752);      // true
// isLeapYear(1700);      // false
// isLeapYear(1);         // false
// isLeapYear(100);       // false
// isLeapYear(400);       // true

//Is it a Leap year part 2

// isLeapYear(2016);      // true
// isLeapYear(2015);      // false
// isLeapYear(2100);      // false
// isLeapYear(2400);      // true
// isLeapYear(240000);    // true
// isLeapYear(240001);    // false
// isLeapYear(2000);      // true
// isLeapYear(1900);      // false
// isLeapYear(1752);      // true
// isLeapYear(1700);      // true
// isLeapYear(1);         // false
// isLeapYear(100);       // true
// isLeapYear(400);       // true

// const multisum = num => {
//     let result = 0; 
//     while(num>=0){
//         if(num%3===0 || num%5===0){
//             result+=num; 
//         }
//         num--; 
//     }
//     return console.log(result); 
// }
// multisum(3);       // 3
// multisum(5);       // 8
// multisum(10);      // 33
// multisum(1000);    // 234168

// utf16Value('Four score');         // 984
// utf16Value('Launch School');      // 1251
// utf16Value('a');                  // 97
// utf16Value('');                   // 0

// function utf16Value(str){
//     let arrayUTF = []; 
//     for(let i=0; i<str.length; i++){
//       arrayUTF.push(str.charCodeAt(i)); 
//     }
    
//     return console.log(arrayUTF.reduce((previous, current) => previous + current, 0))
// }

// const OMEGA = "\u03A9";             // UTF-16 character 'Ω' (omega)
// utf16Value(OMEGA);                  // 937
// utf16Value(OMEGA + OMEGA + OMEGA);  // 2811