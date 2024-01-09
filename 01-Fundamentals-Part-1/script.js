
////////////////////////////////////
// Linking a JavaScript File
/*
let js = "amazing";
if (js === "amazing")  alert ('hello');
console.log(40 + 8 + 23 - 10);
*/

////////////////////////////////////
// Data Types
/*
let b = true;
console.log(b);

console.log(typeof true);
console.log(typeof b);
console.log(typeof 23);
console.log(typeof 'Jones');

let year;
console.log(year);
console.log(typeof year);

console.log(null);
console.log(typeof null); // object
// this is a legacy bug
*/

////////////////////////////////////
// Strings and Template Literals
/*
const firstName = 'Jonas';
const job = 'teacher';
const birthYear = 1991;
const year = 2037;

const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(jonasNew);

// ` deal with multi lines representation
console.log(`String
multiple
lines`)
*/

////////////////////////////////////
// Type Conversion 

const inputYear = '1991';
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number('Jonas'));
console.log(typeof NaN); // NaN is a number

console.log(String(23), 23);

// Coercion

// + trigger coerce to string
console.log(`I am ` + 23 + ` years old`);
// others trigger coerce to number
console.log(`23` - `10` - 3);
console.log(`23` * 2);
console.log(`23` / 2);

// guess n
let n = '1' + 1;
n = n - 1;
console.log(n);


