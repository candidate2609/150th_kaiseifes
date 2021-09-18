<template>
  <div class="notify">
    <div id="title">
      <div v-if="!$vuetify.breakpoint.xs">
        <landing-title
          title_ja="お知らせ"
          title_en="News"
          background_color="#f6f6f6"
        />
      </div>
      <div v-if="$vuetify.breakpoint.xs">
        <h2
          style="background-color: #f6f6f6;padding: 1rem;font-size: 2rem;margin: 1rem;"
        >
          お知らせ
        </h2>
      </div>
    </div>
    <div id="contents">
      <div v-if="data.sandansInProgress.length > 0" class="cards">
        <h2 style="margin-top: 16px">現在開催中のイベント</h2>
        <event-card :data="data.sandansInProgress" />
      </div>
      <div v-if="data.sandansScheduled.length > 0" class="cards">
        <h2>まもなく始まるイベント</h2>
        <event-card :data="data.sandansScheduled" />
      </div>
      <div class="cards">
        <h2>新しいコンテンツ</h2>
        <ul>
          <li
            class="card"
            v-for="(item, index) in data.newsOfContents"
            :key="index"
          >
            <span class="card-icon material-icons-outlined">notes</span>
            <div class="card-info">
              <p class="card-info-title" @click="item.display = !item.display">
                {{ item.title }}
              </p>
              <div
                class="card-info-details"
                v-if="item.display"
                v-html="item.text"
              ></div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  props: ['data'],
  created() {
    const news = this.data.newsOfContents
    news.forEach((obj) => {
      // escape html styles and tagas
      const htmlStyled = obj.text
      console.log(htmlStyled)
      const styleAttrRegex = /style=".+?"/
      const emptyTagRegex = /<p>(<br>|)<\/p>/
      const h1TagRegex = /<h1>.+?<\/h1>/
      const h2TagRegex = /<h2>.+?<\/h2>/
      const authorRegex = /---.+?担当/
      const htmlPlain = htmlStyled
        .split(styleAttrRegex)
        .join('')
        .split(emptyTagRegex)
        .join('')
        .split('<br>')
        .join('')
        .split(h1TagRegex)
        .join('')
        .split(h2TagRegex)
        .join('')
        .split(authorRegex)
        .join('')
      obj.text = htmlPlain
      // set display property
      obj.display = false
    })
  },
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
  margin: 0 18px;
}

@media screen and (min-width: 960px) {
  .cards {
    margin-left: 40px;
    margin-right: 32px;
  }
}

.title {
  position: -webkit-sticky;
  position: sticky;
}

/* new content */

.card {
  display: flex;
  flex-direction: row;
  border-radius: 0px;
}

.card-icon {
  margin-top: 0.05em;
  margin-right: 0.5em;
  font-size: 1.5em;
}

.card-info {
  display: flex;
  flex-direction: column;
}

.card-info-title {
  font-weight: 800;
}

.card-info-title:hover {
  text-decoration: underline;
}

.card-info-details {
  margin-top: 1em;
}

.card-info-details p {
  margin: 0px;
}

.card-info-details a {
  color: inherit;
}

.material-icons-outlined {
  vertical-align: -0.15em;
}

#contents {
  margin-top: 0;
  flex: 2;
}

@media screen and (min-width: 600px) {
  #contents {
    margin-top: 0px;
  }
}

@media screen and (min-width: 600px) and (max-width: 960px) {
  #title {
    width: 70px;
  }
}
@media screen and (min-width: 960px) {
  #title {
    width: 164px;
  }
}
</style>