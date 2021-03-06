// block scope vs function scope

{
    let firstName = "Iqsam"
}
console.log(firstName); //error// undefined as let and const are accessed within the block only
//right way
{
    let firstName = "Iqsam"
    console.log(firstName);
}
{
    var firstName = "Aysha"
}
console.log(firstName); 

//using const keyword
{
   const firstName = "Mehnaz"
    console.log(firstName);
}

const firstName1 = "Sahiba";
console.log(firstName1);

//example
function myApp ()
{
    if (true)
    {
        var firstName2 ="Abdul Wahid";
        console.log(firstName2);
    }
    console.log(firstName2); // if variable is declared with var keyword, it is accesed within and outside the function

    //but if declared with the let keyword, it wont be accessed outsdie the function.

    //var can be accessed in other function also
    if (true){
        console.log(firstName2);

    }
}

myApp();