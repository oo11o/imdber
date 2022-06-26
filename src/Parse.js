import { JSDOM } from 'jsdom';
import fs from 'fs/promises';
import getHtml from './gethtml.js';
import Movie from './Movie.js';

export default class extends Movie {
  async fileRead() {
    // https://www.imdb.com/title/tt0088247
  }

  checkUrl(url){
    return url.indexOf('https') > -1 ? url.split('?')[0] : `https://www.imdb.com/title/${url}/`;
  }

  async goto(url) {
    const { data, status } = await getHtml(this.checkUrl(url));
    const html = data;
    // const html = await fs.readFile('./__test__/__fixtures__/movie.html', 'utf-8');
    const dom = new JSDOM(html);

    const scriptData = JSON.parse(dom.window.document
      ?.querySelector('#__NEXT_DATA__')
      .innerHTML);

    // short names for object chain access
    const jsonAbove = scriptData.props.pageProps.aboveTheFoldData;
    const jsonMain = scriptData.props.pageProps.mainColumnData;

    // const sertificate = jsonAbove.certificate.rating;
    // const type = jsonAbove.titleType.id;

    this._setId(jsonAbove.id);
    this._setTitle(jsonAbove.originalTitleText.text);
    this._setDescription(jsonAbove.plot.plotText.plainText);
    this._setYear(jsonAbove.releaseYear.year);
    this._setImage(jsonAbove.primaryImage?.url);
    this._setTime(jsonAbove.runtime.seconds);
    this._setRating({
      imdb: jsonAbove.ratingsSummary.aggregateRating,
      vote: jsonAbove.ratingsSummary.voteCount,
      metacritic: jsonAbove.metacritic?.metascore.score,
    });

    this._setGenres((() => (jsonAbove.genres.genres).map((item) => item.text))());

    this._setCountries((() => (jsonMain.countriesOfOrigin.countries).map((item) => ({
      id: item.id,
      text: item.text,
    })))());

    this._setActors((() => (jsonMain.cast.edges).map((item) => ({
      id: item.node.name.id,
      actor: item.node.name.nameText.text,
      characters: item.node.characters[0].name,
    })))());

    this._setSimilars((() => jsonMain.moreLikeThisTitles.edges.map((item) => ({
      id: item.node.id,
      title: item.node.originalTitleText.text,
      type: item.node.titleType.id,
      raiting: item.node.ratingsSummary.aggregateRating,
      runtime: item.node.runtime.seconds,
    })))());
  }
}
