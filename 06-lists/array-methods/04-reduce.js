const { getPeople } = require('./services');

async function main() {
  try {
    const { results } = await getPeople('a');
    const weight = results.map((item) => parseInt(item.height));
    const total = weight.reduce((previous, next) => {
      return previous + next;
    });
    console.log('Total', total);
  } catch (error) {
    console.error('There is a error', error);
  }
}

main();
