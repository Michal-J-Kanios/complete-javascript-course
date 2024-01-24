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



/*LET CONST VAR
==============
const birthYear = 2005; //cannot be empty
//birthYear = 1990; would be an error, because you cannot change const variables
var job = "programmer"; //var
job = "teacher";

marakasy = "Marakasy"; //js creates a property on the global object, avoid like a plague
console.log(marakasy); //never write a variable without declaring it


==============*/

/*BASIC OPERATORS
==============
const now = 2037;
//const ageJonas = 2037 - 1991;
//const ageSarah = 2037 - 2018;
const ageJonas = now;
const ageSarah = now;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 2 ** 3);
// 2 ** 3 means 2 to the power of 3 (2 * 2 * 2)

const firstName = 'Jonas';
const lastName = 'Schmedtmann';
console.log(firstName + " " + lastName);

let x = 10 + 5;
x += 10;
x *= 4;
x++;
x--;
x--;
console.log(x);

//Comparison Operators
console.log(ageJonas > ageSarah);
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018);
===============*/



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

//Assignment 4:
//If your country split in half, and each half would contain half the population, then how many people would live in each half?
//Increase the population of your country by 1 and log the result to the console.
//Finland has a population of 6 million. Does your country have more people than Finland?
//The average population of a country is 33 million people. Does you country have less people than the average country?
//Based on the variables you created, create a new variable description which contains a string with this format: 'Portugal is in Europe, and its 11 million people speak portuguese'.

let halfPop = population / 2;
console.log(`Half of Poland would have a population of ${halfPop}`);
//ewentualnie console.log(population / 2);

population++;
console.log(population);

console.log(population > 6);

const lessThanAveragePop = population <= 33;
console.log(lessThanAveragePop);

let description = `${country} is in ${continent}, and its ${population} people speak ${language}.`;
console.log(description);