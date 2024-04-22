<template>
  <div class="app">
    <MovieNavBar v-if="$route.path !== '/'" />
    <Nuxt keep-alive />
  </div>
</template>