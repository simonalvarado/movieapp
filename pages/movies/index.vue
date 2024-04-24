<template>
  <div class="home">
    <MovieLoading v-if="$fetchState.pending" />
    <div v-else class="movie-grid-container">
      <MovieGrid
        id="new-releases-grid"
        :title="'New Releases'"
        :items="newReleases"
        aria-label="New Releases"
      />
      <MovieGrid
        id="movies-recommended-grid"
        :title="'Movies - Recommended'"
        :items="movies"
        aria-label="Movies Recommended"
      />
      <MovieGrid
        id="series-recommended-grid"
        :title="'Series - Recommended'"
        :items="series"
        aria-label="Series Recommended"
      />
      <MovieGrid
        id="anime-popular-grid"
        :title="'Anime - Popular'"
        :items="anime"
        aria-label="Anime Popular"
      />
    </div>
    <MovieFooter />
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
}
</script>

<style lang="scss" scoped>
@import'~@/assets/scss/_variables.scss';

.home {
  color: $main-font-color;
}
</style>
