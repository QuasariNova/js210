function rot13Character(character) {
  const ALPHA_START = 'a'.charCodeAt(0);
  const LETTERS = 26;
  const ROTATE = 13;

  let lowerCase = character.toLowerCase();

  if (!/[a-z]/.exec(lowerCase)) {
    return character;
  }

  let offset = lowerCase.charCodeAt(0) - ALPHA_START;
  offset = (offset + ROTATE) % LETTERS;

  let newCharacter = String.fromCharCode(ALPHA_START + offset);
  if (/[A-Z]/.exec(character)) {
    newCharacter = newCharacter.toUpperCase();
  }

  return newCharacter;
}

function rot13(string) {
  let encoded = '';

  for(let i = 0; i < string.length; ++i) {
    encoded += rot13Character(string[i]);
  }

  return encoded;
}
