import Imdb from './src/Imdb';

const imdb = new Imdb();

const getAll = () => imdb.getGenres();

const getCountries = () => imdb.getGenres();

const getDescription = () => imdb.getGenres();

const getGenres = () => imdb.getGenres();

const getTitle = () => imdb.getGenres();

export default {
  getAll,
  getCountries,
  getDescription,
  getGenres,
  getTitle,
};
