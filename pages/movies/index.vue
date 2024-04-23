<template>
  <div class="home">
    <MovieLoading v-if="$fetchState.pending"/>
    <div v-else class="movie-grid-container">
        <MovieGrid id="new-releases-grid" :title="'New Releases'" :items="newReleases" />
        <MovieGrid id="movies-recommended-grid" :title="'Movies - Recommended'" :items="movies" />
        <MovieGrid id="series-recommended-grid" :title="'Series - Recommended'" :items="series" />
        <MovieGrid id="anime-popular-grid" :title="'Anime - Popular'" :items="anime" />
    </div>
    <MovieFooter />
  </div>
</template>

<script>
import { getNewReleases, getMoviesRecommended, getSeriesRecommended, getAnimePopular } from '~/services/moviesService.js';

export default {
    data() {
        return {
            newReleases: [],
            movies: [],
            series: [],
            anime: [],
        };
    },
    async fetch() {
        this.newReleases = await getNewReleases();
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
    color: #f5f5f7;
}
</style>
