// functions inside functions

 const func1 = () =>
 {    
     const func2 = () =>
     {console.log ("hello from my other function which is function 2");}
    const addition = (num1, num2) =>
    { return (num1 + num2);
    }
    const multiplication = (num1, num2) =>num1 * num2;
    function showDivide()
    {
        return 6/2;
    }
     console.log("inside app");
     func2();
     console.log(addition(4,5));
     console.log(multiplication(9,5));
     console.log(showDivide());
 }
 func1();
