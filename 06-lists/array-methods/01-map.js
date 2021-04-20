const service = require('./services');

async function main() {
  try {
    const { results } = await service.getPeople('a');
    const names = results.map((item) => item.name);
    console.log('Names:', names);
  } catch (error) {
    console.error(`An error was found`);
  }
}

main();
