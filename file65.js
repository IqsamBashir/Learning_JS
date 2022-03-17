// splice method
// start delete, insert

const myArray =['item1', 'item2', 'item3'];
//delete==> splice(index start, delete how many elemnts)
const result=myArray.splice(1,1); // delete returns the deleted item
console.log("deleted item is " , result);
console.log(myArray);


//insert
myArray.splice(1,0,'inserted item');
console.log(myArray);

// insert and delete items
myArray.splice(1,1,'iqsam inserted the other', "fruits inserted");
console.log(myArray);
