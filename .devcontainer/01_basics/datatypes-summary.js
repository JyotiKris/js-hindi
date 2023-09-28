// Primitive

// 7 types : String , Number , Boolean , Undefined , Symbol , BigInt 

const score = 100  // datatype = number
const scoreValue = 100.3 

const isLoggedIn = false
const outsideTemp = null // datatpe = object
let userEmail;

const id = Symbol('123') // datatype = symbol
const anotherId = ('123') //datatype = string

//console.log(id === anotherId) //false

const bigNumber = 54456632444555// datatype = number



// Reference (Non Primitive)

// Array , Objects // Functions


const heroes = ["shaktiman" , "naagraj" , "doga"];  // datatype = object

let myObj = {             // datatype = object 
   // NamedNodeMap :  "jyoti",
    //age : 23
}

const myfunction = function() {   // datatype = function // has to be object function
    console.log ("Hello world");
}

console.log(typeof myfunction);

// link to study :
// https://262.ecma-international.org/5.1/#sec-11.4.3