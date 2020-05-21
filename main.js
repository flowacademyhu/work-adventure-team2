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
console.log('Your options:\n 1: Southwest;\n 2: South;\n 3: Southeast;\n 4: West;\n 6: East;\n 7: Northwest;\n 8: North;\n 9: Northeast.\n');
console.log('Fésűs Éva: A büszke tölgyfa\n');
console.log('1/25.  Volt egyszer a köröskörül erdőben egy sudár, fiatal tölgyfa. Kék ég felé nyújtózkodott, lombjain át arany napfényt szitálgatott, és erős gyökerével a föld minden erejét magába szívta. Ő volt a legszebb az erdőn.');

while (location.x !== 4 || location.y !== 4) {
  const dir = input.inputFromNumPad();
  navigation.move(location, dir);
  output.mapPrinting(location, map);
  output.print(location, map);
  map.mapOut[location.y][location.x] = ' ';
}
console.log('\nVége!');
