//Every Method
// check whether all elemnts in the array are even
const numbers= [2,4,6,8,10];

const result=numbers.every((number) => number %2 ===0);
console.log(result);
//callback function return eitrher true or fasle
// every method returns true or false.

//or

const numbers1 = [1,3,5,7,9];
function isOdd(number)
{
    return number % 2!==0;
}
 const output=numbers1.every(isOdd);
 console.log(output );

 //realistic example

 const userCart = [
    
    {productId :01, productName: "mobile", price: 12000},
    {productId :02, productName: "skinCare", price: 1000},
    {productId :03, productName: "laptop", price: 72000},
    
]
//check every product has price < 30k
const final=userCart.every((cartItem) => cartItem.price < 30000);
console.log(final );
