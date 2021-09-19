<template>
  <div>
    <landing-title
      title_ja="講演会"
      title_en="Lecture"
      background_color="#ffffff"
      style="margin-top: 5em; border-top: 1vw solid #b38f36"
    />
    <div style="position: relative; margin-bottom: 5rem">
      <img
        src="/lecture/hero.png"
        alt=""
        style="width: 100%; min-height: 250px; object-fit: cover"
      />
      <div
        v-if="!($vuetify.breakpoint.xs || $vuetify.breakpoint.sm)"
        class="hero-description"
        style="background-color: #ffffff"
      >
        <h3>徳川宗家&nbsp;歴史を超え未来へ<br />そして世界へ</h3>
      </div>
    </div>
    <v-row
      style="
        display: flex;
        justify-content: center;
        padding-bottom: 2rem;
        border-bottom: 1px solid #b38f36;
        align-items: center;
        margin-bottom: 2rem;
      "
    >
      <v-col cols="11" md="5"
        ><img src="/lecture/presenter.jpg" alt="" style="width: 100%"
      /></v-col>
      <v-col cols="11" md="5">
        <span style="letter-spacing: 1px">公益財団法人徳川記念財団理事長</span>
        <h3 class="presenter_name">徳川宗家次期当主&nbsp;&nbsp;徳川家広氏</h3>
        <p
          v-if="$vuetify.breakpoint.md || $vuetify.breakpoint.lg"
          style="line-height: 1.7rem"
        >
          &nbsp;&nbsp;1965年生。次期德川宗家当主 ( 第19代
          )。学習院高等科、慶應義塾大学経済学部卒業。
          ミシガン大学で経済学修士号取得後、財団法人国際開発高等教育機構や国際連合食糧農業
          機関を歴任。その後、コロンビア大学で政治学修士号を取得。
          <br />&nbsp;&nbsp;2001年に日本へ帰国後、翻訳家、作家として活躍中。著書に『なぜ日本経済が21世紀
          をリードするのか』(NHK 出版、2012年 ) や『自分を守る経済学』(
          筑摩書房、2010年 )
          などがある。近年は德川宗家次期当主としての活動も増えており、18代当主德川恒孝に
          代わり、今年より德川記念財団理事長に就任するなど活躍の場が増えている。
        </p>
      </v-col>
    </v-row>
    <v-row style="display: flex; justify-content: center">
      <v-col cols="11" md="5" class="card-col mx-3">
        <h3 style="margin-bottom: 1rem"><span>YouTube Live</span></h3>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/ADOrDq4gRQo"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
          style="width: 100%"
        ></iframe>
      </v-col>
      <v-col cols="11" md="5" class="card-col mx-3">
        <h3 style="margin-bottom: 1rem"><span>ご質問はこちら</span></h3>
        <p>
          ご質問・ご感想などございましたら、あらかじめ以下のフォームにご記入ください。徳川氏に講演会にてご回答いただきます。
        </p>
        <iframe src="" frameborder="0"></iframe>
      </v-col>
    </v-row>
  </div>
</template>

<style>
.card-col h3 span {
  border-bottom: 4px dotted #b38f36;
}
.hero-description {
  position: absolute;
  bottom: 1rem;
  right: 0;
  padding: 1rem;
  border-top: 0.5vw solid #b38f36;
}
.hero-description h3 {
  letter-spacing: 3px;
}
.hero-description p {
  letter-spacing: 1px;
}
.presenter_name {
  font-weight: 600;
  font-size: 2rem;
  letter-spacing: 2px;
  margin-bottom: 2rem;
  border-left: 3px solid #b38f36;
  padding-left: 1rem;
}
</style>