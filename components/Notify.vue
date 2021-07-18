<template>
  <div id="content">
    <p v-for="(item, index) in data.news" :key="index">
      {{ item.title }}
      このコンテンツのタグは
      <ul>
        <li v-for="(tag, index2) in item.tag" :key="index2">{{ data.tags[tag] }}</li>
      </ul>
      追加された日時は
      {{ item.datetime }}
    </p>
  </div>
</template>

<script>
export default {
  props: {
    data: Object
  },
}
</script>

<style>
#content{
  margin-left: 387px;
  position: absolute;
  left: 0;
  top: 0;
}
</style>