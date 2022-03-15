//for loop in array

let fruits = ["apple", "mango","grapes", "banana"];
let fruits2=[]
for (let i=0; i<=fruits.length-1;i++)
{
     console.log(fruits[i]);  //print the fruits
     console.log(fruits[i].toUpperCase());//print the fruits in 
    //to create an empty array and  print all those upper case fruits by that array

    fruits2.push(fruits[i].toUpperCase());
}
    console.log(fruits2);





console.log(fruits.length);
console.log(fruits[2]); // to get the fruit at index 2
console.log(fruits[fruits.length -1]);