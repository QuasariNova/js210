// Write a function that will take a short line of text, and write it to the
// console log within a box.

// Examples:

logInBox('To boldly go where no one has gone before.');

// will log on the console:

// +--------------------------------------------+
// |                                            |
// | To boldly go where no one has gone before. |
// |                                            |
// +--------------------------------------------+

logInBox('');
// +--+
// |  |
// |  |
// |  |
// +--+

// You may assume that the output will always fit in your browser window.

function logInBox(string) {
  let border = `+-${'-'.repeat(string.length)}-+`;
  let spacer = `| ${' '.repeat(string.length)} |`;
  let logger = `| ${string} |`;

  console.log([border, spacer, logger, spacer, border].join('\n'));
}

// I'll come back and further explore this later.
