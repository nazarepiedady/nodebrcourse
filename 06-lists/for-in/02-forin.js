const service = require('./services');

async function main() {
  try {
    const names = [];
    const result = await service.getPeople('a');
    console.time('Forin');
    for (let i in result.results) {
      const person = result.results[i];
      names.push(person.name);
    }
    console.timeEnd('Forin');
    console.log(`Names`, names);
  } catch (error) {
    console.log('Internal Error', error);
  }
}

main();
