<template>
  <div class="grid">
    <h1 class="grid-title">{{ title }}</h1>
    <div class="grid-body">
<button
  v-if="showLeftArrow"
  class="scroll-arrow left"
    aria-label="Scroll left"
  tabindex="0"
  @click="scrollLeft"
></button>
      <ul ref="list" class="grid-list" @scroll="checkScroll">
        <MovieCard v-for="item in items" :key="item.imdbID" :movie="item" />
      </ul>
<button
  v-if="showRightArrow"
  class="scroll-arrow right"
  aria-label="Scroll right"
  tabindex="0" 
  @click="scrollRight"
></button>
    </div>
  </div>
</template>

<script>
import arrowImage from '~/assets/imgs/arrow.svg'

export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    items: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      arrowImage,
      showLeftArrow: false,
      showRightArrow: true,
    }
  },
  mounted() {
    this.checkScroll()
  },
  methods: {
    checkScroll() {
      const list = this.$refs.list
      this.showLeftArrow = list.scrollLeft > 0
      this.showRightArrow =
        list.scrollWidth - list.clientWidth > list.scrollLeft
    },
    scrollLeft() {
      this.$refs.list.scrollLeft -= 500
    },
    scrollRight() {
      this.$refs.list.scrollLeft += 500
    },
  },
}
</script>

<style lang="scss" scoped>
.grid-body {
  display: block;
  width: 100%;
  overflow: hidden;
  box-sizing: content-box;
}
.grid-list {
  display: grid;
  grid-auto-flow: column;
  overflow-x: auto;
  overflow-y: hidden;
  scroll-behavior: smooth;
  scrollbar-width: none;
  overscroll-behavior-x: none;
  scroll-snap-type: x mandatory;
  padding: 20px 0 0 20px;
  justify-content: start;
}

.grid-title {
  font-size: 22px;
  font-weight: 500;
  padding: 20px 20px 0 20px;
}

.grid {
  position: relative;
  &:hover {
    .scroll-arrow {
      opacity: 1;
    }
  }
}

.scroll-arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  border: none;
  font-size: 2em;
  padding: 0.5em;
  cursor: pointer;
  z-index: 1;
  opacity: 0;
  transition: opacity 0.3s ease;
  background-image: url('~@/assets/imgs/arrow.svg');
  background-size: contain;
  background-position: center;
  display: block;
  width: 13px;
  height: 29px;
  background-repeat: no-repeat;
  background-color: transparent;

  &.left {
    left: 0;
  }

  &.right {
    right: 0;
    transform: scaleX(-1);
  }
  &:focus {
    outline: 2px solid #000;
  }
}
</style>
