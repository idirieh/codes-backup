// destructuring assignment (freeCodeCamp)
console.log("\n********destructuring assignment********\n");

let voxel = { x: 3.6, y: 7.4, z: 6.54 };

let x = voxel.x; // x = 3.6
let y = voxel.y; // y = 7.4
let z = voxel.z; // z = 6.54

const { x: a, y: b, z: c } = voxel; // a = 3.6, b = 7.4, c = 6.54 (same as above)

const AVG_TEMPERATURE = {
  today: 77.5,
  tomorrow: 79,
};

function getTempOfTmrw(avgtemperature) {
  "user strict";
  const { tomorrow: tempOfTomorrow } = avgtemperature;
  return tempOfTomorrow;
}

console.log(getTempOfTmrw(AVG_TEMPERATURE));

// another example

const LOCAL_FORCAST = {
  today: { min: 31, max: 43 },
  tomorrow: { man: 30, max: 41 },
};

function getMaxOfTmrw(forcast) {
  "use strict";
  const {
    tomorrow: { max: maxOfTomorrow },
  } = forcast;
  return maxOfTomorrow;
}

console.log(getMaxOfTmrw(LOCAL_FORCAST));

// using dest. asgmt. to arrays

const [e, f, , g] = [1, 2, 3, 4];
console.log(e, f, g); // e = 1, f = 2, g = 4

// swap the values
let h = 8,
  i = 6;

(() => {
  "use strict";
  [h, i] = [i, h];
})();

console.log(h, i);

// using dest. asgmt. and rest operator
const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function removeFristTwo(list) {
  const [, , ...arr] = [...list];
  return arr;
}

console.log(removeFristTwo(source));

// using dest.asgmt. as arguments

const stats = {
  max: 56.78,
  standard_dev: 4.34,
  median: 34.54,
  mode: 23.87,
  min: -0.75,
  average: 35.85,
};

// function half({ max, min }) {
//   return (max + min) / 2.0;
// }

// same as the above function but this way is from freeCodeCamp

// const half = (function () {
//   return function half(stats) {
//     return (stats.max + stats.min) / 2.0;
//   };
// })();

// same as the above but with dest. (very useful in APIs)
const half = (function () {
  return function half({ max, min }) {
    return (max + min) / 2.0;
  };
})();

console.log(half(stats));

// filling function args in objects

// const createPerson = (name, age, gender) => {
//   return {
//     name: name,
//     age: age,
//     gender: gender,
//   };
// };

// same as the above example
const createPerson = (name, age, gender) => ({ name, age, gender });

console.log(createPerson("Ahmed", 22, "male"));

// simple way to add function as object prop
const bicycle = {
  gear: 2,
  setGear(newGear) {
    "use strict";
    this.gear = newGear;
  },
};

bicycle.setGear(4);
console.log(bicycle.gear);
