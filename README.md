
# Imdeber

Imdber is util for web scraping movie information from IMDb.
Node environment. 

Browser environment doesn't support (Temporarily)

## Install
```
    npm install imdber
```

## Import
```
    #use ES module
    imoprt imdb  from 'imdber'
    
```
## Usage
```
    import imdb from 'imdber'  

    async function start(url){
        await imdb.goto(url);
        const data = imdb.getAll();
        console.log(data)
    }

    start('tt0088763'); 
    
    // or start ('https://www.imdb.com/title/tt0088763/')
    // support id and url
```

##### imdb.getAll()

```
{
  id: 'tt0088763',
  title: 'Back to the Future',
  description: 'Marty McFly, a 17-year-old high school student, 
    is accidentally sent thirty years into the past in a time-traveling 
    DeLorean invented by his close friend, the eccentric scientist Doc Brown.',
  year: 1985,
  image: 'https://m.media-amazon.com/images/M/MV5....jpg',
  time: 6960,
  rating: { imdb: 8.5, vote: 1168243, metacritic: 87 },
  genres: [ 'Adventure', 'Comedy', 'Sci-Fi' ],
  countries: [ { id: 'US', text: 'United States' } ],
  actors: [
    {
      id: 'nm0000150',
      actor: 'Michael J. Fox',
      characters: 'Marty McFly'
    },
    {
      id: 'nm0000502',
      actor: 'Christopher Lloyd',
      characters: 'Dr. Emmett Brown'
    },
    {
      id: 'nm0000670',
      actor: 'Lea Thompson',
      characters: 'Lorraine Baines'
    },
     
     ...
     ...
     ...
     
    { id: 'nm0293483', actor: 'Lisa Freeman', characters: 'Babs' },
    { id: 'nm0442022', actor: 'Cristen Kauffman', characters: 'Betty' }
  ],
  similars: [
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
    },
      
      ...
      ...
      ...
      
    {
      id: 'tt0102926',
      title: 'The Silence of the Lambs',
      type: 'movie',
      rating: 8.6,
      runtime: 7080
    }
  ]
}


```

```
imdb.getTitle()  - string | return title of movie

imdb.getYear() - string |return year of movie

imdb.getDescription() - string | return description of movie

imdb.getGenres() - array | return genres of movie 

```