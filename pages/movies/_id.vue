<template>
  <MovieLoading v-if="$fetchState.pending" />
  <div v-else class="id-page">
    <MovieBackButton text="Back" route="/movies" />
    <MovieInfo :movie="movie" />
  </div>
</template>

<script>
import { fetchSingleMovie } from '~/services/moviesService.js'

export default {
  name: 'SingleMovie',
  data() {
    return {
      movie: '',
    }
  },
  async fetch() {
    this.movie = await fetchSingleMovie(this.$route.params.id)
  },
  head() {
    return {
      title: this.movie
        ? `Watch ${this.movie.Title} - Movies App`
        : 'Movies App',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.movie
            ? this.movie.Plot
            : 'Get the latest movies online.',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
@import '~@/assets/scss/_variables.scss';

.id-page {
  color: $main-font-color;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 32px 20px;
  max-width: 900px;
  margin: 0 auto;
}
</style>