<template>
  <div style="writing-mode: vertical-lr" class="title" :style="BackgroundColor">
    <h1>{{ title_ja }}</h1>
    <p>{{ title_en }}</p>
  </div>
</template>

<script>
export default {
  props: ['title_ja', 'title_en', 'background_color'],
  computed: {
    BackgroundColor() {
      return {
        '--background-color': this.background_color,
      }
    },
  },
}
</script>

<style>
.title {
  background-color: var(--background-color);
  padding: 2rem 1rem 4rem 1rem;
  margin: 2rem 2rem 2rem 2rem;
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  z-index: 100;
}
.title h1 {
  font-size: 4rem;
  letter-spacing: 0.5rem;
  white-space: nowrap;
}
.title p {
  font-size: 1rem;
  margin-top: 5px;
  letter-spacing: 2px;
}
</style>