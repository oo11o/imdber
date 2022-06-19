export default class{
  constructor() {
    this._content = {}
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

  getAll() {
    return this._content;
  }
}
