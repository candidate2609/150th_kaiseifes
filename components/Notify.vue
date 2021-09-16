<template>
  <section>
    <h2>現在開催中のイベント</h2>
    <h2>まもなく始まるイベント</h2>
    <h2>新しいコンテンツ</h2>
    <ul class="new-content">
      <li v-for="(item, index) in data.news" :key="index">
        <span id="title">{{ item.title }}</span>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  props: {
    data: Object,
  },
}
</script>

<style scoped>
h2 {
  font-weight: 800;
}
</style>