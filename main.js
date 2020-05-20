const input = require('./input');
const navigation = require('./navigation');
// const output = require('./output');
const map = require('./map');

const location = {
  x: 0,
  y: 0
};
console.log('Fésűs Éva: A büszke tölgyfa');

while (location.x !== 4 || location.y !== 4) {
  const dir = input.inputFromNumPad();
  navigation.move(location, dir);
  console.log(map.map[location.y][location.x].text);
  // console.log(location.y, location.x);
}
console.log('Vége!');
