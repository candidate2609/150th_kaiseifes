<template>
  <v-carousel :show-arrows="false">
    <v-carousel-item v-for="(item, i) in imgs" :key="i">
      <div style="display: flex; justify-content: center; height: 100%">
        <img :src="item.src" alt="" style="height: 100%" />
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