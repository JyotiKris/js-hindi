const name = "jyoti"
const repoCount = 50
console.log(name + repoCount + " Value"); //jyoti50 Value //outdated(not recommended)

// backtix for modern Time, which consists of String Interpolation....where we create placeholders where variables directly injected 
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);
//Hello my name is jyoti and my repo count is 50

const gameName = new String('jyotii-hc-com')
console.log(gameName[0]); //j
console.log(gameName.__proto__); //{}

console.log(gameName.length); //5
console.log(gameName.toLocaleUpperCase()); // JYOTII-HC
console.log(gameName.charAt(2)); //o
console.log(gameName.indexOf('t'));  //3

//slicing
// const newString = gameName.subString(0, 4)  //0=starting number, 4= ending number //substring does not accepts negative value
// console.log(newString);// jyot //j=0 y=1 o=2 t=3 and the 4th value will not be included

const anothertString = gameName.slice(-8, 4) //slicing accepts negative values
console.log(anothertString); //yot  //started from back


const newStringOne = "   jyoti   "
console.log(newStringOne)  //   jyoti  // trim removes the extra spaces 
console.log(newStringOne.trim()) //jyoti

const url = "http:jyoti.com/jyoti%20patel" // "http:jyoti.com/jyoti patel" will be read as "http:jyoti.com/jyoti%20patel" in which space is replaced by some value by browser
console.log(url.replace('%20', '-')) // from '%20' to '-'     // http:jyoti.com/jyoti-patel

//we can also ask questions

console.log(url.includes('jyoti')) //true
console.log(url.includes('patel')) //true
console.log(url.includes('june')) //false

console.log(gameName.split('-')) //'jyotii', 'hc', 'com'
