// #Primitive(Call by value)
// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

// Javascript is Dynamically Typed

const score = 100
const ScoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let usermail;

const id = Symbol("123")
const anotherId = Symbol("123")

console.log(id === anotherId);

const bigNumber = 56893214758965231546987554865416941981964596n
// end with n to make it bigINT
console.log(typeof bigNumber);

console.table([score, ScoreValue, isLoggedIn, outsideTemp, usermail, id, anotherId, bigNumber])
console.log(typeof score, typeof ScoreValue, typeof isLoggedIn, typeof outsideTemp, typeof usermail, typeof id, typeof anotherId, typeof bigNumber)


// Reference Type(Non Primitive)
// Array, Objects, Functions

const heros = ["Kaustubh", "Manthan", "Om"];  //This Is Array

let myObj = {
    name:"kaustubh",   //This Is Object
    age:22
}

const myFunction = function(){
    console.log("Hello World");
}

console.table([heros, myObj, myFunction])
console.log(typeof outsideTemp);
console.log(typeof myFunction);  //output is function by it is called as object function

// All non-primitive datatypes have typeof object


