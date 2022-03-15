//create an object

const person ={            //person=>object-name
    name: "iqsam", 
    age: 23, 
    hobbies : ["singing", "dancing","reading"]

};
console.log(person);
console.log(typeof(person));

// as objects donot have index then 
//how we access the data from objects

console.log(person.name);
console.log(person.hobbies);
console.log(person.hobbies.length);

//we can add key value by [] also
person["interests"]= "MyChoice";
console.log(person);

//how to add key value pair to objects
person.gender="female";
console.log(person);

//we can also access data objects with [];
console.log(person["age"]);
