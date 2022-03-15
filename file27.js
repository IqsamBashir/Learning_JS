//push and pop method of array

let fruits =["apple", "banana", "grapes"];
console.log(fruits);

//now i have to adfd element from end

fruits.push("orange");
console.log(fruits);


//pop method
fruits.pop();

console.log(fruits);

//see example1
console.log(fruits.pop());

//store the pop element at some place
poppedFruit=fruits.pop();
console.log("the popped fruit is",poppedFruit);

//unshift => to add the element from the start

fruits.unshift("guava", "kiwi");
console.log(fruits);

//shift => to remove the elemnt from the start
fruits.shift();
console.log(fruits);

//see example 2
removedFruit=fruits.shift();
console.log("the removed fruit is",removedFruit);


