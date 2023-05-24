// Write a password guessing program that tracks how many times the user enters
// the wrong password. If the user enters the password wrong three times, log
// 'You have been denied access.' and terminate the program. If the password is
// correct, log 'You have successfully logged in.' and end the program.

// I am using node instead of brower, so readline-sync instead of prompt.

const PASSWORD = 'password';
const rlSync = require('readline-sync');

let attempts = 0;

for(; attempts < 3; ++attempts) {
  let guess = rlSync.question('What is the password: ');
  if (guess === PASSWORD) break;
}

if (attempts === 3) {
  console.log('You have been denied acces.');
} else {
  console.log('You have successfully logged in.');
}
