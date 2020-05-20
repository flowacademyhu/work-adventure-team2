const readline = require('readline-sync');

const inputFromNumPad = () => {
  let input = readline.questionInt('\n');
  while (input < 1 || input > 9 || input === 5) {
    input = readline.questionInt('\nNumber is not valid. Please choose another number then press enter! ( ^C to quit)');
  }
  return input;
};

module.exports = {
  inputFromNumPad
};
