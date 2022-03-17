// filter method

const numbers= [1,4,5,7,8];
// const isEven=function(number)//isEven takes number as an input
// {
//     return number %2 ===0;

// }
// const evenResult=numbers.filter(isEven);
// console.log(evenResult);

//for odd function
const isOdd=function(number)
{
         return number %2 !== 0;
    
     }
     const oddResult=numbers.filter(isOdd);
     console.log(oddResult);


     // the above with arrow function
     
     const oddResult1=numbers.filter((number) => {
         return number % 2 !==0;
     });
     console.log(oddResult1);