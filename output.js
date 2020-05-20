const table = require('table');

const print = (location, map) => {
  console.log(map.map[location.y][location.x].label + ' mezőben állsz most.\n');
  console.log(map.map[location.y][location.x].text);
};

const mapPrinting = (location) => {
  map.mapOut[location.y][location.x] = 'x';
};

module.exports = {
  print,
  mapPrinting
};
