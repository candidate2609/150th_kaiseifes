<template>
  <div>
    <landing-title
      title_ja="Mr.&amp;Ms.開成"
      title_en="Beauty Pageant"
      background_color="#ffffff"
      style="margin-top: 5em; border-top: 1vw solid #e5bd54"
    />
    <div style="position: relative">
      <img
        src="/beauty_pageant/hero.svg"
        alt=""
        style="min-width: 100%; min-height: 250px"
      />
      <div
        v-if="!($vuetify.breakpoint.xs || $vuetify.breakpoint.sm)"
        class="hero-description"
        style="background-color: #ffffff"
      >
        <h3>開成生の頂点をかけた戦い。</h3>
        <p>
          開成の美男・美女（？）が一堂に会する時が来た...
          開成の頂点をかけたガチバトルが今、始まる。
        </p>
      </div>
    </div>
    <div>
      <img src="/beauty_pageant/Mr.svg" alt="" />
      <h2>Mr. 開成 出場者紹介</h2>
    </div>
  </div>
</template>

<style>
.hero-description {
  position: absolute;
  bottom: 1rem;
  right: 0;
  padding: 1rem;
  border-top: 0.5vw solid #e5bd54;
}
.hero-description h3 {
  letter-spacing: 3px;
}
.hero-description p {
  letter-spacing: 1px;
}
</style>
