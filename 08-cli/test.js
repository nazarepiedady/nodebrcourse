const { deepStrictEqual, ok } = require('assert');

const database = require('./database');

const DEEFAULT_ITEM_REGISTER = {
  name: 'Flash',
  power: 'Speed',
  id: 1,
};

describe('Suite to manipulate heroes', () => {
  it('should search a hero, using files', async () => {
    const expected = DEEFAULT_ITEM_REGISTER;
    const [result] = await database.list(expected.id);
    deepStrictEqual(result, expected);
  });

  it('should register a hero, using files', async () => {
    const expected = DEEFAULT_ITEM_REGISTER;

    ok(null, expected);
  });
});
