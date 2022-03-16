// object destructuring

const band ={
    bandName : "led zeplin",
    famousSong : " stairway to heaven",
    year : 1998,
    anotherFamousSong : "kashmir"
};
// const bandName = band.bandName;
// const famousSong = band.famousSong;
// console.log(bandName, famousSong);

//shortcut of above 3 lines is this

// const {bandName, famousSong} = band;  //it is destructuring 
// console.log(bandName, famousSong);
//the below code will give key value pair of band
console.log(band);

//if you want to change the name of variable bandname; do this
let {bandName : newSet1, famousSong : newSet2, ...remainingProperties} = band;
console.log(newSet1, newSet2);
console.log(remainingProperties);// this remainingProperties will store all other values which we werre not printing