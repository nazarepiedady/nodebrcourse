const { readFile } = require('fs');
const { promisify } = require('util');

const readFileAsync = promisify(readFile);
class Database {
  constructor() {
    this._FILENAME = 'heroes.json';
  }

  async getFileData() {
    const file = await readFileAsync(this._FILENAME, 'utf8');
    return JSON.parse(file.toString());
  }

  writeFile() {}

  toList() {}
}

module.exports = new Database();
