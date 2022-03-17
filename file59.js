// reduce method
//task sum of all the numbers in array;

const numbers = [1,2,3,4,5];

const sum = numbers.reduce((accumulator, currentValue) => {
 return accumulator + currentValue;

});  
//here we can aslo pass the initial value like this, sum will be 115
//  }, 100 );
console.log(sum);  // on copy description 

// realistic example
const userCart = [
    
    {productId :01, productName: "mobile", price: 12000},
    {productId :02, productName: "skinCare", price: 1000},
    {productId :03, productName: "laptop", price: 72000},
    
    // i want to get sum of all prices
]
      const total=userCart.reduce((totalPrice, currentProduct) => {
        return totalPrice + currentProduct.price
      }, 0);
      console.log(total);
