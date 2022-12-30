// dms(30);           // 30°00'00"
// dms(76.73);        // 76°43'48"
// dms(254.6);        // 254°35'59"
// dms(93.034773);    // 93°02'05"
// dms(0);            // 0°00'00"
// dms(360);          // 360°00'00" or 0°00'00"

// function dms(num){
//     if(Number.isInteger(num)){
//         return console.log(`${num}°00'00"`)
//     }else{
//         let minutes = (num-Math.floor(num))*60
//         let seconds = (minutes- Math.floor(minutes))*60 ; 
//         return console.log(`${Math.floor(num)}°${String(Math.floor(minutes)).length ===1 ? 
//             `0${Math.floor(minutes)}`:Math.floor(minutes)}'${String(Math.floor(seconds)).length ===1 ? 
//                 `0${Math.floor(seconds)}`:Math.floor(seconds)}`)
//     }
// }

// console.log(union([1, 3, 5], [3, 6, 9]));    // [1, 3, 5, 6, 9]
// function union(arr1, arr2){
//  let result = [...arr1, ...arr2]
//  let unique = []
//     for(let i=0; i<result.length; i++){
//         if(!unique.includes(result[i])){
//             unique.push(result[i])
//         }
//     }

//     return unique; 
// }

// halvsies([1, 2, 3, 4]);       // [[1, 2], [3, 4]]
// halvsies([1, 5, 2, 4, 3]);    // [[1, 5, 2], [4, 3]]
// halvsies([5]);                // [[5], []]
// halvsies([]);                 // [[], []]

// function halvsies(arr){

//     if(arr.length===0) return [[],[]]
//     if(arr.length===1) return [[...arr], []]
//     let halfsie = arr.length%2
//     let halway = Math.ceil(arr.length/2)

//     let result = [[],[]]
   
//         for(let i=0; i<halway;i++){
//             result[0].push(arr[i])
//         }
//         for(let j=halway; j<arr.length; j++){
//             result[1].push(arr[j])
//         }
    
//     return result
// }

// findDup([1, 5, 3, 1]);                                // 1
// findDup([18,  9, 36, 96, 31, 19, 54, 75, 42, 15,
//          38, 25, 97, 92, 46, 69, 91, 59, 53, 27,
//          14, 61, 90, 81,  8, 63, 95, 99, 30, 65,
//          78, 76, 48, 16, 93, 77, 52, 49, 37, 29,
//          89, 10, 84,  1, 47, 68, 12, 33, 86, 60,
//          41, 44, 83, 35, 94, 73, 98,  3, 64, 82,
//          55, 79, 80, 21, 39, 72, 13, 50,  6, 70,
//          85, 87, 51, 17, 66, 20, 28, 26,  2, 22,
//          40, 23, 71, 62, 73, 32, 43, 24,  4, 56,
//           7, 34, 57, 74, 45, 11, 88, 67,  5, 58]);    // 73

// function findDup(arr){
//     let unique = []; 
//     for(let i=0; i<arr.length; i++){
//          if(unique.includes(arr[i])) return console.log(arr[i]);
//          if(!unique.includes(arr[i])) unique.push(arr[i])
       
//     }
// }

// interleave([1, 2, 3], ['a', 'b', 'c']);    // [1, "a", 2, "b", 3, "c"]

// function interleave(arr1, arr2){
// //return a new array 
// let result = []; 
// //that combines each array, back and froth 
// //between elements 
// for(let i=0; i<arr1.length; i++){
//     result.push(arr1[i], arr2[i])
// }
// return console.log(result) ;
// }

// multiplicativeAverage([3, 5]);                   // "7.500"
// multiplicativeAverage([2, 5, 7, 11, 13, 17]);    // "28361.667"

// function multiplicativeAverage(arr1){
//     let result = 1; 

//     for(let i=0; i<arr1.length; i++){
//         result*=arr1[i]
//     }
//     result = (result/arr1.length).toFixed(3)
//     return result; 
// }

// multiplyList([3, 5, 7], [9, 10, 11]);    // [27, 50, 77]

// function multiplyList(arr1,arr2){
//     let result =[]
//     for(let i=0; i<arr1.length; i++){
//         result.push(arr1[i]*arr2[i]); 
//     }

//     return console.log(result)
// }

// const digitList = num => {
//     let result = num.toString();
//     let newResult = []

//     for(let i=0; i<result.length; i++){
//         Number(newResult.push(Number(result[i])));
//     }

//     return console.log(newResult); 
// }

// digitList(12345);       // [1, 2, 3, 4, 5]
// digitList(7);           // [7]
// digitList(375290);      // [3, 7, 5, 2, 9, 0]
// digitList(444);         // [4, 4, 4]

// let vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
//                 'motorcycle', 'motorcycle', 'car', 'truck'];

// countOccurrences(vehicles);

// console output -- your output sequence may be different
// car => 4
// truck => 3
// SUV => 1
// motorcycle => 2
// function countOccurrences(arr){
//     let result = {}; 

//     arr.forEach(item => {
//         if (!result.hasOwnProperty(item)) {
//           result[item] = 1;
//         } else {
//           result[item] += 1;
//         }
//       })

//     return console.log(result); 
// }

// average([1, 5, 87, 45, 8, 8]);       // 25
// average([9, 47, 23, 95, 16, 52]);    // 40

// function average(arr){
//     let start = 0;
//    let average =  arr.reduce((average, currentValue)=> average+currentValue, start) 
//    return Math.floor(average/arr.length); 
// }

console.log(timeOfDay(0) === "00:00");
console.log(timeOfDay(-3) === "23:57");
console.log(timeOfDay(35) === "00:35");
console.log(timeOfDay(-1437) === "00:03");
console.log(timeOfDay(3000) === "02:00");
console.log(timeOfDay(800) === "13:20");
console.log(timeOfDay(-4231) === "01:29");

function timeOfDay(num){
    let hours = Math.abs(num)>60 ? Math.floor(num/60) : 0;
    if(String(Math.abs(hours)).length ===1 ) hours = `0${Math.floor(num/60)}`

    let minutes = Math.abs(num)<60 ? num : num%60;
    if(String(Math.abs(minutes)).length ===1 ) minutes = `0${Math.floor(num/60)}`
    let time = [String(hours), ":", String(minutes)]

   if(Math.abs(hours) > 24){
        while(Math.abs(hours)>24){
            hours=Math.abs(hours)-24
        }     
        time[0] = String(hours)
        
    }else if(Math.abs(minutes)<60){
        time[2] = String(minutes)
    }else if(Math.abs(hours)>24){
        time[0] = hours<0 ? 24-hours : hours;

    }
    
    if(minutes<0){
        time[1] = 60-Math.abs(minutes);
    }

    return console.log(time)
}