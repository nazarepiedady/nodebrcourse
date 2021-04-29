const { deepStrictEqual, ok } = require('assert');

const database = require('./database');

const DEFAULT_ITEM_REGISTER = {
  name: 'Flash',
  power: 'Speed',
  id: 1,
};

describe('Suite to manipulate heroes', () => {
  before(async () => {
    await database.register(DEFAULT_ITEM_REGISTER);
  });

  it('should search a hero, using files', async () => {
    const expected = DEFAULT_ITEM_REGISTER;
    const [result] = await database.list(expected.id);
    deepStrictEqual(result, expected);
  });

  it('should register a hero, using files', async () => {
    const expected = DEFAULT_ITEM_REGISTER;
    const result = await database.register(DEFAULT_ITEM_REGISTER);
    const [current] = await database.list(DEFAULT_ITEM_REGISTER.id);

    deepStrictEqual(current, expected);
  });
});
