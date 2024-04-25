<template>
  <div class="movie-loading" aria-label="Loading spinner">
    <span></span>
  </div>
</template>

<script></script>

<style lang="scss" scoped>
@import '~@/assets/scss/_variables.scss';

.movie-loading {
  height: 90vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  @keyframes circle-loading {
    to {
      transform: rotateZ(360deg);
    }
  }

  span {
    display: block;
    width: 70px;
    height: 70px;
    border-radius: 50%;
    border: 2px solid transparent;
    border-top-color: $main-font-color;
    animation: circle-loading 1200ms ease infinite;
  }
}
</style>
