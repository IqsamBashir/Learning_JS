// callback functions

function funcName(a)
{
    console.log("hello world");
    console.log(a);
}
// funcName([1,2,3]); 
funcName({name : "iqsam"}); //we pass object as an argument


//using callback function
   function myFunction2(firstName){
       console.log ("i am a data present inside the my function 2")
       console.log(`my name is ${firstName}`);
   }
   function myFunction1(a){
       console.log(" hello there, i am data function 1 ")
    // console.log(a);
    a("Iqsam");// here we are calling a , beacuse it will give us only data of my function 2 ==>this is called as callback
   }
   

//    myFunction1();// didnot pass any value thus undefined
    myFunction1(myFunction2);  // pass function2 argument in function1 ==>output will be whole myFunction2 data, but we need only console data thus use of callback that is only call the paramter (done in 17 line)





