const service = require('./services');

async function main() {
  try {
    const names = [];
    const { results } = await service.getPeople('a');
    results.forEach(function (item) {
      names.push(item.name);
    });
    console.log('Names:', names);
  } catch (error) {
    console.error(`An error was found`, error);
  }
}

main();
