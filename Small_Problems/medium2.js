// fridayThe13ths(1986);      // 1
// fridayThe13ths(2015);      // 3
// fridayThe13ths(2017);      // 2

// function fridayThe13ths(year){
//     let dateYear = new Date(`01 01 ${year}`)
//     let count = 0 
//     //convert to date 
//     //intialize count 
//     for(let i=1; i<=12; i++){
//         for(let j=1; j<=31; j++){
//         let dateInYear =  new Date(`${i} ${j} ${year}`)
//         if(dateInYear.getDay() === 5 && dateInYear.getDate() === 13){
//            count++
//         }
//         }
        
//     }
//     //check the day and date of the year for Fri 13th 
//     return count; 
// }

featured(12);           // 21
featured(20);           // 21
featured(21);           // 35
featured(997);          // 1029
featured(1029);         // 1043
featured(999999);       // 1023547
featured(999999987);    // 1023456987
featured(9876543186);   // 9876543201
featured(9876543200);   // 9876543201
featured(9876543201);   // "There is no possible number that fulfills those requirements."

function featured(num){
    if(num>9876543200) {
        return console.log("There is no possible number that fulfills those requirements.")
    }
    //odd number that is a multiple of 7, 
    //with all of its digits occurring exactly once each
    //make sure it's at least a multiple 7
    let result = (7-num%7)+num
    let startSplit = []
    let numArr= []
  
    for(let i=0; i<9876543200; i+7){
        if(result%2===0) {
            result = result+7
           startSplit = result.toString().split('').sort((a,b)=>a-b)
            for(let i=0; i<startSplit.length; i++){
                 numArr.push(Number(startSplit[i]))
            }
        }else{

            while(numArr[i]===numArr[i+1]){
                result = result+7
                break
            }
            for(let i=0; i<numArr.length; i++){
                if(numArr[i]===numArr[i+1] ) {
                    // console.log(numArr[i], numArr[i+1])
                    result = result+7
                }else{
                    break
                }
            }
            return result
        }
        
    }
}

sumSquareDifference(3);      // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
sumSquareDifference(10);     // 2640
sumSquareDifference(1);      // 0
sumSquareDifference(100);    // 25164150

function sumSquareDifference(num){
    let numArr = []
    for(let i=1; i<=num; i++){
        numArr.push(i)
    }
    let square = numArr.reduce((prev, current)=>prev+current, 0 )
    square = square**2; 
    let individualSquare = numArr.reduce((prev, current)=>prev+current**2, 0 )

    return square-individualSquare
}

let longText =
  'Four score and seven years ago our fathers brought forth on this ' +
  'continent a new nation, conceived in liberty, and dedicated to the ' +
  'proposition that all men are created equal. Now we are engaged in a ' +
  'great civil war, testing whether that nation, or any nation so ' +
  'conceived and so dedicated, can long endure. We are met on a great ' +
  'battlefield of that war. We have come to dedicate a portion of that ' +
  'field, as a final resting place for those who here gave their lives ' +
  'that that nation might live. It is altogether fitting and proper that ' +
  'we should do this.';

let longerText = longText +
  'But, in a larger sense, we can not dedicate, we can not consecrate, ' +
  'we can not hallow this ground. The brave men, living and dead, who ' +
  'struggled here, have consecrated it, far above our poor power to add ' +
  'or detract. The world will little note, nor long remember what we say ' +
  'here but it can never forget what they did here. It is for us the ' +
  'living, rather, to be dedicated here to the unfinished work which ' +
  'they who fought here have thus far so nobly advanced. It is rather ' +
  'for us to be here dedicated to the great task remaining before us -- ' +
  'that from these honored dead we take increased devotion to that ' +
  'cause for which they gave the last full measure of devotion -- that ' +
  'we here highly resolve that these dead shall not have died in vain ' +
  '-- that this nation, under God, shall have a new birth of freedom -- ' +
  'and that government of the people, by the people, for the people, ' +
  'shall not perish from the earth.';

longestSentence(longText);
// Four score and seven years ago our fathers brought forth on this continent a new nation, conceived in liberty, and dedicated to the proposition that all men are created equal.
//
// The longest sentence has 30 words.

longestSentence(longerText);
// It is rather for us to be here dedicated to the great task remaining before us -- that from these honored dead we take increased devotion to that cause for which they gave the last full measure of devotion -- that we here highly resolve that these dead shall not have died in vain -- that this nation, under God, shall have a new birth of freedom -- and that government of the people, by the people, for the people, shall not perish from the earth.
//
// The longest sentence has 86 words.

longestSentence("Where do you think you're going? What's up, Doc?");
// Where do you think you're going?
//
// The longest sentence has 6 words.

longestSentence("To be or not to be! Is that the question?");
// To be or not to be!
//
// The longest sentence has 6 words.

function longestSentence(str){

    let longestSent = []
    let longestText = []; 
    let text = str.match(/\w.*?[.!?]/g);
    
    console.log(text)
    for(let i=0; i<text.length; i++){
        let textWord = text[i].split(' ')
        let sentLength = 0 
        for(let i=0; i<textWord.length; i++){
            if(!textWord[i]==='--'){
                sentLength = sentLength+1
            }
        }
        longestSent.push(sentLength)
        
    }

    console.log(longestSent)
    // return console.log(
    // `${longestText}
    
    // The longest sentence has ${longestSent.length} words.`)
}

letterPercentages('abCdef 123');
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

letterPercentages('AbCd +Ef');
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

letterPercentages('123');
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }

function letterPercentages(str){
    //string -> object 
    // count the number of lowercase, uppercase and non-alphabet characters 
    //split str to array 
    //loop over array 
    //check if it is a uppercase or lowercase 
    // add to count 
    let countPercentage = [0,1,2]; 
    let strLength = str.length; 
    let result = { lowercase:0, uppercase: 0, neither: 0}
    let strArr = str.split('')
    for(let i=0; i<strArr.length; i++){
        if(strArr[i].toLowerCase() === strArr[i].toUpperCase()){
            result.neither++
        }else if(strArr[i] === strArr[i].toUpperCase()){
            result.uppercase++
        }else{
            result.lowercase++
        }
    }
    let percantages = Object.values(result).map(val=>((val/strLength)*100).toFixed(2))
    result.lowercase = percantages[0]
    result.uppercase = percantages[1]
    result.neither = percantages[2]

    return console.log(result)

}