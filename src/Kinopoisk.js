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

 static validation(key, content) {
    const schema = {
      name: yup.string().min(1).max(300),
    };
    try {
      return schema[key].validateSync(content);
    } catch (e) {
      throw new Error(`Validation failed: ${e.message}`);
    }
  }
}

export default Kinopoisk;

// //
// const kino = new Kinopoisk();
//
// console.log(kino._content)
// kino._setName([]);
