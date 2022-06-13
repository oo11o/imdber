import fs from 'fs/promises';
import Kinopoisk from '../src/Kinopoisk';

let kinopoisk;

beforeEach(()=>{
  kinopoisk = new Kinopoisk();
})

describe('Set Content', () => {
  test('_setName', () => {
    kinopoisk._setName('Очевидно');
    expect(kinopoisk._content.name).toEqual('Очевидно');
    kinopoisk._setName(' empty ');
    expect(kinopoisk._content.name).toEqual('empty');
  });

  test('_setYear', () => {
    kinopoisk._setYear(1942);
    expect(kinopoisk._content.year).toEqual(1942);
    kinopoisk._setYear('2005');
    expect(kinopoisk._content.year).toEqual(2005);
  });

  test('_setCountries', ()=>{
    kinopoisk._setCountries(['poland', 'ukraine']);
    expect(kinopoisk._content.countries).toEqual(['poland', 'ukraine']);
  })
});

describe('Get Content', ()=> {
  test('return name of film', () => {
    kinopoisk._setName('Terminator')
    expect(kinopoisk.getName()).toEqual('Terminator');
    kinopoisk._setName('Please Don\'t Eat My Mother ++++ !');
    expect(kinopoisk.getName()).toEqual('Please Don\'t Eat My Mother ++++ !');
  });
  test('return year of film', () => {
    kinopoisk._setYear(2010)
    expect(kinopoisk.getYear()).toEqual(2010);
  });
});

describe('Validation Failed:', () => {
  test('_setName validate failed', () => {
    expect(() => { kinopoisk._setName(''); }).toThrow();
    expect(() => { kinopoisk._setName([]); }).toThrow();
  });
  test('_setYear validate failed', () => {
    expect(() => { kinopoisk._setYear(''); }).toThrow();
    expect(() => { kinopoisk._setYear(2031); }).toThrow();
    expect(() => { kinopoisk._setYear(1262); }).toThrow();
  });

  test('_setCountries validate failed', ()=> {
    expect(() => { kinopoisk._setCountries('')}).toThrow();
  })
});


describe('Parse data:', () => {
  test('_parse methods transfer data', async () => {
    const html = await fs.readFile(`${__dirname}/__fixtures__/film.html`, 'utf-8');
    kinopoisk._parse(html);
    expect(kinopoisk.getName()).toEqual('Джокер');
    expect(kinopoisk.getYear()).toEqual(2019);
  })
});
