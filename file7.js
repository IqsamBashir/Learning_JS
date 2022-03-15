//trim method  used to cut the unnecessary spaces

let firstName = "      mehjabeen    "; 
console.log(firstName);
console.log(firstName.length);
//we have to declare another variable which stores the information without spaces

let newString=firstName.trim();
console.log (newString);  //isme ye naam layega uss string ki withoit spaces
console.log(newString.length);

//to uppercase

let lastName = "iqsam";
console.log(lastName);
//lastname ka uppercase jo hai wo ek new container mai rskho aur uss new container ko print karo
let freshString = lastName.toUpperCase();

console.log(freshString);


//toLowerCase

let userName = "IQSAM BASHIR SOFI";
console.log(userName);
let newContainer = userName.toLowerCase();
console.log(newContainer);

//slice =>   is used to get a particular data from the string by using start index and end index parameters


let varName = "shaiz"
let freshContainer = varName.slice(0,3);
console.log(freshContainer);
freshContainer = varName.slice(1);
console.log(freshContainer);


