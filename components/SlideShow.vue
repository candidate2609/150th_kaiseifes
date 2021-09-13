<template>
  <v-carousel :show-arrows="false">
    <v-carousel-item
      v-for="(item, i) in imgs"
      :key="i"
      :src="item.src"
    ></v-carousel-item>
  </v-carousel>
</template>
<script>
export default {
  props: ['imgs'],
  data() {},
}
</script>