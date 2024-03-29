const { JSDOM } = require('jsdom');
const getHtml = require('./gethtml');
const Movie = require('./Movie');

module.exports = class Parse extends Movie {
  static checkUrl(url) {
    return url.indexOf('https') > -1 ? url.split('?')[0] : `https://www.imdb.com/title/${url}/`;
  }

  async goto(url) {
    const { data } = await getHtml(Parse.checkUrl(url));
    if (data === undefined) { return; }

    const dom = new JSDOM(data);

    const scriptData = JSON.parse(dom.window
      .document?.querySelector('#__NEXT_DATA__').innerHTML);

    const jsonAbove = scriptData.props.pageProps.aboveTheFoldData;
    const jsonMain = scriptData.props.pageProps.mainColumnData;

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
      runtime: item.node.runtime?.seconds,
    })))());
  }
};
