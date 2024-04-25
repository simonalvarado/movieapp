<template>
  <NuxtLink :to="route" class="movie-back-button" aria-label="Go back">
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
    {{ text }}
  </NuxtLink>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: 'Back',
    },
    route: {
      type: String,
      default: '/',
    },
  },
}
</script>

<style lang="scss" scoped>
@import '~@/assets/scss/_variables.scss';

.movie-back-button {
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
