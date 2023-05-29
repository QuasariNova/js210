// As seen in the previous exercise, the time of day can be represented as the
// number of minutes before or after midnight. If the number of minutes is
// positive, the time is after midnight. If the number of minutes is negative,
// the time is before midnight.

// The two functions below do the reverse of the previous exercise. They take a
// 24-hour time argument and return the number of minutes before or after
// midnight, respectively. Both functions should return a value between 0 and
// 1439 (inclusive). Refactor the functions using the Date object.

const MILLISECONDS_PER_MINUTE = 60000;
const MINUTES_PER_DAY = 60 * 24;

const afterMidnight = function afterMidnight(timeString) {
  const midnight = new Date('May 29, 2023 00:00:00')
  const time = new Date(`May 29, 2023 ${timeString}:00`)

  let millis = time.getTime() - midnight.getTime();
  return millis / MILLISECONDS_PER_MINUTE;
}

const beforeMidnight = function beforeMidnight(timeString) {
  let time = afterMidnight(timeString);
  if (time === 0) return 0;

  return MINUTES_PER_DAY - time;
}

// Examples:

afterMidnight('00:00');       // 0
beforeMidnight('00:00');      // 0
afterMidnight('12:34');       // 754
beforeMidnight('12:34');      // 686
