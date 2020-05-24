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
    case '1':
      if (location.x !== 0 && location.y !== 4) {
        location.x -= 1;
        location.y += 1;
        return location;
      }
      break;
    case '2':
      if (location.y !== 4) {
        location.y += 1;
        return location;
      }
      break;
    case '[B':
      if (location.y !== 4) {
        location.y += 1;
        return location;
      }
      break;
    case '3':
      if (location.x !== 4 && location.y !== 4) {
        location.x += 1;
        location.y += 1;
        return location;
      }
      break;
    case '4':
      if (location.x !== 0) {
        location.x -= 1;
        return location;
      }
      break;
    case '[D':
      if (location.x !== 0) {
        location.x -= 1;
        return location;
      }
      break;
    case '6':
      if (location.x !== 4) {
        location.x += 1;
        return location;
      }
      break;
    case '[C':
      if (location.x !== 4) {
        location.x += 1;
        return location;
      }
      break;
    case '7':
      if (location.x !== 0 && location.y !== 0) {
        location.x -= 1;
        location.y -= 1;
        return location;
      }
      break;
    case '8':
      if (location.y !== 0) {
        location.y -= 1;
        return location;
      }
      break;
    case '[A':
      if (location.y !== 0) {
        location.y -= 1;
        return location;
      }
      break;
    case '9':
      if (location.x !== 4 && location.y !== 0) {
        location.x += 1;
        location.y -= 1;
        return location;
      }
      break;
    default:
      console.log('Adjon meg egy helyes irányt!');
  }
};

module.exports = {
  move
};
