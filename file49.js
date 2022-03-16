// lexical scope
const myVar ="value1";
function myApp()
{
    // const myVar ="value1";
    function myFunc(){

        const myFunc2 = () => { console .log("inside myFunc", myVar);}
        myFunc2();
        // const myVar = "value55" // here overriding takes places
       
    }


    console.log(myVar);
    myFunc();
}
myApp();




