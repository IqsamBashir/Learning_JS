//spread operator  // it is used to clone an array

const array1 =[1,2,3];
const array2 =[4,5,6];

const newArray =[...array1,...array2, 77];
const outputArray = [..."iqsam"];
console.log(newArray);
console.log(outputArray);


//spread operator in objects

const obj ={
    key1 : "value1",
    key2 : "value2",
    key1 : "value3"  // now  output for key1 is value3 as it overides here

}

console .log (obj);

const obj1 ={
    key3: "value4",
    key4 : "value5"
};
const obj2 ={
    key3 : "valueunique" ,
    key5 : "value6",
    key6 : "value7"
};

// const newObject ={ ...obj1, ...obj2};
// const newObject ={ ...obj2, ...obj1};

const newObject ={ ...obj2, ...obj1, key68 :"self value"};
// const newObject ={ ... "abc"};
// const newObject = {...["item1", "item2"]};

console.log (newObject);
