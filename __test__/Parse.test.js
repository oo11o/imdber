import Parse from '../src/lib/Parse';

const parse = new Parse();

describe('Set Content', () => {
  test('_setTitle', () => {
    parse._setTitle('Очевидно');
    expect(parse._movie.title).toEqual('Очевидно');
    parse._setTitle(' empty ');
    expect(parse._movie.title).toEqual('empty');
  });

  test('_setYear', () => {
    parse._setYear(1942);
    expect(parse._movie.year).toEqual(1942);
    parse._setYear('2005');
    expect(parse._movie.year).toEqual(2005);
  });

  test('_setCountries', () => {
    parse._setCountries(['poland', 'ukraine']);
    expect(parse._movie.countries).toEqual(['poland', 'ukraine']);
  });

  test('_setGenres', () => {
    parse._setGenres(['drama', 'comedian']);
    expect(parse._movie.genres).toEqual(['drama', 'comedian']);
  });

  test('_setDescription', () => {
    parse._setDescription('Готэм, начало 1980-х годов.');
    expect(parse._movie.description).toEqual('Готэм, начало 1980-х годов.');
  });
});


describe('Validation Failed:', () => {
  test('_setName validate failed', () => {
    expect(() => { imdb._setName(''); }).toThrow();
    expect(() => { imdb._setName([]); }).toThrow();
  });

  test('_setYear validate failed', () => {
    expect(() => { imdb._setYear(''); }).toThrow();
    expect(() => { imdb._setYear(2031); }).toThrow();
    expect(() => { imdb._setYear(1262); }).toThrow();
  });

  test('_setCountries validate failed', ()=> {
    expect(() => { imdb._setCountries('')}).toThrow();
  })

  test('_setGenres validate failed', ()=> {
    expect(() => { imdb._setGenres('')}).toThrow();
  })

  test('_setDescription validate failed', ()=> {
    expect(() => { imdb._setDescription('test')}).toThrow();
  })
});
