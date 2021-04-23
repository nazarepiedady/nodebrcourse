const { getPeople } = require('./services');

Array.prototype.cFilter = function (callback) {
  const list = [];

  for (index in this) {
    const item = this[idenx];
    const result = callback(item, index, this);
    if (!result) continue;
    list.push(item);
  }

  return list;
};

async function main() {
  try {
    const { results } = await getPeople('a');

    const familyLars = results.filter(function (item) {
      const result = item.name.toLowerCase().indexOf('lars') !== -1;
      return result;
    });

    const names = familyLars.map((person) => person.name);

    console.log(names);
  } catch (error) {
    console.log('There is a error', error);
  }
}

main();
