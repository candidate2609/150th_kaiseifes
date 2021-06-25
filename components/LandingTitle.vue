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
  padding: 4rem 1rem 6rem 1rem;
  margin: 1rem;
}
.title h1 {
  font-size: 4rem;
  letter-spacing: 5px;
}
.title p {
  font-size: 1.3rem;
  margin-top: 10px;
  letter-spacing: 2px;
}
</style>