// Write a program to determine a student’s grade based on the average of three
// scores you get from the user. Use these rules to compute the grade:

//     If the average score is greater than or equal to 90 then the grade is 'A'
//     If the average score is greater than or equal to 70 and less than 90
//        then the grade is 'B'
//     If the average score is greater than or equal to 50 and less than 70
//        then the grade is 'C'
//     If the average score is less than 50 then the grade is 'F'

// You may assume that all input values are valid positive integers.

// I am using node instead of browser for speed, so readline-sync instead of
// prompt

const rlSync = require('readline-sync');
let scores = [];

for(let i = 1; i < 4; ++i) {
  score = Number(rlSync.question(`Enter score ${i}: `));
  scores.push(score);
}

let avgScore = scores.reduce((sum, value) => sum + value, 0) / 3;

let letterGrade = 'F';
if (avgScore >= 90) {
  letterGrade = 'A';
} else if (avgScore >= 70) {
  letterGrade = 'B';
} else if (avgScore >= 50) {
  letterGrade = 'C';
}

console.log('Based on the average of your 3 scores your letter grade is ' +
            `"${letterGrade}".`);
