//arrays
// array of strings
let fruits = ['apple','mango', 'orange'];
console.log(fruits);

//for accessing the indexes of array we use square braclets3
console.log(fruits[1]);
//array of numbers

let numbers = [1,2,3,4];
console.log(numbers);


//array can store any type of datatype
let mixed =[1,2.3,4,"hello","iqsam" , null, undefined];
console.log(mixed);

// changing the data inside array
let fruits1 = ['apple','mango', 'orange'];
fruits1[1] ="banana";
console.log(fruits1);

let fruits2 = ['apple','mango', 'orange'];
console.log(typeof fruits2);
//below line will tell us the ibject is actually an array
console.log(Array.isArray(fruits2));
//literal object
let obj = {};
console.log(typeof obj);
