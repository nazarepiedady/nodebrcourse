const service = require('./services');

async function main() {
  try {
    const names = [];
    const result = await service.getPeople('a');
    for (let i = 0; i <= result.results.length - 1; i++) {
      const person = result.results[i];
      names.push(person.name);
    }
    console.log(`Names`, names);
  } catch (error) {
    console.log('Internal Error', error);
  }
}
