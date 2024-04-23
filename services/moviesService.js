import axios from 'axios'

// Normally, we would store the API key in an environment variable for security.
// For testing purposes of this code challenge, I've included it directly in the code.
const apiKey = '9ba874f8'
const baseURL = `http://www.omdbapi.com/?apikey=${apiKey}`

const newRealeasesIds = [
  'tt27503384',
  'tt13238346',
  'tt17009710',
  'tt7160372',
  'tt14230458',
  'tt12637874',
  'tt17279496',
  'tt2788316',
  'tt15398776',
  'tt3581920',
]

const moviesRecommendedIds = [
  'tt0206634',
  'tt15239678',
  'tt0796366',
  'tt0816692',
  'tt1392190',
  'tt0107290',
  'tt1375666',
  'tt1877830',
  'tt0363771',
  'tt0113568',
  'tt0145487',
  'tt6751668',
  'tt1250777',
  'tt2582802',
  'tt0109830',
  'tt0468569',
  'tt0758758',
  'tt0137523',
  'tt3783958',
  'tt0209144',
  'tt0083658',
  'tt1130884',
  'tt0110357',
  'tt0118884',
  'tt0095489',
]

const seriesRecommendedIds = [
  'tt2356777',
  'tt0417299',
  'tt1695360',
  'tt4158110',
  'tt0903747',
  'tt0944947',
  'tt0898266',
  'tt2861424',
  'tt3032476',
  'tt4574334',
]

const animePopularIds = [
  'tt0112159',
  'tt0094625',
  'tt5311514',
  'tt2560140',
  'tt0213338',
  'tt0221735',
  'tt0214341',
  'tt0433722',
  'tt0388629',
  'tt0409591',
]

async function getMoviesByIds(ids) {
  const movies = []
  for (const id of ids) {
    const response = await axios.get(`${baseURL}&i=${id}`)
    movies.push(response.data)
  }
  return movies
}

export function getNewReleases() {
  return getMoviesByIds(newRealeasesIds)
}

export function getMoviesRecommended() {
  return getMoviesByIds(moviesRecommendedIds)
}

export function getSeriesRecommended() {
  return getMoviesByIds(seriesRecommendedIds)
}

export function getAnimePopular() {
  return getMoviesByIds(animePopularIds)
}

export async function getSingleMovie(id) {
  const response = await axios.get(`${baseURL}&i=${id}`)
  return response.data
}
