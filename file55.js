// function returning function

function myFuction()
{
    function hello()
    {
        // console.log(" hello iqsam, i am from earth");
        return "hello iqsam, i am from earth";
    }
    // return "a";  //it will return string a  (here we can return anything like objects, arrays etc)
    return hello;
}
const result=myFuction(); // here my function calls the hello function and stores in the result . Now result is a function too.so we can call now results diectly.

// console.log(result);//it will pass the whole function hello but i need only data

console.log(result()); //if i write only result(); it will only store the return data not displaying it


//another way of doing it
function myFuction(){
    return function(){
        return "hello i am Aysha from earth";
    }
}
const output=myFuction();

console.log(output());