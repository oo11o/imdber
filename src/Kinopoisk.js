import * as yup from 'yup';

class Kinopoisk {
  constructor() {
    this._content = {
      name: '',
      year: '',
    };
  }

  _setName(content) {
    this._content.name = Kinopoisk.validation('name', content.trim());
  }

  _setYear(content) {
    this._content.year = Kinopoisk.validation('year', content);
  }

  getName() {
    return this._content.name
  }

  static validation(key, content) {
    const schema = {
      name: yup.string().min(1).max(300),
      year: yup.number().integer().min(1800).max(2030),
    };
    try {
      return schema[key].validateSync(content);
    } catch (e) {
      throw new Error(`Validation failed: ${e.message}`);
    }
  }
}

export default Kinopoisk;
