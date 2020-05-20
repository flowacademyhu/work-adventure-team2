const table = require('table');

const print = (location, map) => {
  console.log(map.map[location.y][location.x].label + ' mezőben állsz most.\n');
  console.log(map.map[location.y][location.x].text);
};

const mapPrinting = (location, map) => {
  
  process.stdout.write('\033[2J');
  map.mapOut[location.y][location.x] = 'x';
  console.log(table.table(map.mapOut));
};

module.exports = {
  print,
  mapPrinting
};
