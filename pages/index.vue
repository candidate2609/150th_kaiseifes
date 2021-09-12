<template>
  <div style="relative">
    <title>開成祭 開成学園 文化祭 2021</title>
    <carousel style="border-bottom: 1px solid #a28756" />
    <arrow-button
      v-if="$vuetify.breakpoint.sm"
      text="当日のタイムテーブルはこちら"
      href="/time_table_lg.pdf"
      style="text-align: right; margin: 30px; margin-right: 30px"
    />
    <arrow-button
      v-if="!$vuetify.breakpoint.sm"
      text="当日のタイムテーブルはこちら"
      href="/time_table.pdf"
      target="_blank"
      style="text-align: right; margin: 30px; margin-right: 30px"
    />
    <section
      id="お知らせ"
      class="animated-section"
      style="background-color: #ffffff"
    >
      <landing-title
        v-if="!$vuetify.breakpoint.xs"
        title_ja="お知らせ"
        title_en="News"
        background_color="#f6f6f6"
      />
      <landing-title
        v-if="$vuetify.breakpoint.xs"
        title_ja="お知らせ"
        title_en="News"
        background_color="#f6f6f6"
        style="position: static"
      />
      <!-- お知らせの実装は -->
      <notify :data="data" style="padding-top: 2em" />
      <arrow-button
        text="メルマガ登録・解除はこちら"
        href="subscribe"
        style="text-align: right; margin-top: 30px; margin-right: 30px"
      />
      <!-- この間 -->
    </section>
    <section
      id="開成祭"
      class="animated-section"
      style="background-color: #f6f6f6"
    >
      <landing-title
        title_ja="開成祭"
        title_en="Kaisei Festival"
        background_color="#ffffff"
      />
      <div style="position: relative; margin-bottom: 6rem">
        <img src="landing/Kaisei.png" alt="" style="width: 100%" />
        <div
          v-if="!($vuetify.breakpoint.xs || $vuetify.breakpoint.sm)"
          class="hero-description"
          style="background-color: #f6f6f6"
        >
          <h3>夢、刻む</h3>
          <p>
            150年の歴史を積み重ねし開成。その流れゆく時の中で、一人一人の生徒が、胸に描く想いを表現する。そんな僕らの夢の詰まった舞台。
          </p>
        </div>
      </div>
      <!-- 開成祭の実装は -->
      <shortIntroduction
        v-if="$vuetify.breakpoint.xs || $vuetify.breakpoint.sm"
        title="夢、刻む"
        text="150年の歴史を積み重ねし開成。その流れゆく時の中で、一人一人の生徒が、胸に描く想いを表現する。そんな僕らの夢の詰まった舞台。"
        picture_name="landing/150page.jpg"
        img-location="order-md-2"
      />
      <shortIntroduction
        title="YouTube"
        text="総勢約2100人の開成生が作り上げた開成祭の見所を余すことなく詰め込んだ動画をぜひご覧ください。"
        picture_name="landing/youtube.jpg"
        picture_alt="開成祭公式YouTubeチャンネル"
        link_to="https://www.youtube.com/channel/UCd4nufEmpABSr1hdLWqWj6g"
        img-location="order-md-0"
      />
      <shortIntroduction
        title="Twitter"
        text="皆さんと創りあげていく150th開成祭。いざ羽ばたこう！お知らせ等はこちらからも。フォロー・拡散の程、よろしくお願いします。"
        picture_name="landing/twitter.jpg"
        picture_alt="開成祭公式Twitterアカウント"
        link_to="https://twitter.com/kaisei_festival"
        img-location="order-md-2"
      />

      <!-- この間 -->
    </section>
    <section
      id="オンライン祭"
      class="animated-section"
      style="background-color: #ffffff"
    >
      <landing-title
        title_ja="オンライン祭"
        title_en="Kaisei Festival Online"
        background_color="#f6f6f6"
      />
      <div style="position: relative; margin-bottom: 3rem">
        <img
          src="landing/online.png"
          alt=""
          style="width: 100%; min-height: 300px"
        />
        <div
          v-if="!($vuetify.breakpoint.xs || $vuetify.breakpoint.sm)"
          class="hero-description"
          style="background-color: white"
        >
          <h3>どこでも開成祭。</h3>
          <p>
            さまざまな制約が課される中、文化祭のあり方を模索続けた結果です。ぜひご自宅からも開成祭をお楽しみください。
          </p>
        </div>
      </div>
      <div style="text-align: center">
        <div
          style="display: inline-block;margin-left: 1rem;margin-right: 1rem;margin-bottom: 2rem;box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.5);padding: 1rem;"
        >
          <p
            style="line-height: 1.5em; display: inline-block; text-align: left"
          >
            <span
              style="border-bottom: 2px solid rgb(42, 64, 115);font-size: 2rem;line-height: 1.5em;margin-bottom: 1rem;"
              >オンライン文化祭に関して</span
            ><br /><br />
            オンライン文化祭の開催形態です。<br /><br />
            1. 当日各企画の動画がYouTube上に上がります。<br />
            2. 開成祭当日の様子をYouTubeでのライブ配信でお届けします。<br />
            3. 当日の様子を動画にてYoutubenにて後日公開します。<br />
            4. HP上で様々な企画を更新します。<br /><br />
            これらのコンテンツはライブ配信含めて10月いっぱいまで視聴可能です。<br />
            詳細や配信のタイムスケジュールは9月15日（水曜日）に掲載いたします。
          </p>
        </div>
      </div>
      <!-- オンライン祭の実装は -->
      <shortIntroduction
        v-if="$vuetify.breakpoint.xs || $vuetify.breakpoint.sm"
        title="どこでも開成祭。"
        text="さまざまな制約が課される中、文化祭のあり方を模索続けた結果です。ぜひご自宅からも開成祭をお楽しみください。"
        picture_name="landing/150page.jpg"
        img-location="order-md-2"
      />
      <shortIntroduction
        title="ペンと剣の150年"
        text="伝統深き開成。その150年の営みをオンラインで表現する。そんな僕たちの情熱あふれた舞台。"
        picture_name="landing/online/2.png"
        img-location="order-md-0"
      />
      <shortIntroduction
        title="新たなる開成。"
        text="今年7月に完成した新校舎。今明かされる全貌。バーチャルでご案内。"
        picture_name="landing/online/3.png"
        img-location="order-md-2"
      />

      <!-- この間 -->
    </section>
  </div>
</template>

<style>
.hero-description {
  position: absolute;
  bottom: 0;
  right: 0;
  width: 50vw;
  height: 20vh;
  padding: 1rem;
}
.hero-description h3 {
  letter-spacing: 3px;
}
.hero-description p {
  letter-spacing: 1px;
}
.animated-section {
  background-size: cover;
  position: relative;
  min-height: 45vw;
  padding-bottom: 10rem;
}
@keyframes pathup {
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
// fetching informations with axios
export default {
  async asyncData({ $axios }) {
    const newsUrl = 'https://kaiseifes-150th-backend.herokuapp.com/api/news/'
    const tagsUrl =
      'https://kaiseifes-150th-backend.herokuapp.com/api/news/tags'
    const news = await $axios.$get(newsUrl)
    const tagsFetched = await $axios.$get(tagsUrl)

    // tags
    const tags = {}
    for (let i = 0; i < tagsFetched.length; i++) {
      tags[tagsFetched[i].id] = tagsFetched[i].name
    }

    return {
      data: {
        news,
        tags,
      },
    }
  },
}
</script>
