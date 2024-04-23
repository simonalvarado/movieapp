<template>
  <div class="movie-info">
    <div class="main-container">
      <h1>{{ movie.Title }}</h1>
      <p class="movie-fact attributes">
        {{ movie.Type === 'series' ? 'TV Series | ' : '' }} {{ movie.Year }} |
        {{ movie.Rated }} | {{ movie.Runtime }}
      </p>
    </div>
    <div class="movie-content">
      <div class="movie-img">
        <img :src="movie.Poster" :alt="movie.Title" />
      </div>
      <div class="movie-description">
        <p class="movie-fact">
          {{ movie.Genre }}
        </p>
        <p class="movie-fact">
          {{ movie.Plot }}
        </p>
        <p class="movie-fact">
          <strong>{{ movie.imdbRating }}</strong
          >/10
        </p>
        <p v-if="movie.Type !== 'series'" class="movie-fact">
          Directed by {{ movie.Director }}
        </p>
        <p v-if="movie.Awards !== 'N/A'" class="movie-fact">
          {{ movie.Awards }}
        </p>
      </div>
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
}
</script>

<style lang="scss" scoped>
.movie-info {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  color: #f5f5f7;
  .main-container {
    text-align: center;
    h1 {
      line-height: 32px;
        padding-bottom: 5px;
      
    }
  }
  .movie-img {
    text-align: center;
    img {
      max-height: 500px;
      max-width: 245px;
      width: 70%;
    }
  }

  .movie-content {
    display: flex;
    flex-direction: column;
    h1 {
      font-size: 56px;
      font-weight: 400;
    }

    .movie-fact {
      margin-top: 12px;
      font-size: 16px;
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

@media (min-width: 800px) {
  .movie-info {
    flex-direction: column;
    align-items: flex-start;
    .main-container {
      text-align: left;
      h1 {
        padding-bottom: 10px;
      }
    }
    .movie-img {
      img {
        max-height: 700px;
        width: initial;
        max-width: none;
      }
    }
    .movie-content {
      flex-direction: row;
      gap: 20px;
      .movie-fact {
      margin-top: 0px;
      margin-bottom: 12px;
      }
    }
  }
}
</style>
