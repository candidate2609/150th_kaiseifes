<template>
  <v-carousel
    :show-arrows="false"
    hide-delimiter-background
    style="position: relative"
  >
    <v-carousel-item
      v-for="(item, i) in items"
      :key="i"
      :src="item.src"
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
          src: '/landing/logo_ver1.png',
        },
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