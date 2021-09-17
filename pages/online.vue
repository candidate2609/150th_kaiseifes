<template>
  <div>
    <landing-title
      title_ja="online企画"
      title_en="Online Festival"
      background_color="#ffffff"
      style="margin-top: 5em; border-top: 1vw solid #335719"
    />
    <div style="position: relative; margin-bottom: 5rem">
      <img
        src="/online/cyber.jpeg"
        alt=""
        style="min-width: 100%; min-height: 250px; object-fit: cover"
      />
      <div
        v-if="!($vuetify.breakpoint.xs || $vuetify.breakpoint.sm)"
        class="hero-description"
        style="background-color: #ffffff"
      >
        <h3>オンラインならではの企画たち</h3>
        <p>
          オンラインの強みを生かした企画を掲載しております。ぜひ遊んでいってください。
        </p>
      </div>
    </div>

    <!-- ここから内容 -->
    <v-row>
      <v-spacer />
      <v-col cols="11" lg="10">
        <v-row
          class="online_card"
          v-for="(sandan, i) in sandans"
          :key="sandan"
          style="margin-top: 7rem; margin-bottom: 7rem"
        >
          <h2 class="online_card-num">{{ digital(i + 1) }}</h2>
          <v-col cols="12" md="6" class="online_card-description">
            <div class="card-title">
              <img :src="sandan.icon" alt="" />
              <div>
                <h3>{{ sandan.name }}</h3>
                <span>{{ sandan.group }}</span>
              </div>
            </div>
            <p style="border-left: 4px solid #335719; padding-left: 1.3rem">
              {{ sandan.description }}
            </p>
            <ul class="card-links">
              <li v-for="urls in sandan.contents" :key="urls">
                <a :href="urls.link" target="_blank">{{ urls.link_name }}</a>
              </li>
            </ul>
          </v-col>

          <v-col cols="12" md="5" class="online_card-carousel"
            ><!-- v-if="!($vuetify.breakpoint.xs || $vuetify.breakpoint.sm)" -->
            <slide-show :imgs="imgs[sandan.name]" />
          </v-col>
        </v-row>
      </v-col>
      <v-spacer />
    </v-row>
  </div>
</template>

<style>
.online_card {
  position: relative;
  display: flex;
  align-items: center;
  background-color: white;
  padding: 4vw;
  margin-top: 7rem;
  margin-bottom: 7rem;
}

.online_card-num {
  position: absolute;
  top: -12vh;
  left: 4vw;
  font-size: 100px;
  z-index: 100;
  color: #335719;
  letter-spacing: 0.5rem;
  background-color: rgba(250, 213, 118, 0.2);
  border-radius: 100px;
  padding: 0.5rem;
}

.online_card-description {
  margin-right: 3rem;
}
.card-title {
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
}
.card-title img {
  height: 4rem;
  width: 4rem;
  margin-right: 1rem;
}
.card-title h3 {
  font-size: 1.6rem;
  letter-spacing: 1px;
  border-bottom: 4px dotted #335719;
}

.card-links {
  border-top: 1px solid #335719;
  border-bottom: 1px solid #335719;
  padding-top: 2rem;
  padding-bottom: 2rem;
  margin-top: 3rem;
}

.card-links li {
  margin-left: 1rem;
  list-style: none;
  margin-bottom: 3px;
}

.card-links li a {
  color: black;
  border-bottom: 1px solid #335719;
}

body {
  background-color: #f3f3f3;
}

.hero-description {
  position: absolute;
  bottom: 1rem;
  right: 0;
  padding: 1rem;
  border-top: 0.5vw solid #335719;
}
.hero-description h3 {
  letter-spacing: 3px;
}
.hero-description p {
  letter-spacing: 1px;
}
</style>

<script>
import SlideShow from '../components/SlideShow.vue'
export default {
  components: { SlideShow },
  async asyncData({ $axios }) {
    const onlineSandans = await $axios
      .$get('https://kaiseifes-150th-backend.herokuapp.com/api/online_sandans')
      .then((res) => {
        return res
      })
    console.log(onlineSandans)
    return { sandans: onlineSandans }
  },
  data() {
    return {
      imgs: {
        REBORNの飛車ちゅう: [...Array(4)]
          .map((_, i) => i + 1)
          .map((d) => {
            return { src: '/online/REBORNの飛車ちゅう/' + d + '.png' }
          }),
        アクアロワイヤル: [...Array(2)]
          .map((_, i) => i + 1)
          .map((d) => {
            return { src: '/online/アクアロワイヤル/' + d + '.png' }
          }),
        最後の切り札: [...Array(4)]
          .map((_, i) => i + 1)
          .map((d) => {
            return { src: '/online/カードゲーム同好会/' + d + '.png' }
          }),
        コンピューター部大爆発: [...Array(3)]
          .map((_, i) => i + 1)
          .map((d) => {
            return { src: '/online/コンピューター部大爆発/' + d + '.png' }
          }),
        サラブレッド研究同好会: [...Array(3)]
          .map((_, i) => i + 1)
          .map((d) => {
            return { src: '/online/サラブレッド研究同好会/' + d + '.png' }
          }),
        動画研究会: [...Array(3)]
          .map((_, i) => i + 1)
          .map((d) => {
            return { src: '/online/動画研究会/' + d + '.png' }
          }),
        '嘘な猫はもういない。': [...Array(4)]
          .map((_, i) => i + 1)
          .map((d) => {
            return { src: '/online/嘘な猫はもういない。/' + d + '.png' }
          }),
        帰ってきた生物部: [...Array(5)]
          .map((_, i) => i + 1)
          .map((d) => {
            return { src: '/online/帰ってきた生物部/' + d + '.png' }
          }),
        弁論文春: [...Array(3)]
          .map((_, i) => i + 1)
          .map((d) => {
            return { src: '/online/弁論文春/' + d + '.png' }
          }),
        '弱くても勝てます⁉8th': [...Array(3)]
          .map((_, i) => i + 1)
          .map((d) => {
            return { src: '/online/弱くても勝てます⁉8th/' + d + '.png' }
          }),
        社会科研究部: [...Array(5)]
          .map((_, i) => i + 1)
          .map((d) => {
            return { src: '/online/社会科研究部/' + d + '.png' }
          }),
        美術部: [...Array(4)]
          .map((_, i) => i + 1)
          .map((d) => {
            return { src: '/online/美術部/' + d + '.png' }
          }),
        襷のつなぎ方次第: [...Array(1)]
          .map((_, i) => i + 1)
          .map((d) => {
            return { src: '/online/襷のつなぎ方次第/' + d + '.png' }
          }),
        画龍玉睛Phytagoraswitch: [...Array(1)]
          .map((_, i) => i + 1)
          .map((d) => {
            return { src: '/online/画龍玉睛Phytagoraswitch/' + d + '.png' }
          }),
        浮: [...Array(1)]
          .map((_, i) => i + 1)
          .map((d) => {
            return { src: '/online/浮/' + d + '.png' }
          }),
        物理部: [...Array(1)]
          .map((_, i) => i + 1)
          .map((d) => {
            return { src: '/online/物理部/' + d + '.png' }
          }),
        'バランスアクション!VR': [...Array(1)]
          .map((_, i) => i + 1)
          .map((d) => {
            return { src: '/online/バランスアクション!VR/' + d + '.png' }
          }),
      },
    }
  },
  methods: {
    digital(number) {
      return ('0' + number).slice(-2)
    },
  },
}
</script>