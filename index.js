const Parse = require('./src/Parse');

const imdb = new Parse();

const getAll = () => imdb.getAll();
const getCountries = () => imdb.getCountries();
const getDescription = () => imdb.getDescription();
const getGenres = () => imdb.getGenres();
const getTitle = () => imdb.getTitle();
const getYear = () => imdb.getYear();

const goto = async (id) => {
  await imdb.goto(id);
};

module.exports = {
  getAll,
  getCountries,
  getDescription,
  getGenres,
  getYear,
  getTitle,
  goto,
};
