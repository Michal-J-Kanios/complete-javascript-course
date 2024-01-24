//Coding Challenge 1 - BMI Index
/*Mark and John are trying to compare their BMI (Body Mass Index), which is 
calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg 
and height in meter).
Your tasks:
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both 
versions)
3. Create a Boolean variable 'markHigherBMI' containing information about 
whether Mark has a higher BMI than John.
Test data:
§ Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 
m tall.
§ Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 
m tall*/

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

    let markHigherBMI = markBM > johnBM;

    console.log("DATA 1 TEST:");
    console.log(`JOHN: mass = ${johnMass} kg, height = ${johnHeight} m, bmi = ${johnBM}`);
    console.log(`MARK: mass = ${markMass} kg, height = ${markHeight} m, bmi = ${markBM}`);
    console.log(markHigherBMI);