const data = require('../data/zoo_data');

const { species } = data;

function getAnimalsOlderThan(animal, age) {
  const buscaAnimal = species.find((animals) => animals.name === animal);
  return buscaAnimal.residents.every((resident) => resident.age >= age);
}

module.exports = getAnimalsOlderThan;
