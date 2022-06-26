import Parse from './src/Parse.js';

const imdb = new Parse();

const getAll = () => imdb.getAll();
const getCountries = () => imdb.getCountries();
const getDescription = () => imdb.getDescription();
const getGenres = () => imdb.getGenres();
const getTitle = () => imdb.getTitle();

const goto = async (id) => {
  await imdb.goto(id);
};

export default {
  getAll,
  getCountries,
  getDescription,
  getGenres,
  getTitle,
  goto,
};
