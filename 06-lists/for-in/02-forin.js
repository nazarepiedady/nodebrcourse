const service = require('./services');

async function main() {
  try {
    const names = [];
    const result = await service.getPeople('a');

    console.log(`Names`, names);
  } catch (error) {
    console.log('Internal Error', error);
  }
}

main();
