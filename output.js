const table = require('table');

const config = {
  columns: {
    0: {
      alignment: 'center',
      width: 5
    },
    1: {
      alignment: 'center',
      width: 5
    },
    2: {
      alignment: 'center',
      width: 5
    },
    3: {
      alignment: 'center',
      width: 5
    },
    4: {
      alignment: 'center',
      width: 5
    }
  }
};

const print = (location, map) => {
  // console.log(map.map[location.y][location.x].label + ' mezőben állsz most.\n');
  console.log('Your options:\n 1: Southwest;\n 2: South;\n 3: Southeast;\n 4: West;\n 6: East;\n 7: Northwest;\n 8: North;\n 9: Northeast.');
  console.log(map.map[location.y][location.x].text);
};

const mapPrinting = (location, map) => {
  process.stdout.write("\033[2J");
  map.mapOut[location.y][location.x] = ' x';
  console.log(table.table(map.mapOut));
};

module.exports = {
  print,
  mapPrinting
};
