// for of loop in array

const fruits =[ "banana", "orange","apple", "kiwi" ];

for (let fruit of fruits)  //hum yaha fruits fruit naam k variable mai daalte hai
{
    console.log(fruit.toUpperCase());
}
//same as i did//creating empty array and push the elemnts in that empty array and print it

const fruits2 =[ "banana", "orange","apple", "kiwi" ];
const fruits3 =[];

for (let fruits of fruits2)
{
    fruits3.push(fruits.toUpperCase());
}
console.log(fruits3);
