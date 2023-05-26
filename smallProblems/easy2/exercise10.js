// Write a function that takes a year as input and returns the century. The
// return value should be a string that begins with the century number, and
// ends with 'st', 'nd', 'rd', or 'th' as appropriate for that number.

// New centuries begin in years that end with 01. So, the years 1901 - 2000
// comprise the 20th century.

// Examples:

century(2000);        // "20th"
century(2001);        // "21st"
century(1965);        // "20th"
century(256);         // "3rd"
century(5);           // "1st"
century(10103);       // "102nd"
century(1052);        // "11th"
century(1127);        // "12th"
century(11201);       // "113th"

function century(year) {
  const cent = Math.floor((year - 1) / 100 + 1);
  const onesDigit = cent % 10;
  const tensDigit = ((cent - onesDigit) / 10) % 10;

  if (tensDigit !== 1) {
    if (onesDigit === 1) return cent + 'st';
    if (onesDigit === 2) return cent + 'nd';
    if (onesDigit === 3) return cent + 'rd';
  }

  return cent + 'th';
}
