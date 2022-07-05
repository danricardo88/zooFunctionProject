const data = require('../data/zoo_data');

const { employees, species } = data;

function getOldestFromFirstSpecies(id) {
  const bicinho = employees
    .find((ids) => ids.id === id).responsibleFor[0];
  const ObjEspecie = species
    .find((specie) => specie.id === bicinho).residents
    .reduce((acc, item) => (item.age > acc.age ? item : acc));

  return [ObjEspecie.name, ObjEspecie.sex, ObjEspecie.age];
}
module.exports = getOldestFromFirstSpecies;
