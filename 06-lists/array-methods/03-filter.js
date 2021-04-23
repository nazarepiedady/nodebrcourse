const { getPeople } = require('./services');

async function main() {
  try {
    const { results } = await getPeople('a');
    const familyLars = results.filter(function (item) {
      const result = item.name.toLowerCase().indexOf('lars') !== -1;
      return result;
    });
  } catch (error) {
    console.log('There is a error', error);
  }
}

main();
