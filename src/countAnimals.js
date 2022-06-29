const data = require('../data/zoo_data');

const { species } = data;

function countAnimals(animal) {
  const qnt = {};
  if (!animal) {
    species.forEach((pet) => {
      qnt[pet.name] = pet.residents.length;
    });
    return qnt;
  }
  if (!animal.sex) {
    return species.find((pet) => pet.name === animal.specie).residents.length;
  }
  return species.find((pet) => pet.name === animal.specie).residents
    .filter((pet) => pet.sex === animal.sex).length;
}

module.exports = countAnimals;
