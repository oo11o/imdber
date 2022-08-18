import Parse from '../src/Parse';

describe('parse:', () => {
  test('check url', () => {
    expect(Parse.checkUrl('https://www.imdb.com/title/tt0088247/?ref_=fn_al_tt_1')).toEqual('https://www.imdb.com/title/tt0088247/');
    expect(Parse.checkUrl('tt0088247')).toEqual('https://www.imdb.com/title/tt0088247/');
  });
});
