const data = require('../data/zoo_data');

const { species } = data;

const pesqEspecies = () => species.reduce((acc, animal) => {
  acc[animal.location].push(animal.name);
  return acc;
}, { NE: [], NW: [], SE: [], SW: [] });

const getObjName = () => species.reduce((acc, animal) => {
  acc[animal.location].push({ [animal.name]: animal.residents.map(({ name }) => name) });
  return acc;
}, { NE: [], NW: [], SE: [], SW: [] });

const getObjNameOrdenado = () => species.reduce((acc, animal) => {
  acc[animal.location].push({ [animal.name]: animal.residents.map(({ name }) => name).sort() });
  return acc;
}, { NE: [], NW: [], SE: [], SW: [] });

const objSex = (sex) => species.reduce((acc, animal) => {
  const bicinho = animal.residents.reduce((acumulador, item) => {
    if (item.sex === sex) acumulador.push(item.name);
    return acumulador;
  }, []);
  acc[animal.location].push({ [animal.name]: bicinho });
  return acc;
}, { NE: [], NW: [], SE: [], SW: [] });

const objSexOrdenado = (sex) => species.reduce((acc, animal) => {
  const bicinho = animal.residents.reduce((acumulador, item) => {
    if (item.sex === sex) acumulador.push(item.name);
    return acumulador;
  }, []);
  acc[animal.location].push({ [animal.name]: bicinho.sort() });
  return acc;
}, { NE: [], NW: [], SE: [], SW: [] });

const includs = (options) => {
  if (Object.keys(options).length > 2) return objSexOrdenado(options.sex);
  if (Object.keys(options).includes('sex')) return objSex(options.sex);
  if (Object.keys(options).includes('sorted')) return getObjNameOrdenado();
  return getObjName();
};

function getAnimalMap(options) {
  if (options === undefined) return pesqEspecies();
  if (options.includeNames) return includs(options);
  return pesqEspecies();
}

module.exports = getAnimalMap;
