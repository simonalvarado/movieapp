<template>
  <MovieLoading v-if="$fetchState.pending" />
  <div v-else class="container single-movie">
    <MovieInfo :movie="movie" aria-label="Movie information" />
  </div>
</template>

<script>
import { getSingleMovie } from '~/services/moviesService.js'

export default {
  name: 'SingleMovie',
  data() {
    return {
      movie: '',
    }
  },
  async fetch() {
    await this.getSingleMovie()
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
  methods: {
    async getSingleMovie() {
      this.movie = await getSingleMovie(this.$route.params.id)
    },
  },
}
</script>

<style lang="scss" scoped>
.single-movie {
  color: #f5f5f7;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 32px 20px;
  max-width: 900px;
}
</style>
