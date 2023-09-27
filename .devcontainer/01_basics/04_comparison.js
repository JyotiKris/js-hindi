// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);


console.log("1" > 1); // false
console.log("2" > 1); //true
console.log("02" > 1);//true //never compare different datatypes 

// console.log(null > 0); //false  AVOID USING SUCH COMPARISON BECAUSE READABILITY IS THE PRIORITY
// console.log(null < 0); //false
// console.log(null == 0); //false
// console.log(null >= 0); //true   
//The  reason is that an equality check (==) and comparison (<,>,<=,>=)work differently. 
// Comparison convert null to a number, treating it as 0. That's why null >= 0 is true and null > 0 is false. 

// console.log(undefined == 0); //false  AVOID USING SUCH COOMPARISON BECAUSE READABILITY IS THE PRIORITY
// console.log(undefined > 0); //false
// console.log(undefined < 0); //false

//-----===
console.log("2" === 2); // false //it compares and checks datatypes 
