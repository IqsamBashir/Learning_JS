//how to clone an array

let array1=["item1", "item2"];
// let array2 = ["item1", "item2"]; //one method
// let array2 = array1.slice(0).concat(["item3", "item4"]); //second method

// let array2 =[].concat(array1,["item3", "item4"]); //third method
// spread operator    //a new method
//for example we have one more array 
let oneMoreArray =["item3", "item4"];// concate the further items
// let array2 = [... array1, "item3", "item4"]; // it will be done in other way
let array2 = [... array1, ...oneMoreArray];  


array1.push("item3");
console.log(array1===array2);
//the above is used to check whether arrays are equal or not
console.log(array1);
console.log(array2);