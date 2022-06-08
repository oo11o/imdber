// import fs from 'fs';
import Kinopoisk from '../src/Kinopoisk';

const kinopoisk = new Kinopoisk();
// const film = {
//   name: 'Joker',
//
// };

// test('robot reconnect', () => {
//     //const robotHtml = fs.readFile('robot.html');
// });
//
//
// describe('get Content', () => {
//     test('get name', () => {
//         film.get
//     })
// });

describe('Set Content', () => {
  test('_setName', () => {
    kinopoisk._setName('Очевидно');
    expect(kinopoisk._content.name).toEqual('Очевидно');
    kinopoisk._setName(' empty ');
    expect(kinopoisk._content.name).toEqual('empty');
  });
  test('_setYear', () => {
    kinopoisk._setYear(1942);
    expect(kinopoisk._content.name).toEqual(1942);
    kinopoisk._setYear('2005');
    expect(kinopoisk._content.name).toEqual(2005);
    kinopoisk._setYear(' 2010 ');
    expect(kinopoisk._content.name).toEqual(2010);
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
});
