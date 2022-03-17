// default parameters

function addTwoNumbers(a,b)
{
    return a+b;
}

const result = addTwoNumbers(2,9); //but what if we donot pass one argument  
console.log(result);

//in ES5

function addTwoNumbers(a,b)
{
    if (typeof b === "undefined")
    {
        b =1;
    }
    return a+b;
}

const output = addTwoNumbers(2);
console.log(output);

//default parameters
function addTwoNumbers(a,b=0) //we set here value of b 
{
    return a+b;
}

const final = addTwoNumbers(2); 
console.log(final);