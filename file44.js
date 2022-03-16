// function declaration

function singBirthdaySong()  //create a function
{
    console.log ("happy birthday to me");
}


singBirthdaySong();  //call a function

function addition()
{
    console.log(2+4);

}
addition();

//print with return method
function addition2()
{
    return (2+3);

}
console.log(addition2());


//print via the stored variable

function addition3()
{
    return (3+4);
}
  returnedStoredValue=addition3();
  console.log (returnedStoredValue);

  //parameters with function

  function sum (num1, num2)
  {
      return num1+num2;
  }

  const reverseValue = sum (44,99);
  console.log (reverseValue);

  //check whether a number is even or odd

  function isEven(number)

  {
      if(number % 2 ==0)
      {
          return true;
      }
      else{
          return false;
      }
  }
  console.log (isEven(5));

  //or no need to write else

  function isEvenNo(number)

  {
      if(number % 2 ===0)
      {
          return true;
      }
      
          return false;
      
  }
  console.log (isEvenNo(4));

  //or this can be done as
  function isEvenNo(number)
  {
      return number % 2 ===0;
  }
  console.log (isEvenNo(199));

  //another example create a function whose input is in strings and output is the firstCharacter

  function firstCharacter(anyString)
{
return anyString[0];

}
console.log(firstCharacter("iqsam"));

//another example create a function whose input is in strings and output is the lastCharacter
function lastCharacter(anyString)
{
return anyString[anyString.length-1];

}
console.log(lastCharacter("iqsam"));

//create a function whose input string is in arrays and a target{target can be a number}.output should be target is present in an array or not.if not then output is -1


function findTarget(array, target)
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

const myArray=[1,3,6,8,91];
const final=findTarget(myArray, 8);
console.log(final);



