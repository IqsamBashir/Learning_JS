//computed properties

const var1 = "objectvar1";
const var2 = "objectvar2";

const value1= "my value 1";
const value2= "my value 2";
 
// we have to create an object whole key is "objectvar1" and value is "my value 1"\\

// const obj = {
//    [var1] : value1,
//    [var2] : value2

// }
// console.log(obj);

//this can be done in other way

const obj ={};

obj[var1] =  value1;
obj[var2] =  value2;
console.log(obj);
