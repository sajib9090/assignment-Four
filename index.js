// Any positive number input will be taken then return as per instructions
// function name should be mindGame

// function mindGame(num){
    // if anyone put invalid or negative number and string will if statements will work
//     if(typeof num != 'number' || num < 0){
//         return "Please put valid number"
//     }
//     let multiplyInput = num * 3;
//     let sum = multiplyInput + 10;
//     let division = sum / 2;
//     let finalResult = division - 5;
//     return finalResult;

// }

// let num = 5;
// const result = mindGame(num);
// console.log(result);


// Problem 2: Finding even or odd
// String input will be taken as parameter of the function and if string length is odd then odd will be returned, and string length is even then even will be returned.

// function evenOdd(str){

//     if(typeof str != 'string'){
//         return ('Please provide valid text.')
//     }
//     else if(str.length % 2 === 0){
//         return ('even');
//     }
//     else{
//         return ('odd');
//     }
// }

// const str = 'Sajib Hossain';
// // const str = 12;
// const result = evenOdd(str);
// console.log(result)


// Problem 3: Is Less or Greater than seven


// function isLGSeven(num){
//     let number = num - 7;

//     if(typeof num != 'number'){
//         return ('Please provide valid number.')
//     }
//     else if(number < 7){
//         return number;
//     }
//     else if(number >= 7){
//         return (number * 2);
//     }
    

// }
// // const num = "13";
// const num = 13;
// const result = isLGSeven(num);
// console.log(result);




// Problem 4: Finding Bad data

// function findingBadData(numberOfArray){

//     if(Array.isArray(numberOfArray) !== true){
//         return ('Please provide array.')
//     }


//     let badNumber = [];
//       for(let i = 0; i < numberOfArray.length; i++){
//         const element = numberOfArray[i];
//         // console.log(element);
//         if(element < 0){
//             badNumber.push(element);
//         }
//       }
//       return badNumber.length;

// }

// const numberOfArray = [-4,-9,-5,-33,-55,11,12,33,44,55];
// // const numberOfArray = 'hdshjsd';
// const result = findingBadData(numberOfArray);
// console.log(result);


// Problem 5: Convert your gems into diamond

// function gemsToDiamond(friendOne, friendTwo, friendThree){
    

//     if(typeof friendOneGems !== 'number' || typeof friendTwoGems !== 'number' || typeof friendThreeGems !== 'number'){
//         return 'please write number';
//     }

//     let friendOneDiamond = friendOne * 21;
//     let friendTwoDiamond = friendTwo * 32;
//     let friendThreeDiamond = friendThree * 43;

//     let friendOneTotalDiamond = friendOneDiamond;
//     let friendTwoTotalDiamond = friendTwoDiamond;
//     let friendThreeTotalDiamond = friendThreeDiamond;

//     let totalDiamond = friendOneTotalDiamond + friendTwoTotalDiamond + friendThreeTotalDiamond;

//     if(totalDiamond >= 1000 * 2){
//         let remainingDiamond = totalDiamond - 2000;
//         return remainingDiamond;
//     }
//     else{
//         return totalDiamond;
//     }

// }

// const friendOneGems = 100;
// const friendTwoGems = 5;
// const friendThreeGems = 1;
// const result = gemsToDiamond(friendOneGems, friendTwoGems, friendThreeGems);
// console.log(result);