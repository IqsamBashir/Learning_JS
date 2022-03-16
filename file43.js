
//nested destructuring
const users = [
    { userId :1,
     firstName : "Iqsam",
     gender : "female" 

    },
    { userId :2,
        firstName : "Aysha",
        gender : "female" 
   
       },
       { userId :3,
        firstName : "Mehnaz",
        gender : "female" 
   
       },
]

//destructuring inside array of objects
// const [user1, user2,user3] = users;
// console.log(user1);
// console.log(user2);
// console.log(user3);

//now i want to print firstname from user1 and gender from user3

// const [{firstName} , , {gender}] = users;
// console.log(firstName);
// console.log(gender);

//i want to change firstname variable to userName
const [{firstName : userName, userId} , , {gender : userGender}] = users;
console.log(userName);
console.log(userGender);
console.log(userId);
