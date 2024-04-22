<template>
  <nav class="navbar">
    <NuxtLink to="/movies" class="navbar-title">Movies App</NuxtLink>
  </nav>
</template>

<script>
</script>

<style scoped>
.navbar {
  padding: 20px;
  color: #fff;
  @media (max-width: 600px) {
      padding: 20px 20px 0 20px;
  }
}

.navbar-title {
  color: #fff;
  text-decoration: none;
  font-size: 24px;
  font-weight: bold;
}
</style>