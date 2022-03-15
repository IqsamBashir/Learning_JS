//undefined
//creating a variable and not assigning any value to it, it is undefined  ==>only for let and var
let unassigned_variable;
console.log(typeof unassigned_variable);

let firstName;
console.log(typeof firstName);
firstName = "iqsam";
//printing more than 1 thing
console.log(typeof firstName, firstName);


var unassigned_var;
console.log(unassigned_var);

//const will throw an error
// const unassigned_variate;
// console.log(unassigned_variate); 


//Null

let myVariable = null;
console.log(myVariable);
myVariable = "Iqsam bashir";
console.log (myVariable, typeof myVariable);

console.log(typeof null);
//error in js, typeof null is object though it is a  null



//BigInt

let myNumber =BigInt (123);
let otherNumber = 123n
console.log (myNumber);
console.log (otherNumber);

//now we can perform multiple no. of the operations on bigint

console.log (myNumber + otherNumber);




