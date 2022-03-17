// rest parameters

function restFunc(a,b,c)
{
  console.log(`a is ${a}`);
  console.log(`b is ${b}`);
  console.log(`c is ${c}`);
}
restFunc(3,6,8);

//pass more arguements and store them as an array in one parameter

function restFunc(a,b,...c) //here rest parametr is applied
{
  console.log(`a is ${a}`);
  console.log(`b is ${b}`);
  console.log(`c is` , c);  // if we write here (`c is ${c}`); =>it will give me a string 
}
restFunc(3,6,8,7,4,2,1,0);


//create a function to add all the arguments

function addAll(...numbers)
{
    console.log (Array.isArray(numbers));
     let total =0;

    for (let number of numbers){
         total= total+number;
    }
    return total;
}     
const result= addAll(9,7,5,4,3,22);
console.log (result);
