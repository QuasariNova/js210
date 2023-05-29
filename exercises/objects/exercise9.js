// We can use the number of minutes before or after midnight to represent the
// time of day. If the number of minutes is positive, the time is after
// midnight. If the number of minutes is negative, the time is before midnight.

const MILLISECONDS_PER_MINUTE = 60000;

const formatTime = function (date) {
  let hour = date.getHours();
  let minute = date.getMinutes();

  let hourString = hour > 9 ? String(hour) : `0${hour}`;
  let minuteString = minute > 9 ? String(minute) : `0${minute}`;

  return `${hourString}:${minuteString}`;
}

const timeOfDay = function(minutes) {
  const midnight = new Date('May 29, 2023 00:00:00');
  const newTime = new Date(midnight.valueOf() + MILLISECONDS_PER_MINUTE * minutes);

  return formatTime(newTime);
}

// Examples

timeOfDay(0);          // "00:00"
timeOfDay(-3);         // "23:57"
timeOfDay(35);         // "00:35"
timeOfDay(-1437);      // "00:03"
timeOfDay(3000);       // "02:00"
timeOfDay(800);        // "13:20"
timeOfDay(-4231);      // "01:29"
