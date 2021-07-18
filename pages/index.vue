<template>
  <div style="relative">
    <title>開成祭 開成学園 文化祭 2021</title>
    <carousel style="border-bottom: 1px solid #a28756" />
    <section
      class="animated-section"
      id="お知らせ"
      style="background-color: #ffffff"
    >
      <landing-title
        title_ja="お知らせ"
        title_en="News"
        background_color="#f6f6f6"
      />
      <!-- お知らせの実装は -->
      <notify :data="notify" />
      <!-- この間 -->
    </section>
    <section
      class="animated-section"
      id="開成祭"
      style="background-color: #f6f6f6"
    >
      <landing-title
        title_ja="開成祭"
        title_en="Kaisei Festival"
        background_color="#ffffff"
      />
      <!-- 開成祭の実装は -->
      <div>
        <shortIntroduction
          title="夢、刻む。"
          text="150年の歴史を積み重ねし開成。その流れゆく時の中で、一人一人の生徒が、胸に描く想いを表現する。そんな僕らの夢の詰まった舞台。"
          picture_name="landing/150page.jpg"
          picture_alt="150th記念ページ"
          link_to="150celebrate"
          imgLocation="order-md-0"
        />
        <shortIntroduction
          title="YouTube"
          text="総勢約2100人の開成生が作り上げた開成祭の見所を余すことなく詰め込んだ動画をぜひご覧ください。"
          picture_name="landing/youtube.jpg"
          picture_alt="開成祭公式YouTubeチャンネル"
          link_to="https://www.youtube.com/channel/UCd4nufEmpABSr1hdLWqWj6g"
          imgLocation="order-md-2"
        />
        <shortIntroduction
          title="Twitter"
          text="皆さんと創りあげていく150th開成祭。いざ羽ばたこう！お知らせ等はこちらからも。フォロー・拡散の程、よろしくお願いします。"
          picture_name="landing/twitter.jpg"
          picture_alt="開成祭公式Twitterアカウント"
          link_to="https://twitter.com/kaisei_festival"
          imgLocation="order-md-0"
        />
      </div>
      <!-- この間 -->
    </section>
    <section
      class="animated-section"
      id="オンライン開成祭"
      style="background-color: #ffffff"
    >
      <landing-title
        title_ja="オンライン開成祭"
        title_en="Kaisei Festival Online"
        background_color="#f6f6f6"
      />
      <!-- オンライン開成祭の実装は -->

      <!-- この間 -->
    </section>
    <div class="scrollup" fixed></div>
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
  bottom: 100px;
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
  animation: pathup 3s ease-in-out infinite;
  opacity: 0;
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
// export default {
//   async asyncData({ $axios }) {
//     // 取得先のURL
//     const url = "https://qiita.com/api/v2/items";
//     // リクエスト（Get）
//     const response = await $axios.$get(url);
//     // 配列で返ってくるのでJSONにして返却
//     return {
//       posts: response
//     };
//   }

// };
export default {
  async asyncData({ $axios }) {
    // const url = "https://kaiseifes-150th-backend.herokuapp.com/api/news/";
    const url = "https://kaiseifes-150th-backend.herokuapp.com/api/news/tags";
    // const res = await $axios.$get(url);
    await $axios.$get(url);
    const res =
    [
      {
        id: 1,
        title: "テストおおおおおおおお",
        text: "う　し　た　ぷ　に　き　あ　君　笑",
        datetime: new Date(),
        tag: [
          1
        ]
      },
      {
        id: 2,
        title: "two!",
        text: "two!?!?",
        datetime: new Date(),
        tag: [
          1
        ]
      },
      {
        id: 3,
        title: "three!",
        text: "threee!??!?!?!?",
        datetime: new Date(),
        tag: [
          1
        ]
      },
      {
        id: 4,
        title: "four....!",
        text: "four!wwwww",
        datetime: new Date(),
        tag: [
          1
        ]
      },
    ];
    return {
      notify: res
    };
  },
}
</script>
