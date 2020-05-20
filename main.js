const input = require('./input');
const navigation = require('./navigation');
// const output = require('./output');
const map = require('./map');

const location = {
  x: 0,
  y: 0
};
console.log('Your options:\n 1: Southwest;\n 2: South;\n 3: Southeast;\n 4: West;\n 6: East;\n 7: Northwest;\n 8: North;\n 9: Northeast.');

console.log('Fésűs Éva: A büszke tölgyfa');

while (location.x !== 4 || location.y !== 4) {
  const dir = input.inputFromNumPad();
  navigation.move(location, dir);
  console.log(map.map[location.y][location.x].text);
  // console.log(location.y, location.x);
}
console.log('Vége!');
