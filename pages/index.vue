<template>
  <div>
    <carousel />
    <section class="animated-section d-flex" style="background-color: #ffffff">
      <landing-title
        title_ja="お知らせ"
        title_en="News"
        background_color="#f6f6f6"
      />
      <!-- お知らせの実装は -->
      <notify :data="notify" />
      <!-- この間 -->
    </section>
    <section class="animated-section d-flex" style="background-color: #f6f6f6">
      <landing-title
        title_ja="開成祭"
        title_en="Kaisei Festival"
        background_color="#ffffff"
      />
      <!-- 開成祭の実装は -->

      <!-- この間 -->
    </section>
    <section class="animated-section d-flex" style="background-color: #ffffff">
      <landing-title
        title_ja="オンライン開成祭"
        title_en="Kaisei Festival Online"
        background_color="#f6f6f6"
      />
      <!-- オンライン開成祭の実装は -->

      <!-- この間 -->
    </section>
  </div>
</template>

<style>
.animated-section {
  padding-top: 1rem;
  padding-bottom: 1rem;
  padding-left: 5rem;
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
