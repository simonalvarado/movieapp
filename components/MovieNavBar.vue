<template>
  <nav class="navbar">
    <NuxtLink to="/movies" class="movies-app-title">movies app</NuxtLink>
  </nav>
</template>

<script>
</script>

<style scoped>
.navbar {
  padding: 20px;
  color: #f5f5f7;
  @media (max-width: 600px) {
      padding: 20px 20px 0 20px;
  }
}
</style>