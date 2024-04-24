<!-- eslint-disable no-irregular-whitespace -->
<template>
  <footer class="movie-footer">
    <div class="movie-footer-container">
      <h2 class="movies-app-title">movies app</h2>
      <p>
        Movies App is a paid subscription service, its content is subject to
        availability. The Movies App service is marketed by The Movies Company,
        123 Film Street, 4th Floor (F1234AAA), Film City, USA, and
        <span style="white-space: nowrap">CUIT number 12-34567890-1</span>."
      </p>
      <p>© 2022 Movie App. All rights reserved.</p>
    </div>
  </footer>
</template>

<script></script>

<style lang="scss" scoped>
@import '~@/assets/scss/_variables.scss';

.movie-footer {
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: auto;
}
.movie-footer-container {
  max-width: 550px;
  font-size: 12px;
  text-align: center;
  padding: 20px;
  left: 0;
  bottom: 0;
  width: 100%;
  color: $footer-font-color;
  .movies-app-title {
    font-size: 14px;
    margin-bottom: 24px;
    font-weight: 300;
  }
  p {
    margin-bottom: 12px;
  }
}
</style>
