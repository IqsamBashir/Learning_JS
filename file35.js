// array destructuring

    const myArray = ["value1", "value2"];
    let variable1 = myArray[0];
    let variable2 = myArray[1];
    console.log("value of variable1 is", variable1);
    console.log("value of variable2 is", variable2);


    //the shortcut of the above method is ==>

    const myArray1 = ["value1", "value2"];
    let [variable11, variable22] = myArray1;
    //we can also change the value
    variable11= "I changes its value";
    console.log("value of variable11 is", variable11);
    console.log("value of variable22 is", variable22); 
    
    
    //if we want to store value3 not value2  in variable b not in variable 
    const myArray2 = ["value1", "value2", "value3", "newvalue1", "newvalue2"];
    let [variablea, ,variableb] = myArray2;
    let myNewArray2= myArray2.slice(2); // if you want to create an array for the remaining elements. this can done as adding the newarray to the above as 
 
    // let [variablea, ,variableb,...myNewArray2] = myArray2;


    console.log("value of variablea is", variablea);
    console.log("value of variableb is", variableb); 
    console.log(myNewArray2);







