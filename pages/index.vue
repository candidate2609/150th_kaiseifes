<template>
  <div style="relative">
    <carousel style="border-bottom: 1px solid #a28756" />
    <section class="animated-section" style="background-color: #ffffff">
      <landing-title
        title_ja="お知らせ"
        title_en="News"
        background_color="#f6f6f6"
        id="お知らせ"
      />
      <!-- お知らせの実装は -->

      <!-- この間 -->
    </section>
    <section class="animated-section" style="background-color: #f6f6f6">
      <landing-title
        title_ja="開成祭"
        title_en="Kaisei Festival"
        background_color="#ffffff"
        id="開成祭"
      />
      <!-- 開成祭の実装は -->

      <!-- この間 -->
    </section>
    <section class="animated-section" style="background-color: #ffffff">
      <landing-title
        title_ja="オンライン開成祭"
        title_en="Kaisei Festival Online"
        id="オンライン開成祭"
        background_color="#f6f6f6"
      />
      <!-- オンライン開成祭の実装は -->

      <!-- この間 -->
    </section>
    <div class="scrollup" fixed><a href="#navbar">先頭へ戻る</a></div>
  </div>
</template>

<style>
.animated-section {
  background-size: cover;
  position: relative;
  min-height: 500px;
}
.scrollup {
  position: fixed;
  left: 98%;
  bottom: 130px;
  z-index: 100;
}
.scrollup a {
  /*描画位置*/
  position: absolute;
  right: 10px;
  top: 40px;
  /*テキストの形状*/
  color: #000;
  font-size: 0.7rem;
  letter-spacing: 0.05em;
}
.scrollup::after {
  content: '';
  /*描画位置*/
  position: absolute;
  top: 0;
  /*線の形状*/
  width: 1px;
  height: 100px;
  background: #000;
  animation: pathup 2s ease-in-out infinite;
  opacity: 0;
}
@keyframes pathup {
  0% {
    height: 0;
    top: 100px;
    opacity: 0;
  }
  30% {
    height: 50px;
    opacity: 1;
  }
  100% {
    height: 0;
    top: 0;
    opacity: 0;
  }
}
</style>

<script>
export default {}
</script>