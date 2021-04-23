const { getPeople } = require('./services');

async function main() {
  try {
    const { results } = await getPeople('a');
    const weight = results.map((item) => parseInt(item.height));
  } catch (error) {
    console.log('There is a error', error);
  }
}
