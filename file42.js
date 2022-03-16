
//objects inside the array
//create an array of users which strores the information about multiple users via objects

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

// console.log(users); //this will show we have array of objects

//now iterate the array
for (let user of users)
{
    // console.log(user); //it will print only objects
    console.log(user.userId); //it will give only user ids
    console.log(user.firstName);
}