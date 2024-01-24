//Coding Challenge 2 - BMI Index
/*Use the BMI example from Challenge #1, and the code you already wrote, and 
improve it.
Your tasks:
1. Print a nice output to the console, saying who has the higher BMI. The message 
is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
BMI (28.3) is higher than John's (23.9)!"
Hint: Use an if/else statement */

let markMass;
let markHeight;

let johnMass;
let johnHeight;

//DATA 1
/*  markMass = 78;
    markHeight = 1.69;
    
    johnMass = 92;
    johnHeight = 1.95;
*/

//DATA 2
    markMass = 95;
    markHeight = 1.88;
    
    johnMass = 85;
    johnHeight = 1.76;

    let markBM = markMass/markHeight ** 2;
    let johnBM = johnMass/johnHeight ** 2;
    //let markHigherBMI = markBM > johnBM;

    console.log("DATA 1 TEST:");
    console.log(`JOHN: mass = ${johnMass} kg, height = ${johnHeight} m, bmi = ${johnBM}`);
    console.log(`MARK: mass = ${markMass} kg, height = ${markHeight} m, bmi = ${markBM}`);

    if(markBM > johnBM){
        console.log(`Mark's BMI (${markBM}) is higher than John's (${johnBM})!`);
    }
    else {
        console.log(`John's BMI (${markBM}) is higher than Mark's (${johnBM})!`);
    }