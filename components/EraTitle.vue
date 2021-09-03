<template>
  <div class="era-title">
    <div class="era-title-border"></div>
    <h2>{{ $slots.default[0].text }}</h2>
  </div>
</template>

<style scoped>
h2 {
  font-size: 22px;
  font-weight: 800;
}

.era-title-border {
  margin-bottom: 9px;
  border-bottom: solid 2px #FAD576;
  width: 5em;
}

.era-title {
  margin-top: 45px;
  margin-bottom: 28px;
}
</style>

<script>
export default {

}
</script>
