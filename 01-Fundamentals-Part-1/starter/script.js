/* VALUES AND VARIABLES
======================
let js = 'funky';
      if (js=='funky') alert('JS is funky!');
      let result = 40 + 8 + 23 - 10;
      console.log(result);

      console.log("Jonas");
      console.log(42);

      let firstName = "John";
      let lastName = "Cena";

      console.log(`AND HIS NAME IS ${firstName.toUpperCase()} ${lastName.toUpperCase()}!`)

      let PI = 3.1415;

      console.log(`The value of "pi" is ${PI}`);
========================*/



//DATA TYPES
/*===================

let javascriptIsFun = true; //boolean
console.log(javascriptIsFun);

console.log(typeof true); //check data type
console.log(typeof javascriptIsFun); //check data type
console.log(typeof "javascriptIsFun"); //check data type
console.log(typeof 23); //check data type


javascriptIsFun = "YES!"; //changing data type
console.log(typeof javascriptIsFun); //type changed from bool to string

let undefinizo; //undefined
console.log(undefinizo); //show undefined
console.log(typeof undefinizo); //check data type

let year; //undefined year
console.log(typeof year);
year = 2005;
console.log(typeof year);
================================*/



//LET CONST VAR
//==============
const birthYear = 2005; //cannot be empty
//birthYear = 1990; would be an error, because you cannot change const variables
var job = "programmer"; //var
job = "teacher";

marakasy = "Marakasy"; //js creates a property on the global object, avoid like a plague
console.log(marakasy); //never write a variable without declaring it


//==============



//ASSIGNMENTS
//Assignment 1:
//Declare variables called country, continent and population and assign their values according to your own country (population in millions).

const country = "Poland";
const continent = "Europe";
let population = 38500000;
console.log(`${country} is a country in ${continent} with the population of ${population}`);

//Assignment 2:
//Declare a variable called isIsland and set its value according to your country. The variable should hold a Boolean value. Also declare a variable language, but don't assign it any value yet.
//Log the types of isIsland, population, country and language to the console.

let isIsland = false;
let language;

console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);

//Assignment 3:
//Set the value of language to the language spoken where you live (some countries have multiple languages, but just choose one).
//Think about which variables should be const variables (which values will never change, and which might change?). Then, change these variables to const.
//Try to change one of the changed variables now, and observe what happens.

/*const isIsland = true;
isIsland = false;*/
language = "Polish";
