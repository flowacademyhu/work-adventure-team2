const readline = require('readline-sync');

const inputFromNumPad = () => {
  console.log('Your options:\n 1: Southwest;\n 2: South;\n 3: Southeast;\n 4: West;\n 6: East;\n 7: Northwest;\n 8: North;\n 9: Northeast.');
  let input = readline.questionInt('\nChoose a number then press enter! ( ^C to quit)');
  while (input < 1 || input > 9 || input === 5) {
    input = readline.questionInt('\nNumber is not valid. Please choose another number then press enter! ( ^C to quit)');
  }
  console.log('\nYou chose number ' + input + '.');
  return input;
};

module.exports = {
  inputFromNumPad
};
