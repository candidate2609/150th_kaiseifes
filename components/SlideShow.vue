<template>
  <v-carousel
    class="carousel"
    height="50vh"
    :show-arrows="false"
    :hide-delimiter-background="true"
    :cycle="true"
  >
    <v-carousel-item v-for="(item, i) in imgs" :key="i">
      <div style="display: flex; justify-content: center; height: 100%">
        <img :src="item.src" alt="" style="max-height: 100%" width="auto" />
      </div>
    </v-carousel-item>
  </v-carousel>
</template>
<script>
export default {
  props: ['imgs'],
  data() {},
}
</script>

<style>
.carousel {
  height: 1vh;
}
</style>