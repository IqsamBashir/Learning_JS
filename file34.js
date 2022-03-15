// for in loop in array

const fruits =[ "banana", "orange","apple", "kiwi" ];

for (let index in fruits) //yaha pe index mai value store hota hai
{
    console.log(fruits[index]);
}

//creating empty array and print that

const fruits1 =[ "banana", "orange","apple", "kiwi" ];
const array2 =[];

for (let index in fruits) 

{
    array2.push(fruits1[index].toUpperCase());
}

console.log(array2);