let x = "123"
let x1 = Number(x)  // it convert string into number
console.log(x1)

//what happen when we convert string which contain alphanumeric value => it give NaN(not a number)
let string1 = "12nikhil"
let number1 = Number(string1);
console.log(number1); // NaN

let bool1 = true
console.log(Number(bool1)); // o/p = 1

let string2 = null
let number2 = Number(string2)
console.log(number2); // it give output 1 but it's datatype of null remain same that is object
console.log(typeof string2);

let a1
console.log(Number(a1)); // it give output NaN => if we convert undefined into number it give NaN

//THERE ARE MANY TYPE OF TYPECAST OR CONVERSION OF DATATYPE
// Number(), String(), Boolean()

let a2 = 1
console.log(Boolean(a2)); // o/p => ture
let a3 = "nikhil"
console.log(Boolean(a3)); //o/p=> true
let a4 = ""
console.log(Boolean(a4)); // 0/p => false