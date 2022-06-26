import Movie from '../src/Movie.js';

let movie;

beforeEach(() => {
  movie = new Movie();
  movie._content = {
    title: 'Terminator',
    year: 1984,
    description: 'A human soldier is sent from 2029',
    countries: ['Usa', 'Canada'],
    genres: ['Action', 'Sci-Fi'],
  };
});

describe('Get Content', () => {
  test('return name of film', () => {
    expect(movie.getTitle()).toEqual('Terminator');
  });

  test('return year of film', () => {
    expect(movie.getYear()).toEqual(1984);
  });

  test('return description of film', () => {
    expect(movie.getDescription()).toEqual('A human soldier is sent from 2029');
  });

  test('return genres of film', () => {
    expect(movie.getGenres()).toEqual(['Action', 'Sci-Fi']);
  });

  test('return film production country', () => {
    expect(movie.getCountries()).toEqual(['Usa', 'Canada']);
  });

  test('return detail information', () => {
    expect(movie.getAll()).toEqual({
      title: 'Terminator',
      year: 1984,
      description: 'A human soldier is sent from 2029',
      countries: ['Usa', 'Canada'],
      genres: ['Action', 'Sci-Fi'],
    });
  });
});


describe('Set Content', () => {
  test('_setTitle', () => {
    movie._setTitle('Очевидно');
    expect(movie._content.title).toEqual('Очевидно');
    movie._setTitle(' empty ');
    expect(movie._content.title).toEqual('empty');
  });

  test('_setYear', () => {
    movie._setYear(1942);
    expect(movie._content.year).toEqual(1942);
    movie._setYear('2005');
    expect(movie._content.year).toEqual(2005);
  });


  test('_setImage', () => {
    movie._setImage('https://m.media-amazon.com/images/M/MV5BMTk4MDg3MTMyMl5BMl5BanBnXkFtZTcwNzgzNDQyNA@@._V1_FMjpg_UX670_.jpg');
    expect(movie._content.image).toEqual('https://m.media-amazon.com/images/M/MV5BMTk4MDg3MTMyMl5BMl5BanBnXkFtZTcwNzgzNDQyNA@@._V1_FMjpg_UX670_.jpg');
  });


  test('_setCountries', () => {
    movie._setCountries(['poland', 'ukraine']);
    expect(movie._content.countries).toEqual(['poland', 'ukraine']);
  });

  test('_setGenres', () => {
    movie._setGenres(['drama', 'comedian']);
    expect(movie._content.genres).toEqual(['drama', 'comedian']);
  });

  test('_setId', () => {
    movie._setId('tt123322w');
    expect(movie._content.id).toEqual('tt123322w');
  });

  test('_setActors', () => {
    movie._setActors([{
          id: 'nm0000150',
          actor: 'Michael J. Fox',
          characters: 'Marty McFly'
        },
        {
          id: 'nm0000502',
          actor: 'Christopher Lloyd',
          characters: 'Dr. Emmett Brown'
        }]);

    expect(movie._content.actors).toEqual([{
      id: 'nm0000150',
      actor: 'Michael J. Fox',
      characters: 'Marty McFly'
    },
      {
        id: 'nm0000502',
        actor: 'Christopher Lloyd',
        characters: 'Dr. Emmett Brown'
      }]);
  });


  test('_setDescription', () => {
    movie._setDescription('A human soldier is sent from 2029 to 1984 to stop an almost indestructible cyborg killing machine, sent from the same year');
    expect(movie._content.description).toEqual('A human soldier is sent from 2029 to 1984 to stop an almost indestructible cyborg killing machine, sent from the same year');
  });

  test('_setSimilars', () => {
    movie._setSimilars( [
      {
        id: 'tt0096874',
        title: 'Back to the Future Part II',
        type: 'movie',
        rating: 7.8,
        runtime: 6480
      },

      {
        id: 'tt0133093',
        title: 'The Matrix',
        type: 'movie',
        rating: 8.7,
        runtime: 8160
      }]);

    expect(movie._content.similars).toMatchObject( [
      {
        id: 'tt0096874',
        title: 'Back to the Future Part II',
        type: 'movie',
        rating: 7.8,
        runtime: 6480
      },
      {
        id: 'tt0133093',
        title: 'The Matrix',
        type: 'movie',
        rating: 8.7,
        runtime: 8160
      }]
    );
  });

  test('_setTime', () => {
    movie._setTime(4455);
    expect(movie._content.time).toEqual(4455);
  });

  test('_Rating', () => {
    movie._setRating({ imdb: 8.5, vote: 1168243, metacritic: 87 });
    expect(movie._content.rating).toEqual({ imdb: 8.5, vote: 1168243, metacritic: 87 });
  });

});




