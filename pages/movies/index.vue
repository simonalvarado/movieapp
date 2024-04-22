<template>
  <div class="home">
    <MovieLoading v-if="$fetchState.pending"/>
    <div v-else class="movie-grid-container">
        <MovieGrid id="movies-recommended-grid" :title="'Movies - Recommended'" :items="movies" />
        <MovieGrid id="series-recommended-grid" :title="'Series - Recommended'" :items="series" />
        <MovieGrid id="anime-popular-grid" :title="'Anime - Popular'" :items="anime" />
    </div>
  </div>
</template>

<script>
import { getMoviesRecommended, getSeriesRecommended, getAnimePopular } from '~/services/moviesService.js';

export default {
    data() {
        return {
            movies: [],
            series: [],
            anime: [],
        };
    },
    async fetch() {
        this.movies = await getMoviesRecommended();
        this.series = await getSeriesRecommended();
        this.anime = await getAnimePopular();
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
        };
    },
    fetchDelay: 1000,
}
</script>

<style lang="scss" scoped>
.home {
    color: #fff;
}
</style>
