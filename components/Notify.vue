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
      <div v-if="data.sandansInProgress.length > 0" class="cards">
        <h2 style="margin-top: 16px;">現在開催中のイベント</h2>
        <event-card :data="data.sandansInProgress" />
      </div>
      <div v-if="data.sandansScheduled.length > 0" class="cards">
        <h2>まもなく始まるイベント</h2>
        <event-card :data="data.sandansScheduled" />
      </div>
      <div class="cards">
        <h2>新しいコンテンツ</h2>
        <ul>
          <li class="card-info" v-for="(item, index) in data.newsOfContents" :key="index">
            <span class="card-icon material-icons-outlined">notes</span>
            <p class="card-title">{{ item.title }}</p>
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
h1 {
  display: static;
}

h2 {
  font-size: 16px;
  font-weight: 800;
  margin: 30px 0 20px 0;
}

ul {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  row-gap: 16px;
  column-gap: 16px;
}

li {
  padding: 15px;
  display: block;
  border: 1px solid #999999;
}

p {
  margin: 0px;
}

.notify {
  font-family: 'Shippori Mincho', serif;
  display: flex;
  flex-direction: column;
}

@media screen and (min-width: 600px) {
  .notify {
    flex-direction: row;
  }
}

.cards {
  margin-left: 20px;
  margin-right: 18px;
}

@media screen and (min-width: 960px) {
  .cards {
    margin-right: 32px;
  }
}

.title {
  position: static;
}

/* new content */

.card-info {
  display: flex;
  flex-direction: row;
}

.card-icon {
  margin-top: 0.05em;
  margin-right: 0.5em;
  font-size: 1.5em;
}

.card-title {
  font-weight: 800;
}

.material-icons-outlined {
  vertical-align: -0.15em;
}

#contents {
  margin-top: 35px;
  flex: 2;
}

@media screen and (min-width: 600px) {
  #contents {
    margin-top: 0px;
  }
}
</style>