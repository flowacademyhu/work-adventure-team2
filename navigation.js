/* So, if we use the num pad as a navigation system,
number 5 (#5) is the starting point.
North = #8, South = #2, North-West = #7 etc.
*/
/*
Location = {
  x: #,
  y: #
}
*/
const move = (location, direction) => { // move return's with the new location
  switch (direction) {
    case 1:
      location.x -= 1;
      location.y -= 1;
      return location;
    case 2:
      location.y -= 1;
      return location;
    case 3:
      location.x += 1;
      location.y -= 1;
      return location;
    case 4:
      location.x -= 1;
      return location;
    case 6:
      location.x += 1;
      return location;
    case 7:
      location.x -= 1;
      location.y += 1;
      return location;
    case 8:
      location.y += 1;
      return location;
    case 9:
      location.x += 1;
      location.y += 1;
      return location;
    default:
      console.log('Adjon meg egy helyes irányt!');
  }
};

module.exports = {
  move
};
