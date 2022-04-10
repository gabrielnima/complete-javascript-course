// Values and variables
// let country = "Peru";
// let continent = "America";
// let population = 2000;

// console.log(country);

// console.log(continent);
// console.log(population);

// const person = {
//   name: "juan",
// };

// // when declared but no defined, type undefined
// console.log(person.lastName);
// // data types

// let isIsland = false;
let language;
// console.log(typeof isIsland);
// console.log(typeof population);
// console.log(typeof country);
// console.log(typeof language);

// const a = "hello";

// // let, const and var

language = "Spanish";
// const COUNTRY = "Peru";
// const CONTINENT = "America";
// const IS_ISLAND = false;
// // IS_ISLAND = true;

// basic operators
// console.log(population / 2);
// population += 1;
// console.log(population);
// console.log(population > 6);
// console.log(population < 33);
// const DESCRIPTION1 = `
//   ${country} is in
//   ${continent}, and its
//   ${population} million people speak ${language}
// `;
// console.log(DESCRIPTION1);

// if - else if
const COUNTRY = "Peru";
const CONTINENT = "America";
let population = 30;
const POPULATION_AVERAGE = 33;
if (population > POPULATION_AVERAGE) {
  console.log(`${COUNTRY}'s population is above average`);
} else {
  console.log(
    `${COUNTRY}'S population is ${
      POPULATION_AVERAGE - population
    } million below average`
  );
}

// Type Conversion and Coercion
//1. Predict the result of these 5 operations without executing them:
"9" - "5"; // 4
"19" - "13" + "17"; // '617'
"19" - "13" + 17; // 23
"123" < 57; // false
5 + 6 + "4" + 9 - 4 - 2; //'114' + 9 = '1149' - 4 = 1145 - 2 = 1143
//2. Execute the operations to check if you were right
