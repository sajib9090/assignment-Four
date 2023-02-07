// Any positive number input will be taken then return as per instructions
// function name should be mindGame

// function mindGame(num){

//     // if anyone put negative number and string then if statements will work

//     if(typeof num != 'number' || num < 0){
//         return "Input should be a number"
//     }
//     const multiplyInput = num * 3;
//     const sumResult = multiplyInput + 10;
//     const divideResult = sumResult / 2;
//     const finalResult = divideResult - 5;
//     return finalResult;

// }
// // const num = 5;
// // const result = mindGame(num);
// // console.log(result);



// Any string input will be taken then return as per instructions
// function name should be evenOdd

// function evenOdd(str){

//     // if anyone put not string then if statements will work

//     if(typeof str !== 'string'){
//         return ('Input should be string.')
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



// Any number input will be taken then return as per instructions
// function name should be isLGSeven

// function isLGSeven(num){
//     let number = num - 7;
  
//     // if anyone put not number then if statements will work

//     if(typeof num != 'number'){
//         return ('Input should be number.')
//     }
//     else if(number < 7){
//         return number;
//     }
//     else if(number >= 7){
//         return (number * 2);
//     }
    

// }
// // const num = "13";
// const num = -15;
// const result = isLGSeven(num);
// console.log(result);



// Any array input will be taken then return as per instructions
// function name should be isLGSeven

// function findingBadData(numberOfArray){

//     // if anyone put not an array then if statements will work

//     if(Array.isArray(numberOfArray) !== true){
//         return ('Input should be array.')
//     }


//     let badNumber = [];
//       for(let i = 0; i < numberOfArray.length; i++){
//         const element = numberOfArray[i];
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



// Any number input will be taken then return as per instructions
// function name should be gemsToDiamond

// function gemsToDiamond(friendOne, friendTwo, friendThree){



//     if(typeof friendOne !== 'number' || typeof friendTwo !== 'number' || typeof friendThree !== 'number'){
//         return 'Input should be number';          // if anyone put not number then if statements will work
//     }


//     let friendOneDiamond = friendOne * 21;
//     let friendTwoDiamond = friendTwo * 32;
//     let friendThreeDiamond = friendThree * 43;

//     let totalDiamond = friendOneDiamond + friendTwoDiamond + friendThreeDiamond;

//     if(totalDiamond >= 1000 * 2){
//         let remainingDiamond = totalDiamond - 2000;
//         return remainingDiamond;
//     }
//     else{
//         return totalDiamond;
//     }

// }

// const friendOne = 100;
// const friendTwo = 5;
// const friendThree = 1;
// const result = gemsToDiamond(friendOne, friendTwo, friendThree);
// console.log(result);
    