// parameters destructuring

const person = {
    firstName : "iqsam",
    gender : "female"
};

// function getDetails (obj)
// {
//     console.log(obj.firstName);
//     console.log(obj.gender);
//     console.log(obj.age); // undefined result
// }

// above function with destructuring

function getDetails (firstName,gender)
{
    console.log(firstName);
    console.log(gender);}
getDetails(person);