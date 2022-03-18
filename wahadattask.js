 // create a list which includes the objects of having  age =23
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


const ret =a.filter(obj =>{
    return obj.age ===23;
})

 console.log(ret);


