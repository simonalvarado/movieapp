<template>
  <nav class="navbar">
    <NuxtLink
      to="/movies"
      class="movies-app-link"
      aria-label="Link to movies app"
    >
      <MovieAppTitle />
    </NuxtLink>
    <div class="search-bar-container">
      <MovieSearchBar @search="updateSearchQuery" />
    </div>
  </nav>
</template>

<script>
import MovieSearchBar from './MovieSearchBar.vue'

export default {
  components: {
    MovieSearchBar,
  },
  methods: {
    // Emit the search event with the search query
    updateSearchQuery(searchQuery) {
      this.$emit('search', searchQuery)
    },
  },
}
</script>

<style lang="scss" scoped>
@import '~@/assets/scss/_variables.scss';

.navbar {
  position: relative;
  display: flex;
  justify-content: center;
  padding: 20px;
  color: #000000;
  @media (max-width: 600px) {
    padding: 20px 20px 0 20px;
  }
}
a.movies-app-link {
  position: absolute;
  left: 20px;
  text-decoration: none;
  color: $main-font-color;
}
.search-bar-container {
  display: flex;
  justify-content: center;
  width: 100%;
}
@media screen and (max-width: 600px) {
  .movies-app-link {
    display: none;
  }
}
</style>
