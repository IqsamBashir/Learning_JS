//qs 
//let array=[1,2,3,4,5,6];
//use map to double the numbers and filter out  numbers which are greater than 10
//output should be numbers greater than 10


const array = [1,2,3,4,5,6];
const double= function (number){
    return number + number;
}
const doubleNumber=array.map(double);


const isGreater10 = function(doubleNumber)
{
    return doubleNumber >10;
}

const final=doubleNumber.filter (isGreater10);
console.log(final);



// use map and filter together

const array1 =[1,2,3,4,5,6];
// console.log(array1);
const array2 = array1.map(number => number *2). filter(number => number >10).reduce((accumulator, currentValue) => { return accumulator + currentValue} );
console.log(array2);

// const sum = array1.reduce((accumulator, currentValue) => {
//     return accumulator + currentValue;
   
//    });
//    console.log(sum); 




   // above question using callback



