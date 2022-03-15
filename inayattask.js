
//one method:  using the reverse  function 
// let Array = [1, 2, 3, 4, 5,6];
// let reversedArray = Array.reverse();

// console.log(reversedArray);



//another method

//  const array =[1,2,3,4,5,6];
//  let reverseArray=[];

// for( let i=array.length-1; i>=0; i--)
// {
//     reverseArray . push(array[i]);
// }
// console.log(reverseArray);


//reverse  for string
// const str ="Iqsam";
//  let reverseStr="";

// for( let i=str.length-1; i>= 0 ; i--)
// {
//     reverseStr += str[i];
// }
// console.log(reverseStr);

//revrse a string with methods

const str ="zara";
//split will covert the string into array of letters like ['z','a','r','a']
const splitStr = str.split('');

//now it is an array we can now use reverse method of array
const reverseStr=splitStr.reverse();

//now join will convert array of letters back to string
const finalReversedString= reverseStr.join('');
console.log(finalReversedString);

const Str="wahid";
newStr=Str.split('').reverse('').join('');
console.log(newStr);












