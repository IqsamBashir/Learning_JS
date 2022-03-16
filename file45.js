// function declaration
// function singBirthdaySong()  //create a function
// {
//     console.log ("happy birthday to me");
// }
//function expression of the above
const singBirthdaySong = function(){
    console.log ("happy birthday to me");

}
singBirthdaySong();

//2 example

// function sum (num1, num2)
// {
//     return num1+num2;
// }

//its function expression
const sum = function(num1, num2)
{
    return num1+num2;
}

console.log(sum(5,6));

// 3 example
// function isEvenNo(number)
// {
//     return number % 2 ===0;
// }
//its function expression

const isEvenNo = function(number)
{
    return number % 2 ===0;
}

console.log(isEvenNo(88));

//4 example
// function firstCharacter(anyString)
// {
// return anyString[0];

// }

//function expression

const findString = function(anyString)
{
    return anyString[0];
}
console.log(findString("zaara"));

//5 example
// function findTarget(array, target)
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

// function  expression

const findTarget = function (array, target)
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

console.log(findTarget([4,5,6,7], 7));