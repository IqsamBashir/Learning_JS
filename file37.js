// difference between dot and bracket notation
const key ="email"
const person ={            //person=>object-name
    name: "iqsam", 
    age: 23, 
    "my hobbies" : ["singing", "dancing","reading"]

};
// console.log (person. my hobbies); // it will throw an error as it is not the relevant method
console.log (person["my hobbies"]); //this is correct method

//  solve Q1;

const key1 = "email";
const person1 ={
    name:"zara",
    age:23
}

person1[key]="iqsambashir@gmail.com";
console.log(person1);
