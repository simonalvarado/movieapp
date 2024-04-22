<template>
  <div class="movie-info">
    <div class="movie-img">
      <img :src="movie.Poster" :alt="movie.Title" />
    </div>
    <div class="movie-content">
      <h1> {{ movie.Title }} </h1>
      <p class="movie-fact attributes">
        {{ movie.Type === 'series' ? 'TV Series | ' : '' }} {{ movie.Year }} | {{ movie.Rated }} | {{ movie.Runtime }}
      </p>
      <p class="movie-fact">
        {{ movie.Genre }}
      </p>
      <p class="movie-fact">
        {{ movie.Plot }}
      </p>
      <p class="movie-fact">
        <strong>{{ movie.imdbRating }}</strong>/10
      </p>
      <p v-if="movie.Type !== 'series'" class="movie-fact">
        Directed by {{ movie.Director }}
      </p>
      <p class="movie-fact">
        {{ movie.Awards}}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    movie: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.movie-info {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 32px;
    color: #fff;
    @media (min-width: 800px) {
      flex-direction: row;
      align-items: flex-start;
    }
    .movie-img {
      img {
        max-height: 500px;
        width: 100%;

        @media (min-width: 800px) {
          max-height: 700px;
          width: initial;
        }
      }
    }

    .movie-content {
      h1 {
        font-size: 56px;
        font-weight: 400;
      }

      .movie-fact {
        margin-top: 12px;
        font-size: 20px;
        line-height: 1.5;

        span {
          font-weight: 600;
          text-decoration: underline;
        }
      }

      .tagline {
        font-style: italic;
        span {
          font-style: normal;
        }
      }
    }
  }
</style>