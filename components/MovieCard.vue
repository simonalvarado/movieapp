<template>
  <li class="movie-card">
    <nuxt-link :to="`/movies/${movie.imdbID}`">
      <img class="movie-poster" :src="movie.Poster" :alt="movie.Title" />
      <div class="movie-title">
        {{ movie.Title.slice(0, 45)
        }}<span v-if="movie.Title.length > 50">...</span>
      </div>
    </nuxt-link>
  </li>
</template>

<script>
export default {
  props: {
    // The movie object to display
    movie: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
.movie-card {
  display: block;
  width: 150px;
  margin-right: 20px;
  cursor: pointer;
  min-height: 300px;
  a {
    text-decoration: none;
  }
  @media (max-width: 600px) {
    width: 132px;
    min-height: 220px;
  }
  .movie-poster {
    width: 100%;
    height: 225px;
    object-fit: cover;
    border-radius: 8px;
    transition: all 0.3s ease-in-out;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);

    &:hover {
      transform: scale(1.05);
      box-shadow: 0 24px 38px rgba(0, 0, 0, 0.3),
        0 12px 12px rgba(0, 0, 0, 0.22);
    }
    @media (max-width: 600px) {
      height: 200px;
    }
  }
  .movie-title {
    margin-top: 10px;
    font-size: 16px;
    font-weight: 500;
    color: #333;
    text-decoration: none;
    text-align: center;
    color: #f5f5f7;
    @media (max-width: 600px) {
      display: none;
    }
  }
}
</style>
