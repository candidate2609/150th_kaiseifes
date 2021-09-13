<template>
  <div>
    <div v-if="loading" id="loading">
      <v-progress-circular indeterminate />
    </div>
    <Kaibutuseimu-header id="navbar"/>
    <Nuxt />
    <Footer id="footer" />
  </div>
</template>

<script>
export default {
  head: {
    title: '解物成務',
    meta: [
      { charset: 'utf-8'},
      { hid: 'description', content:'' },
      { name: 'viewport', content:'width=device-width, initial-scale=1' },
    ],
  },
}
</script>

<style scoped>
h1 {
  display: block;
  font-size: 2em;
  margin-block-start: 0.67em;
  margin-block-end: 0.67em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
}
</style>
