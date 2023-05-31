// Write a function that takes an array of numbers and returns an array with
// the same number of elements, but with each element's value being the running
// total from the original array.

// Examples:

runningTotal([2, 5, 13]);             // [2, 7, 20]
runningTotal([14, 11, 7, 15, 20]);    // [14, 25, 32, 47, 67]
runningTotal([3]);                    // [3]
runningTotal([]);                     // []

function runningSum(sum) {
  return function(num) {
    sum += num;
    return sum;
  };
}

function runningTotal(arrOfNums) {
  const nextSum = runningSum(0);

  console.log(arrOfNums.map((value) => nextSum(value)));
}
