<template>
  <div class="era-title">
    <div :id="id" class="era-title-border"></div>
    <h2>{{ $slots.default[0].text }}</h2>
  </div>
</template>

<script>
export default {
  props: ['id']
}
</script>

<style>
h2 {
  font-size: 22px;
  font-weight: 800;
}

.era-title-border {
  margin-bottom: 14px;
  border-bottom: solid 2px #FAD576;
  width: 0px;
}

.era-title {
  margin-top: 45px;
  margin-bottom: 28px;
}
</style>