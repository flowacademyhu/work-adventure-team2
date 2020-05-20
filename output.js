const print = (location, map) => {
  console.log(map.map[location.y][location.x].label + ' mezőben állsz most.\n');
  console.log(map.map[location.y][location.x].text);
};

module.exports = {
  print
};
