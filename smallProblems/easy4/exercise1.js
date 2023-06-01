// Write a function that takes a floating point number representing an angle
// between 0 and 360 degrees and returns a string representing that angle in
// degrees, minutes, and seconds. You should use a degree symbol (˚) to
// represent degrees, a single quote (') to represent minutes, and a double
// quote (") to represent seconds. There are 60 minutes in a degree, and 60
// seconds in a minute.

const DMS_SUBUNIT_CONVERSION = 60;
const DEGREE_LIMIT = 360;
const SECONDS_IN_DEGREES = 3600;

// Examples:

dms(30);           // 30°00'00"
dms(76.73);        // 76°43'48"
dms(254.6);        // 254°35'59"
dms(93.034773);    // 93°02'05"
dms(0);            // 0°00'00"
dms(360);          // 360°00'00" or 0°00'00"
dms(-1);           // 359°00'00"
dms(400);          // 40°00'00"
dms(-40);          // 320°00'00"
dms(-420);         // 300°00'00"

// Note: your results may differ slightly depending on how you round values,
// but should generally be within a second or two of the results shown.

function padZeroes(number) {
  return number > 9 ? String(number) : `0${number}`;
}

function divMod(value, divide) {
  return [Math.floor(value / divide), Math.floor(value % divide)];
}

/*
// original
function dms(angle) {
  const totalSeconds = (angle % 360) * SECONDS_IN_DEGREES;
  let degrees;
  let minutes;
  let seconds;

  [minutes, seconds] = divMod(totalSeconds, DMS_SUBUNIT_CONVERSION);
  [degrees, minutes] = divMod(minutes, DMS_SUBUNIT_CONVERSION);

  console.log(`${degrees}°${padZeroes(minutes)}'${padZeroes(seconds)}"`);
}
*/

// Further exploration
// The current solution implementation only works with positive numbers in the
// range of 0 to 360 (inclusive). Can you refactor it so that it works with any
// positive or negative number?

function dms(angle) {
  angle = DEGREE_LIMIT + (angle % DEGREE_LIMIT);

  const totalSeconds = (angle % DEGREE_LIMIT) * SECONDS_IN_DEGREES;
  let degrees, minutes, seconds;

  [minutes, seconds] = divMod(totalSeconds, DMS_SUBUNIT_CONVERSION);
  [degrees, minutes] = divMod(minutes, DMS_SUBUNIT_CONVERSION);

  console.log(`${degrees}°${padZeroes(minutes)}'${padZeroes(seconds)}"`);
}
