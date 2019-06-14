var buildPlanet = function(name, position, type) {
  var planet = {};
  planet.name = name;
  planet.position = position;
  planet.type = type;
  return planet;
};
var planet1 = buildPlanet("Jupiter", 5, "Gas Giant");
console.log(planet1.name);
console.log(planet1.position);
console.log(planet1.type);

planet1 = new Planet("Jupiter", 5, "Gas Giant");
planet2 = new Planet("Neptune", 8, "Ice Giant");

var Planet = function(name, position, type) {
  var planet = {};
  planet.name = name;
  planet.position = position;
  planet.type = type;
  return planet;
};

//  Planet is constructor if Planet is a function
