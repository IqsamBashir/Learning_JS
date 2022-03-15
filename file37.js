// difference between dot and bracket notation

const person ={            //person=>object-name
    name: "iqsam", 
    age: 23, 
    "my hobbies" : ["singing", "dancing","reading"]

};
// console.log (person. my hobbies); // it will throw an error As it is not the best methofd
console.log (person["my hobbies"]); //this is correct method