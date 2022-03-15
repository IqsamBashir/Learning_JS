// how to iterate object
const person ={
    name: "iqsam",
    age:23,
    "person hobbies": ["singing", "dancing", " reading"]
}
//for in loop to iterate the object


for (let key in person)
{
    console.log(person[key]);
}