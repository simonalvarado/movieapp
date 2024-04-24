<template>
  <div class="home">
    <MovieLoading v-if="$fetchState.pending" />
    <div v-else class="movies-page-container">
      <div class="movie-grid-container">
        <MovieNavBar aria-label="Movie Navigation Bar" @search="filterMovies" />
        <MovieGrid
          id="new-releases-grid"
          :title="'New Releases'"
          :items="filteredNewReleases"
          aria-label="New Releases"
        />
        <MovieGrid
          id="movies-recommended-grid"
          :title="'Movies - Recommended'"
          :items="filteredMovies"
          aria-label="Movies Recommended"
        />
        <MovieGrid
          id="series-recommended-grid"
          :title="'Series - Recommended'"
          :items="filteredSeries"
          aria-label="Series Recommended"
        />
        <MovieGrid
          id="anime-popular-grid"
          :title="'Anime - Popular'"
          :items="filteredAnime"
          aria-label="Anime Popular"
        />
        <MovieFooter />
      </div>
    </div>
  </div>
</template>

<script>
import {
  getNewReleases,
  getMoviesRecommended,
  getSeriesRecommended,
  getAnimePopular,
} from '~/services/moviesService.js'

export default {
  data() {
    return {
      newReleases: [],
      movies: [],
      series: [],
      anime: [],
      searchQuery: '',
    }
  },
  async fetch() {
    this.newReleases = await getNewReleases()
    this.movies = await getMoviesRecommended()
    this.series = await getSeriesRecommended()
    this.anime = await getAnimePopular()
  },
  head() {
    return {
      title: 'Movies App - Now Playing',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Get the latest movies now playing online.',
        },
      ],
    }
  },
  computed: {
    filteredNewReleases() {
      return this.filterMoviesByQuery(this.newReleases)
    },
    filteredMovies() {
      return this.filterMoviesByQuery(this.movies)
    },
    filteredSeries() {
      return this.filterMoviesByQuery(this.series)
    },
    filteredAnime() {
      return this.filterMoviesByQuery(this.anime)
    },
  },
  methods: {
    filterMoviesByQuery(movies) {
      return movies.filter((movie) =>
        movie.Title.toLowerCase().includes(this.searchQuery.toLowerCase())
      )
    },
    filterMovies(searchQuery) {
      this.searchQuery = searchQuery
    },
  },
}
</script>

<style lang="scss" scoped>
@import '~@/assets/scss/_variables.scss';

.home {
  color: $main-font-color;
}
</style>
