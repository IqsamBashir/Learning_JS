// some method
const numbers=[3,5,8,9,10];
//check even one element is odd 

 const result=numbers.some((number) => number%2===0);
console.log(result);  //koi ek no hai jo even hai

//realostic example

const userCart = [
    
    {productId :01, productName: "mobile", price: 12000},
    {productId :02, productName: "skinCare", price: 1000},
    {productId :03, productName: "laptop", price: 72000},
    {productId :03, productName: "macbook", price: 240000},
]

//check whether there is one product whose price is above 1 lac

const output = userCart.some((cartItem) => cartItem.price > 100000);
console.log(output);  
