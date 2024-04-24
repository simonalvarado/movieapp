<template>
  <MovieLoading v-if="$fetchState.pending" />
  <div v-else class="container single-movie">
    <NuxtLink
      to="/movies"
      class="back-button"
      aria-label="Go back to movie list"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        class="icon"
        aria-hidden="true"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M10 19l-7-7m0 0l7-7m-7 7h18"
        ></path>
      </svg>
      Back
    </NuxtLink>
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

.single-movie {
  color: $main-font-color;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 32px 20px;
  max-width: 900px;
}

.back-button {
  display: flex;
  align-items: center;
  color: $main-font-color;
  text-decoration: none;
  margin-bottom: 20px;

  .icon {
    width: 20px;
    height: 20px;
    margin-right: 5px;
  }

  @media screen and (min-width: 600px) {
    margin-bottom: 20px;
  }
}
</style>
