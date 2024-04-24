<template>
  <nav class="navbar">
    <NuxtLink
      to="/movies"
      class="movies-app-link"
      aria-label="Link to movies app"
      ><MovieAppTitle
    /></NuxtLink>
  </nav>
</template>

<script></script>

<style lang="scss" scoped>
@import '~@/assets/scss/_variables.scss';

.navbar {
  padding: 20px;
  color: #000000;
  @media (max-width: 600px) {
    padding: 20px 20px 0 20px;
  }
}
a.movies-app-link {
  text-decoration: none;
  color: $main-font-color;
}
</style>
