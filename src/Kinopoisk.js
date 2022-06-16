import * as yup from 'yup';
import { JSDOM } from 'jsdom';

import Parser from "./parser.js";

class Kinopoisk {
  constructor() {
    this._content = {}
  }

  _setName(content) {
    this._content.name = Kinopoisk.validation('name', content.trim());
  }

  _setYear(content) {
    this._content.year = Kinopoisk.validation('year', content);
  }

  _setCountries(content) {
    this._content.countries = Kinopoisk.validation('countries', content);
  }

  _setGenres(content) {
    this._content.genres = Kinopoisk.validation('genres', content);
  }

  _setDescription(content) {
    this._content.description = Kinopoisk.validation('description', content);
  }

  getName() {
    return this._content.name;
  }

  getYear() {
    return this._content.year;
  }

  getDescription() {
    return this._content.description;
  }

  getGenres() {
    return this._content.genres;
  }

  getCountries() {
    return this._content.countries;
  }

  _parse(html){
    const dom = new JSDOM(html);
    const scrapData = dom.window.document
        ?.getElementById("__next")
        ?.querySelector('script')
        .innerHTML;
    if(scrapData === undefined) {
        return false;
    }
    const movie = JSON.parse(scrapData);
    this._setName(movie.name);
    this._setYear(movie.datePublished);
  }

  static validation(key, content) {
    const schema = {
      name: yup.string().min(1).max(300),
      year: yup.number().integer().min(1800).max(2030),
      countries: yup.array(),
      genres: yup.array(),
      description: yup.string().min(10),
    };
    try {
      return schema[key].validateSync(content);
    } catch (e) {
      throw new Error(`Validation failed: ${e.message}`);
    }
  }

}

export default Kinopoisk;
