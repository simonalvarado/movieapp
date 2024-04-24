import axios from 'axios'

// Normally, we would store the API key in an environment variable for security.
// For the purposes of this code challenge, I've included a fallback API key directly in the code.
// In a production application, we would not include the API key in the code.
const apiKey = process.env.OMDB_API_KEY || '9ba874f8'
const baseURL = `http://www.omdbapi.com/?apikey=${apiKey}`

// The IDs of the movies to fetch are defined as arrays of strings.
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

// This function fetches movie data for an array of IDs.
async function fetchMoviesByIds(ids) {
  const moviePromises = ids.map((id) =>
    axios
      .get(`${baseURL}&i=${id}`)
      .then((response) => response.data)
      .catch((error) => {
        console.error(`Failed to fetch movie with id ${id}:`, error)
        return null
      })
  )
  const movies = await Promise.all(moviePromises)
  return movies.filter((movie) => movie !== null) // Filter out any failed requests
}

// These functions fetch movie data for different categories.
export function getNewReleases() {
  return fetchMoviesByIds(newRealeasesIds)
}
export function getMoviesRecommended() {
  return fetchMoviesByIds(moviesRecommendedIds)
}
export function getSeriesRecommended() {
  return fetchMoviesByIds(seriesRecommendedIds)
}
export function getAnimePopular() {
  return fetchMoviesByIds(animePopularIds)
}

// This function fetches data for a single movie.
export async function getSingleMovie(id) {
  try {
    const response = await axios.get(`${baseURL}&i=${id}`)
    return response.data
  } catch (error) {
    throw new Error(`Failed to fetch movie with id ${id}: ${error.message}`)
  }
}
