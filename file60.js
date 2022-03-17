// sort method
const numbers=[2,5,77,987,4455,9999];
// it takes values as ascii
// it takes the input as [50, 53, 57,52,57]
//output is 2,4455,5,77,989,9999
numbers.sort();
console.log(numbers); // this sorts the elements on the basis of first element

//advantage is it sorts the strings alphabetically
const userNames= ["iqsam","ashu","mahi", "Sahiba", "ABDUL WAHID"]; // here it will sort capital letters 
userNames.sort();
console.log(userNames);

//now we want to sort the elemnts as they are
const numbers1=[2,5,77,987,4455,9999];
numbers1.sort((a,b) => {
    return b-a;
    
});
console.log(numbers1);

//Realistic Example
//sort price Low to High or High to Low
const products=[
    {productId :01, productName: "mobile", price: 12000},
    {productId :02, productName: "skinCare", price: 1000},
    {productId :03, productName: "laptop", price: 72000},
    {productId :04, productName: "wallet", price: 720},
    {productId :05, productName: "watches", price: 5000},
]


//low to High
const lowToHigh=products.slice(0).sort((a,b) => {  // if we donot want to change our whole data use clone by slice
    return a.price - b.price
});
console.log(lowToHigh);
//highto low
const highToLow=products.slice(0).sort((a,b) => {  // if we donot want to change our whole data use clone by slice
    return b.price - a.price
});
console.log(highToLow);
