// iterables means on whcih we can use for of loop
//strings and arrays are iterable
const firstName = "Iqsam";
for (let charac of firstName)
{
    console.log(charac);
}
const array= [1,2,3,4,5];
for (let numbers of array)
{
    console.log(numbers);
}

// const object =
// {'key1' : 'value1', 'key2':'value2'}
// for (let store of object)
// {
//     console.log(store);
// } // error ==> as objecta are not iterable

//array like objects
const lastName = "Bashir"; 
console.log(lastName);
console.log(lastName.length);
console.log(lastName[5]);//to find oiyt the character at 2nd index
//thus strings are array like objects