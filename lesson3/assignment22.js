function rotLowerCharacter(lowerCaseChar, rotFactor) {
  const LOWERCASE_START = 'a'.charCodeAt(0);
  const LETTERS = 26;

  let code = lowerCaseChar.charCodeAt(0);
  let offset = code - LOWERCASE_START;
  let newOffset = (offset + rotFactor) % LETTERS;

  return String.fromCharCode(LOWERCASE_START + newOffset);
}

function rot13(string) {
  const ROT_FACTOR = 13;

  let encoded = '';
  for(let i = 0; i < string.length; ++i) {
    let character = string[i];

    if (character.match(/[a-z]/i)) {
      character = rotLowerCharacter(string[i].toLowerCase(), ROT_FACTOR);
    }

    if (string[i].match(/[A-Z]/)) character = character.toUpperCase();

    encoded += character
  }

  return encoded;
}
