<template>
  <div>
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
    <div class="scrollup" fixed><a href="#お知らせ">トップへ</a></div>
  </div>
</template>

<style>
.animated-section {
  background-size: cover;
  position: relative;
  min-height: 500px;
}
.scrollup {
  position: absolute;
  left: 2%;
  bottom: 0px;
}
</style>

<script>
export default {}
</script>