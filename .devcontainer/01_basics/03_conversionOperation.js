// let score= true
// console.log(typeof score);
// console.log(typeof(score)); 

// let valueInNumber= Number(score)
// console.log(typeof valueInNumber);
// console.log(valueInNumber); //NaN(Not a Number)

/*
"33" => 33
"33abc" => NaN.....Type=number
Null => 0
undefined => NaN
true => 1
 */

let isLoggedIn = 0

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)  

/* 
 1 => true
 0 => false
 2 => true
 -2 => true
 -2wddd => invalid token 
 " " => true
 "" => false
 "jyoti" => true
*/

let someNumber =33
let stringNumber= String(someNumber)
console.log(stringNumber); //33
console.log(typeof stringNumber);  //string