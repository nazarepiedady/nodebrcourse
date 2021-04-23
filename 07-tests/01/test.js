const assert = require('assert');
const { getPeople } = require('./services');

const nock = require('nock');

describe('Star Wars Tests', function () {
  it('should fetch r2d2 in the right format', async () => {
    const nameBase = 'r2-d2';
    const expected = [{ name: 'R2-D2', weight: '96' }];

    const result = await getPeople(nameBase);
    assert.deepEqual(result, expected);
  });
});
