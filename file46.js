// arrow functions
// example 1
//function expression 
// const singBirthdaySong = function(){
//     console.log ("happy birthday to me");
// }
// singBirthdaySong();
// arrow function of the above
const singBirthdaySong = () => {
    console.log ("happy birthday to me");

}
singBirthdaySong();

//2 example
// // const sum = function(num1, num2)
// // {
// //     return num1+num2;
// }

// // console.log(sum(5,6));
// arrow function of the above
const sum = (num1, num2) =>num1+num2;
 console.log(sum(9,0));

// 3 example
// const isEvenNo = function(number)
// {
//     return number % 2 ===0;
// }

// console.log(isEvenNo(88));
// arrow function
// const isEvenNo = (number) =>
// {
//     return number % 2 ===0;
// }

// console.log(isEvenNo(88));
// it can be written in other way also
const isEvenNo = (number) => number % 2 ===0;
console.log(isEvenNo(45));


//4 example
// const findString = function(anyString)
// {
//     return anyString[0];
// }
// console.log(findString("zaara"));
// arrow function
// const findString = (anyString) =>
// {
//     return anyString[0];
// }
// console.log(findString("iqsam"));
//other way of the above
const findString = (anyString) => anyString[0];
console.log(findString("iqsam"));

//5 example
// function  expression

// const findTarget = function (array, target)
// {
//     for (let i= 0; i< array.length; i++)
//     {
//         if(array[i] === target)
//         {
//           return i;
//         }
//     }

//     return -1;

// }

// console.log(findTarget([4,5,6,7], 7));

//arrow function
const findTarget =(array, target)  =>
{
    for (let i= 0; i< array.length; i++)
    {
        if(array[i] === target)
        {
          return i;
        }
    }

    return -1;

}

console.log(findTarget([4,5,6,7], 4));