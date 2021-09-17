<template>
  <div class="notify">
    <div id="title">
      <landing-title
        title_ja="お知らせ"
        title_en="News"
        background_color="#f6f6f6"
      />
    </div>
    <div id="contents">
      <div class="container">
        <h2>現在開催中のイベント</h2>
        <event-card :data="data.sandansInProgress" />
      </div>
      <div class="container">
        <h2>まもなく始まるイベント</h2>
        <event-card :data="data.sandansScheduled" />
      </div>
      <div class="container">
        <h2>新しいコンテンツ</h2>
        <ul class="new-content">
          <li v-for="(item, index) in data.newsOfContents" :key="index">
            <p class="card-title">
              <span class="material-icons-outlined">notes</span>
              {{ item.title }}
            </p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script scoped>
export default {
  props: ['data'],
}
</script>

<style scoped>
h2 {
  font-size: 16px;
  font-weight: 800;
  margin: 30px 0 10px 0;
}

ul {
  display: flex;
  flex-wrap: wrap;
  row-gap: 16px;
  column-gap: 16px;
}

li {
  width: 250px;
  padding: 15px;
  display: block;
  border: 1px solid #999999;
}

p {
  margin: 0px;
}

.notify {
  font-family: 'Shippori Mincho', serif;
}

.title {
  position: static;
}

.card-title {
  font-weight: 800;
}
</style>