//find method

const myArray =["hello", "catttyx", "dog", "lion"];
// function isLength(string)
// {
//     return string.length ===3; //means any parameter having length=3
// }
//  const result=isLength( "cat", "dog");
// console.log(result);

const output=myArray.find((string) => string.length===3);
console.log(output);

//it first checks first element if length= 3 it will be result but if length notr equal to 3, it will move to the next element.

// realoistic example

const users=[
    {userId: 1 , userName: "iqsam"},
    {userId: 2 , userName: "ashu"},
    {userId: 3 , userName: "sahiba"},
    {userId: 4 , userName: "mehnaz"},
    {userId: 5 , userName: "wahid"},
]

 const myuser=users. find((user) => user.userId===3);
 console.log(myuser);