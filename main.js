const input = require('./input');
const navigation = require('./navigation');
const map = require('./map');
const output = require('./output');

const location = {
  x: 0,
  y: 0
};
output.mapPrinting(location, map);
map.mapOut[location.y][location.x] = ' ';

if (location.x === 0 && location.y === 0) {
  console.log('Fésűs Éva: A büszke tölgyfa\n');
  console.log('1/25.  Volt egyszer a köröskörül erdőben egy sudár, fiatal tölgyfa. Kék ég felé nyújtózkodott, lombjain át arany napfényt szitálgatott, és erős gyökerével a föld minden erejét magába szívta. Ő volt a legszebb az erdőn.');
}

while (location.x !== 4 || location.y !== 4) {
  console.log('\n\nChoose a direction:\n 1:  Southwest;  2:  South;  3:  Southeast;  4:  West;  6:  East;  7:  Northwest;  8:  North;  9:  Northeast.\n');

  const dir = input.inputFromNumPad();
  navigation.move(location, dir);
  output.mapPrinting(location, map);
  output.print(location, map);
  map.mapOut[location.y][location.x] = ' ';
}
console.log('\nVége!');
