// how to iterate object
const person ={
    name: "iqsam",
    age:23,
    "person hobbies": ["singing", "dancing", " reading"]
}
//for in loop to iterate the object


for (let key in person)
{
    console.log(person[key]);  //it will first print name value, then age value, then hobbbies value
}

// if we want to print both key and values
for (let key in person)
{
    // console.log(`${key} : ${person[key]}`); //we can do it in other way
    // console.log(key,person[key]); // or in the below mentioned way
    console.log(key," : " , person[key]);

}

// 2nd method object.keys
console.log("it is second method");
console.log (Object.keys (person));
console.log (typeof(Object.keys (person)));

const storedValue = Array. isArray(Object.keys (person));
console.log(storedValue)

//3rd method by for of loop via object.keys

for (let key of Object.keys(person))
{
    console.log(person[key]);
}