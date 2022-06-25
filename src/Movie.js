import * as yup from "yup";

export default class{
  constructor() {
    this._content = {}
  }

  getTitle() {
    return this._content.title;
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

  getAll() {
    return this._content;
  }

  _setTitle(content) {
    this._content.title = this._validation('title', content.trim());
  }

  _setYear(content) {
    this._content.year = this._validation('year', content);
  }

  _setCountries(content) {
    this._content.countries = this._validation('countries', content);
  }

  _setGenres(content) {
    this._content.genres = this._validation('genres', content);
  }

  _setImage(content) {
    this._content.image = content;
  }

  _setDescription(content) {
    this._content.description = this._validation('description', content.trim());
  }

  _setActors(content) {
    this._content.actors = this._validation('actors', content);
  }

  _setSimilars(content) {
    this._content.similars = this._validation('similars', content);
  }

  _setTime(content) {
    this._content.time = content;
  }

  _setId(content) {
    this._content.id = content;
  }

  _setRaiting(content) {
    this._content.raiting = content;
  }

  _validation(key, content) {
    const schema = {
      title: yup.string().min(1).max(300),
      year: yup.number().integer().min(1800).max(2030).required(),
      countries: yup.array(),
      genres: yup.array(),
      description: yup.string().min(10),
      image: yup.string().min(10),
      actors: yup.array(),
      similars: yup.array()
    };
    try {
      return schema[key].validateSync(content);
    } catch (e) {
      throw new Error(`Validation failed: ${e.message}`);
    }
  }

}
