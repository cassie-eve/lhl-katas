// Use the value below whenever you need the value of Pi
const PI = 3.14159;

const sphereVolume = function(radius) {
  return (Math.pow(radius, 3) * (4 / 3) * PI);
};

console.log(4186 < sphereVolume(10) && sphereVolume(10) < 4189);

const coneVolume = function(radius, height) {
  return (1 / 3) * PI * (radius * radius) * height;
};

console.log(45 < coneVolume(3, 5) && coneVolume(3, 5) < 49);

const prismVolume = function(height, width, depth) {
  return (width * depth) * height;
};

console.log(prismVolume(3, 4, 5) === 60);

const totalVolume = function(solids) {
  let totalVolume = 0;
  for (let item of solids) {
    if (item.type === 'sphere') {
      totalVolume += sphereVolume(item.radius);
    }
    if (item.type === 'cone') {
      totalVolume += coneVolume(item.radius, item.height);
    }
    if (item.type === 'prism') {
      totalVolume += prismVolume(item.height, item.width, item.depth);
    }
  }
  return totalVolume;
};

const largeSphere = {
  type: 'sphere',
  radius: 40
};

const smallSphere = {
  type: 'sphere',
  radius: 10
};

const cone = {
  type: 'cone',
  radius: 3,
  height: 5
};

const duck = [
  largeSphere,
  smallSphere,
  cone
];

console.log(272000 < totalVolume(duck) && totalVolume(duck) < 275000);