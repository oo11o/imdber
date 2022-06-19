import IMDb from '../src/Imdb';

let imdb;

beforeEach(() => {
  imdb = new IMDb();
  imdb._content = {
    title: 'Terminator',
    year: 1984,
    description: 'A human soldier is sent from 2029',
    countries: ['Usa', 'Canada'],
    genres: ['Action', 'Sci-Fi'],
  };
});

describe('Get Content', () => {
  test('return name of film', () => {
    expect(imdb.getTitle()).toEqual('Terminator');
  });

  test('return year of film', () => {
    expect(imdb.getYear()).toEqual(1984);
  });

  test('return description of film', () => {
    expect(imdb.getDescription()).toEqual('A human soldier is sent from 2029');
  });

  test('return genres of film', () => {
    expect(imdb.getGenres()).toEqual(['Action', 'Sci-Fi']);
  });

  test('return film production country', () => {
    expect(imdb.getCountries()).toEqual(['Usa', 'Canada']);
  });

  test('return detail information', () => {
    expect(imdb.getAll()).toEqual({
      title: 'Terminator',
      year: 1984,
      description: 'A human soldier is sent from 2029',
      countries: ['Usa', 'Canada'],
      genres: ['Action', 'Sci-Fi'],
    });
  });
});
