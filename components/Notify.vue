<template>
  <div id="content">
    <p v-for="(item, index) in data.news" :key="index">
      <span id="time">{{ item.datetime.slice(0, 10) }}</span>
      <span id="tag">{{ data.tags[item.tag] }}</span>
      <br v-if="$vuetify.breakpoint.xs || $vuetify.breakpoint.sm" />
      <span id="title">{{ item.title }}</span>
    </p>
  </div>
</template>

<script>
export default {
  props: {
    data: Object,
  },
}
</script>

<style scoped>
#content p {
  margin-left: 10vw;
  margin-top: 2vh;
  padding-bottom: 2vh;
  border-bottom: 1px solid #f6f6f6;
}

@media screen and (min-width: 600px) {
  #content p {
    margin-left: 30vw;
  }
}

#tag {
  padding: 4px;
  margin: 0 1vw;
  background-color: #bf9547;
  color: white;
}
</style>