// write some objects and store particular objects in the other list
const a = [
    {firstName : "iqsam", age: 23},
    {firstName : "Aysha", age: 22},
    {firstName : "sahiba", age: 20},
    {firstName : "iqsam", age: 23},
    {firstName : "Aysha", age: 22},
    {firstName : "sahiba", age: 20},
    {firstName : "iqsam", age: 23},
    {firstName : "Aysha", age: 22},
    {firstName : "sahiba", age: 20},
    {firstName : "iqsam", age: 23},
    {firstName : "Aysha", age: 22},
    {firstName : "sahiba", age: 20},
    {firstName : "iqsam", age: 23},
    {firstName : "Aysha", age: 22},
    {firstName : "sahiba", age: 20},
    {firstName : "iqsam", age: 23},
    {firstName : "Aysha", age: 22},
    {firstName : "sahiba", age: 28},


]

let b=[];
let end = a.length;
let index1=2;
let index2=9;

for (let i=0; i<end; i++)
{
    if (i==index1 || i ==index2)
    {    b.push(a[i]);
        }
        
}
console.log (b);