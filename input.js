const readline = require('readline-sync');

const inputFromNumPad = () => {
  const input = readline.question('\n');
  /* while (input < '1' || input > '9' || input === '5' || input !== '[B' || input !== '[D' || input !== '[C' || input !== '[A' ) {
    input = readline.question('\nNumber is not valid. Please choose another number then press enter! ( ^C to quit)');
  } */
  return input;
};

module.exports = {
  inputFromNumPad
};
