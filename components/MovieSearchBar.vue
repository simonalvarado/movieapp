<template>
  <div class="movie-search-bar">
    <label for="search-input" class="visually-hidden">Search for titles</label>
    <input
      id="search-input"
      v-model="searchQuery"
      type="text"
      placeholder="Search for movies..."
      class="search-input"
      @input="filterMovies"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchQuery: '',
    }
  },
  mounted() {
    this.$intro()
      .setOptions({
        steps: [
          {
            element: document.querySelector('#search-input'),
            intro: 'You can filter movies by name here.',
          },
          {
            intro: 'Enjoy exploring the app!',
          },
        ],
      })
      .start()
  },
  methods: {
    filterMovies() {
      this.$emit('search', this.searchQuery)
    },
  },
}
</script>

<style lang="scss" scoped>
@import '~@/assets/scss/_variables.scss';

.movie-search-bar {
  display: flex;
  justify-content: center;
  width: 100%;
}

.search-input {
  padding: 10px;
  border: $input-border;
  border-radius: 22px;
  height: 48px;
  background-color: $input-background-color;
  color: $main-font-color;
  height: 37px;
  min-width: 280px;

  @media (max-width: 600px) {
    width: 100%;
    min-width: 0;
  }
}

.visually-hidden {
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  padding: 0;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;
}
</style>
