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
});

describe('Validation Failed:', () => {
  test('_getName validate failed', () => {
    expect(() => { kinopoisk._setName(''); }).toThrow();
    expect(() => { kinopoisk._setName([]); }).toThrow();
  });
});
