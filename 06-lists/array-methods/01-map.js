const service = require('./services');

Array.prototype.cMap = function (callback) {
  const newArray = [];
  for (let i = 0; i <= this.length - 1; i++) {
    const result = callback(this[i], i);
    newArray.push(result);
  }
  return newArray;
};

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
