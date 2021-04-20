const service = require('./services');

async function main() {
  try {
    const names = [];
    const result = await service.getPeople('a');
    console.time('Forof');
    for (person of result.results) {
      names.push(person.name);
    }
    console.timeEnd('Forof');
    console.log(`Names`, names);
  } catch (error) {
    console.log('Internal Error', error);
  }
}

main();
