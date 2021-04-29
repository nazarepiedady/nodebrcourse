const { readFile, writeFile } = require('fs');
const { promisify } = require('util');

const readFileAsync = promisify(readFile);
const writeFileAsync = promisify(writeFile);

class Database {
  constructor() {
    this._FILENAME = 'heroes.json';
  }

  async getFileData() {
    const file = await readFileAsync(this._FILENAME, 'utf8');
    return JSON.parse(file.toString());
  }

  async writeFile(data) {
    await writeFileAsync(this._FILENAME, JSON.stringify(data));
    return true;
  }

  async register(hero) {
    const data = await this.getFileData();
    const id = hero.id <= 2 ? hero.id : Date.now();
    const heroWithId = { id, ...hero };
    const finalData = [heroWithId, ...data];
    const result = await this.writeFile(finalData);
    return result;
  }

  async list(id) {
    const data = await this.getFileData();
    const filteredData = data.filter((item) => (id ? item.id === id : true));
    return filteredData;
  }
}

module.exports = new Database();
