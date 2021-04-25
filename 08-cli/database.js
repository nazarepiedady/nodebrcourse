const { readFile } = require('fs');
const { promisify } = require('util');

const readFileAsync = promisify(readFile);
class Database {
  constructor() {
    this._FILENAME = 'heroes.json';
  }

  getFileData() {}

  writeFile() {}

  toList() {}
}

module.exports = new Database();
