<template>
  <nav class="navbar">
    <NuxtLink
      to="/movies"
      class="movies-app-title"
      aria-label="Link to movies app"
      ><MovieAppTitle
    /></NuxtLink>
  </nav>
</template>

<script></script>

<style scoped>
.navbar {
  padding: 20px;
  color: #000000;
  @media (max-width: 600px) {
    padding: 20px 20px 0 20px;
  }
}
</style>
