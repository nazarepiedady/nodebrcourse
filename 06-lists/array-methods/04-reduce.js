const { getPeople } = require('./services');

Array.prototype.cReduce = function (callback, initialValue) {
  let finalValue = typeof initialValue !== undefined ? initialValue : this[0];
  for (let index = 0; index <= this.length - 1; index++) {
    finalValue = callback(finalValue, this[index], this);
  }
  return finalValue;
};

async function main() {
  try {
    const { results } = await getPeople('a');
    const weight = results.map((item) => parseInt(item.height));
    /*  const total = weight.reduce((previous, next) => {
      return previous + next;
    }); */
    const myList = [
      ['Erick', 'Wendel'],
      ['NodeBR', 'Nerdizao'],
    ];
    const total = myList
      .cReduce((previous, next) => {
        return previous.concat(next);
      }, [])
      .join(',');
    console.log('Total', total);
  } catch (error) {
    console.error('There is a error', error);
  }
}

main();
