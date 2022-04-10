// Code Challenge #1
"use strict";

// const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

// const checkWinner = (avgDolphins, avgKoalas) => {
//   if (avgDolphins >= avgKoalas * 2) {
//     return `Dolphins win (${avgDolphins + " vs." + avgKoalas})`;
//   } else if (avgKoalas >= avgDolphins * 2) {
//     return `Koalas win (${avgKoalas + " vs." + avgDolphins})`;
//   } else return `No winner`;
// };

// const dolphins = calcAverage(85, 54, 41);
// const koalas = calcAverage(23, 34, 27);
// console.log(checkWinner(dolphins, koalas));

// function greaterThan(n) {
//   return (m) => m > n;
// }
// let greaterThan10 = greaterThan(10);
// console.log(greaterThan10(11));

// Object Methods

const jonas = {
  firstName: "Jonas",
  lastName: "Schmedtmann",
  birthYeah: 1991,
  job: "teacher",
  friends: ["Michael", "Peter", "Steven"],
  hasDriversLicense: true,

  calcAge: function () {
    this.age = 2037 - this.birthYeah;
    return this.age;
  },

  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()}-year old ${
      this.job
    }, and he ${
      this.hasDriversLicense
        ? `has a driver license`
        : `hasn't driver's license`
    }`;
  },
};

// Challenge
// "Jonas is a 46-year old teacher, and he has a driver's license"
console.log(jonas.getSummary());
