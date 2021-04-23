const { getPeople } = require('./services');

async function main() {
  try {
    const { results } = await getPeople('a');
  } catch (error) {
    console.log('There is a error', error);
  }
}
