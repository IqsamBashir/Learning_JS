// important array methods.
// create a function which takes ist element and index no as input and prints index number and multiply of 2 of element
// const numbers = [4,2,5,8];

// function multiplyBy2(number, index)
{
    // console.log(`index is  ${index} and number is ${number}`);
    // console.log(number*2); or
    // console.log(`${number}*2 = ${number*2}`);
}
// multiplyBy2(numbers[0],0);//we have to give number at index 0 and index at 0
// multiplyBy2(numbers[1],1);

//the above 11 & 12 can be done with for loop
//  for ( let i = 0; i < numbers.length; i++)
//  {
//      multiplyBy2(numbers[i], i); //calling the function
//  }


 //for each
//  numbers.forEach(multiplyBy2);

 //it can be done in other way
 const numbers1 =[2,3,4,5,8];
 numbers1.forEach(function(number, index){
    console.log(`index is  ${index} and number is ${number}`);

 });

 //use forEach and create a function that divides the above no's by 2

 const num=[3,6,4,8,7,9];
 num.forEach(function (numbers, index){
     console.log(`the result is ${numbers/2}, and index is  ${index}`);
 });


 // realistic example of for each

 const users =[
         {firstName: "Mehnaz", age :26},
         {firstName: "Aysha", age :24},
         {firstName: "Iqsam", age :23},
         {firstName: "Sahiba", age :22},
         {firstName: "Abdul Wahid", age :20},
     
 ]

 users.forEach(function(result)
 {
     console.log(  `name is ${result.firstName}, and age is ${result.age}`);
 });    
// the above example using arrow function
 users.forEach ((result)=>{
 console.log(result.firstName);
 });
