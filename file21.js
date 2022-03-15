//while loop example
// num = 10 means we have to find out the sum of first 10 natural numbers
let num = 10;
let total = 0;
let i =0;
while (i <= 10)
{
    total= total + i;
    i++;
}

console.log(total);


//another way to do it by formula ==> it is faster wayS
// formula for sum of natural numbers
let total1 = (num*(num+1)) / 2;
console.log(total1);
