const { readFile } = require('fs');
const { promisify } = require('util');
class Database {
  constructor() {
    this._FILENAME = 'heroes.json';
  }

  getFileData() {}

  writeFile() {}

  toList() {}
}

module.exports = new Database();
