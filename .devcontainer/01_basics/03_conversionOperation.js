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

//let isLoggedIn = 0

//let booleanIsLoggedIn = Boolean(isLoggedIn)
//console.log(booleanIsLoggedIn) //false 

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

//let someNumber =33
//let stringNumber= String(someNumber)
//console.log(stringNumber); //33
//console.log(typeof stringNumber);  //string

// ********************  OPERATIONS  **********************************

//let value = 3
//let negValue = -value
//console.log(negValue);//-3

//console.log(2+2);//4
//console.log(2-2);//0
//console.log(2*2);//4
//console.log(2**3);// 2 raise to the power 3//8
//console.log(2/3);//0.666666
//console.log(2%3);//2

let str1="hello"
let str2=" jyoti"
let str3= str1 + str2
//console.log(str3);

//console.log("1" + 2);//12
//console.log(1 + "2");//12
//console.log("1" + 2 + 2);//122 //if string is in first position all would be trated as string
//console.log(1 + "2" + "2");//122
//console.log(1 + 2 + "2");//32  //if number is in first position it will perform its operation and then display string value

//console.log(true); //true
//console.log(+true); // 1 //because true is a boolean value
//console.log(+""); // 0 //not preferred

let num1,num2,num3
num1= num2 =num3 =2+2 // 4 //not preferred since code readability is the priority
// console.log(num3);//4

let gameCounter = 100
// gameCounter++
// console.log(gameCounter);// 101 // postfix
++gameCounter
console.log(gameCounter);// 101 //prefix

//  link to study conversion:https://tc39.es/ecma262/2023/#sec-type-conversion