<template>
  <v-carousel
    :show-arrows="false"
    :cycle="true"
    :interval="10000"
    light
    hide-delimiter-background
    style="margin-bottom: 1rem"
  >
    <v-carousel-item style="position: relative">
      <div
        v-if="!($vuetify.breakpoint.xs || $vuetify.breakpoint.sm)"
        style="display: flex; flex-direction: row; height: 100%; width: 100%"
      >
        <v-spacer></v-spacer>
        <p style="margin: auto">
          <img src="icon.svg" alt="" style="width: 20vw" />
        </p>
        <v-spacer></v-spacer>
        <div
          style="
            margin: auto;
            text-align: center;
            display: flex;
            flex-direction: column;
          "
        >
          <h2 style="letter-spacing: 1vw; font-size: 3.5vw">
            創立150周年記念開成祭
          </h2>
          <h3 style="margin-top: 4rem; font-size: 2.5vw; letter-spacing: 0.5vw">
            夢、刻む
          </h3>
        </div>
        <v-spacer></v-spacer>
      </div>
      <div
        v-if="$vuetify.breakpoint.xs || $vuetify.breakpoint.sm"
        style="position: absolute;
  top: 50%;
  left: 50%;
  transform: translateY(-50%) translateX(-50%);
  -webkit- transform: translateY(-50%) translateX(-50%);"
      >
        <h2 style="letter-spacing: 1.5vw; font-size: 5vw; white-space: nowrap">
          創立150周年記念開成祭
        </h2>
        <div
          style="
            margin: 0 auto;
            margin-top: 6vw;
            align-items: center;
            display: flex;
            flex-direction: row;
            justify-content: center;
          "
        >
          <p>
            <img src="icon.svg" alt="" style="width: 25vw" />
          </p>
          <h3 style="margin-left: 17vw; font-size: 3.5vw; letter-spacing: 1vw">
            夢、刻む
          </h3>
        </div>
      </div>
    </v-carousel-item>
    <v-carousel-item
      v-for="(item, i) in items"
      :key="i"
      :src="item.src"
      style="width: 100%"
    ></v-carousel-item>
    <div class="scrolldown1"><a href="#お知らせ">もっと見る</a></div>
  </v-carousel>
</template>

<style>
.scrolldown1 {
  /*描画位置※位置は適宜調整してください*/
  position: absolute;
  left: 2%;
  bottom: 0px;
  /*全体の高さ*/
  height: 100px;
}
/*Scrollテキストの描写*/
.scrolldown1 a {
  /*描画位置*/
  position: absolute;
  left: 10px;
  top: -10px;
  /*テキストの形状*/
  color: #000;
  font-size: 0.7rem;
  letter-spacing: 0.05em;
}
/* 線の描写 */
.scrolldown1::after {
  content: '';
  /*描画位置*/
  position: absolute;
  top: 0;
  /*線の形状*/
  width: 1px;
  height: 100px;
  background: #000;
  animation: pathmove 2s ease-in-out infinite;
  opacity: 0;
}

/*高さ・位置・透過が変化して線が上から下に動く*/
@keyframes pathmove {
  0% {
    height: 0;
    top: 0;
    opacity: 0;
  }
  30% {
    height: 50px;
    opacity: 1;
  }
  100% {
    height: 0;
    top: 100px;
    opacity: 0;
  }
}
</style>

<script>
export default {
  data() {
    return {
      items: [
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
        },
      ],
    }
  },
}
</script>