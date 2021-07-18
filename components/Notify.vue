<template>
  <div id="content">
    <p v-for="(item, index) in data" :key="index">{{ item.title }}</p>
  </div>
</template>

<script>
export default {
  props: {
    data: Array,
  },
}
</script>

<style>
#content {
  margin-left: 387px;
  position: absolute;
  left: 0;
  top: 0;
}
</style>