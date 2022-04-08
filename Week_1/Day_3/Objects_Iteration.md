# How to Iterate over Array

create an object:
```javascript
var planetMoons = {
  mercury: 0,
  venus: 0,
  earth: 1,
  mars: 2,
  jupiter: 67,
  saturn: 62,
  uranus: 27,
  neptune: 14
};
```
To look at all the options:

```javascript
for (var planet in planetMoons) {
  var numberOfMoons = planetMoons[planet];
  console.log("Planet: " + planet + ", # of Moons: " + numberOfMoons);
}
```

For longer codes that might have properties inherited from other areas, add:

```javascript
for (var planet in planetMoons) {
  //additional filted for object properties
  if (planeetMoons.hasOwnProperty(planet)) {
    //rest of code here
  }
};
```