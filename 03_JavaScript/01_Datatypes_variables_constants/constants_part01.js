const PI = 3.1415;
const radius = 6;
const height = 12;

// volume of a cone and cylindar

const volCone = (PI * radius ** 2 * height) / 3;

const volCyld = PI * radius ** 2 * height;

console.log(`Volume of the cone is : ${Math.round(volCone)}cb.cm.(approx.)\nVolume of the cylindar is : ${Math.round(volCyld)}cb.cm.(approx.)`);

radius = 5;
height = 15;

volCone = (PI * radius ** 2 * height) / 3;
volCyld = PI * radius ** 2 * height;

console.log(`Volume of the cone is : ${Math.round(volCone)}cb.cm.(approx.)\nVolume of the cylindar is : ${Math.round(volCyld)}cb.cm.(approx.)`);