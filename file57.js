//Map method
const numbers = [1,2,3,4,5];

const square=function(number){ // here it takes number as a input// here square is a function name
 return number * number
}
const squareNumber= numbers.map(square); // here map always creates the new array and we need to store that
console.log (squareNumber);

//or 
const numbers1 = [1,2,3,4,5];
const squareNumber1= numbers1.map(function(number)
{
    return number * number;
 
}); 
console.log (squareNumber1);

// the above in arrow function
const numbers2 = [1,2,3,4,5];
const squareNumber2= numbers2.map((number, index) =>
{
    // return number * number;
    return `index : ${index}, ${number * number}`;
 
}); 
console.log (squareNumber2);

//realistic example 
const users =[
    {firstName: "Mehnaz", age :26},
    {firstName: "Aysha", age :24},
    {firstName: "Iqsam", age :23},
    {firstName: "Sahiba", age :22},
    {firstName: "Abdul Wahid", age :20},

]
const fetchData=users.map((result)  =>
{
    return result.firstName, result.age;
    

});
console.log (fetchData);
