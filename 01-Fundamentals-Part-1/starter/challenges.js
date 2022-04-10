/*
Coding Challenge #1
Mark and John are trying to compare their BMI (Body Mass Index), which is
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
m tall.
*/

console.log("DATA 1");
let massMark = 78;
let heightMark = 1.69;
let massJhon = 92;
let heightJhon = 1.95;
let bmiMark = (massMark / heightMark ** 2).toFixed(1);
let bmiJhon = (massJhon / (heightJhon * heightJhon)).toFixed(1);
let markHigherBMI = bmiMark > bmiJhon;
console.log(bmiMark, bmiJhon, markHigherBMI);
console.log("------------");
// console.log("DATA 2");
// massMark = 95;
// heightMark = 1.88;
// massJhon = 85;
// heightJhon = 1.76;
// bmiMark = massMark / heightMark ** 2;
// bmiJhon = massJhon / (heightJhon * heightJhon);
// markHigherBMI = bmiMark > bmiJhon;
// console.log(bmiMark, bmiJhon, markHigherBMI);

// Coding Challenge #2
// Use the BMI example from Challenge #1, and the code you already wrote, and
// improve it.
// Your tasks:
// 1. Print a nice output to the console, saying who has the higher BMI. The message
// is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
// 2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
// BMI (28.3) is higher than John's (23.9)!"
// Hint: Use an if/else statement �

if (bmiMark > bmiJhon) {
  console.log(`Mark's BMI (${bmiMark}) is higher than John's (${bmiJhon})!`);
} else {
  console.log(`John's BMI (${bmiJhon}) is higher than Mark's (${bmiMark})! `);
}

let test = "123";
console.log(test);

//Challenge 3
console.log("--------------------");
const averageDolphins = (96 + 108 + 100) / 3;
const averageKoalas = (96 + 108 + 100) / 3;
const minScore = 100;
console.log(`Average: Dolphins ${averageDolphins}, Koalas ${averageKoalas}`);
if (averageDolphins >= minScore || averageKoalas >= 100) {
  if (averageDolphins === averageKoalas) {
    console.log("Draw");
  } else if (averageDolphins > averageKoalas) {
    console.log("The winner is Dolphins");
  } else {
    console.log("The winner is Koalas");
  }
} else {
  console.log("None is the winner ");
}

// challenge 4
let bill = 40;
let tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value
${bill + tip}`);
