<template>
  <div style="">
    <landing-title
      title_ja="クラスター"
      title_en="cluster"
      background_color="#ffffff"
      style="margin-top: 5em; border-top: 1vw solid #0094ff"
    />
    <div style="position: relative">
      <img
        src="/cluster/cluster.png"
        alt=""
        style="min-width: 100%; min-height: 250px; max-width: 80%"
      />
      <div
        v-if="!($vuetify.breakpoint.xs || $vuetify.breakpoint.sm)"
        class="hero-description"
        style="background-color: #ffffff"
      >
        <h3>バーチャル世界で新体験。</h3>
        <p>
          バーチャルSNS cluster を用いた3Dの世界で開成祭を楽しむ。
        </p>
      </div>
    </div>
    <v-row>
      <v-spacer></v-spacer>
      <v-col cols="11" lg="8" class="container-m mx-auto align-items-center">
        <div class="contents">
            <h2>cluster とは</h2>
            <p>
                <a href="https://cluster.mu/" target="_blank">cluster (クラスター)</a> は、スマートフォンやPC, VR機器など様々な環境からバーチャル空間に集ってイベントに参加したり、友達とコンテンツを楽しめるバーチャルSNSです。
                <br>
                お家にいながらにして新高校校舎や開成祭の企画を楽しむことができます！ぜひ、お楽しみください！！
                <br><br>
                cluster 公式サイト：<a href="https://cluster.mu/" target="_blank">cluster.mu</a>
            </p>
            <h2 id="world">ワールド一覧</h2>
            <div v-if="!($vuetify.breakpoint.xs || $vuetify.breakpoint.sm)" class="worlds">
              <div v-for="(item,i) in items_world" :key="i" class="col-md-6 landflame order-md-1">
                <h2>{{ item.name }}</h2>
                <a :href=item.href target="_blank">
                  <img :src=item.src style="width: 100%; height: auto;"/>
                </a>
                <p>{{ item.description }}</p>
              </div>
            </div>
            <div v-if="($vuetify.breakpoint.xs || $vuetify.breakpoint.sm)" class="worlds">
              <div v-for="(item,i) in items_world" :key="i" class="col-md-6 landflame order-md-1">
                <h2>{{ item.name }}</h2>
                <a :href=item.href target="_blank">
                  <img :src=item.src style="width: 100%; height: auto;"/>
                </a>
                <p>{{ item.description }}</p>
              </div>
            </div>
            <h2>clusterに参加するには</h2>
            <!-- <div class="video">
              <iframe width="560" height="315" :src=item_video title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div> -->
            <p>
                clusterに参加するには、準備が必要です。<br>詳しくは、<a href="https://clusterhelp.zendesk.com/hc/ja/articles/360057035671-cluster%E3%81%A7%E3%82%A4%E3%83%99%E3%83%B3%E3%83%88%E5%8F%82%E5%8A%A0%E3%81%99%E3%82%8B%E3%81%AB%E3%81%AF" target="_blank">ヘルプ記事 「clusterでイベント参加するには」</a> をご覧ください。<br>以下にも、準備の手順をご紹介します。
                <ol id="step">
                    <li>まず、<a href="https://clusterhelp.zendesk.com/hc/ja/sections/115000206971-%E6%8E%A8%E5%A5%A8%E7%92%B0%E5%A2%83" target="_blank">ヘルプ記事 「推奨環境」</a>にて、お使いのデバイスやネット環境が、clusterに対応しているかどうか確認してください。
                    <br>（特別な機材が必要というわけではございません。）</li>
                    <li>次に、cluster アプリケーションを<a href="https://cluster.mu/downloads" target="_blank">こちら</a>からダウンロードします。clusterは、PC・Mac・iPhone・Androidの環境に対応しています。必要に応じて、<a href="https://clusterhelp.zendesk.com/hc/ja/articles/115000826812" target="_blank">ヘルプ記事「アプリケーションのダウンロード」</a>をご参照ください。</li>
                    <li>clusterを利用するには、無料のアカウント登録が必要です。<a href="https://clusterhelp.zendesk.com/hc/ja/articles/115000827112" target="_blank">ヘルプ記事「アカウント登録の方法」</a>をご参照ください。</li>
                    <li>準備完了です。<a href="#world">お好きなバーチャルワールド</a>へ参加しましょう。<a href="https://clusterhelp.zendesk.com/hc/ja/articles/360032569372" target="_blank">ヘルプ記事「イベントへの入室について」</a>をご参照ください。</li>
                </ol>
                以上が参加手順になります。参加後の操作方法に関しては<a href="https://clusterhelp.zendesk.com/hc/ja/categories/360003035812-%E6%93%8D%E4%BD%9C%E8%AA%AC%E6%98%8E" target="_blank">ヘルプ記事「操作説明」</a>をご参照ください。
                <br>それでは、バーチャル開成祭をお楽しみください！
            </p>
        </div>
      </v-col>
      <v-spacer></v-spacer>
    </v-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items_world: [
        {
          name: '新校舎写真展',
          src: '/landing/Kaisei.png',
          href: 'https://cluster.mu/w/82a5fda2-b4f6-49d1-8b1f-8695b83aac0c/',
          description: '新校舎のちょっとした写真を展示しています'
        },
        {
          name: '折り紙研究部',
          src: '/landing/Oriken.png',
          href: 'https://cluster.mu/w/b0da2465-4093-4586-ba99-0cd037cec1f8/',
          description: '日本の伝統文化である折り紙は、今もなおさらに高度な芸術作品へと進化しています。折り研も、昨年度からさらに進化した展示でお客様をお待ちしております。',
        },
        {
          name: '写真部',
          src: '/landing/Syashinbu.jpg',
          href: 'https://cluster.mu/w/19a2abdc-294e-405d-9b19-e6e34fc99a1e',
          description: '前回の文化祭では、学校校舎での実施が叶わず、また「開成写真館」はオンライン文化祭への参加もしていなかったため、写真部員たちの作品を皆様に見て頂く機会がございませんでした。２年間お務めになられた部長が引退し、新たな執行部で手探りな部分も多かったですが、対面文化祭とオンライン文化祭の両方に参加できることを非常に嬉しく思います。２年越しの展示をお楽しみください。',
        },
        {
          name: '脱走中',
          src: '/cluster/dassochu.png',
          href: 'https://cluster.mu/w/22db6c58-0a99-45e0-9710-f8a3927b28ed/',
          description: '対面で開催された開成祭の企画『脱走中』の世界観をベースとしたゲームをclusterで作成しました。実際に企画内で使用された罠や仕掛けも再現されていて、それなりに楽しんでプレイできるようになっております。やりこみ要素は少ないですが、友達とクリアタイムを競ったりして遊ぶのもいいかもしれません。',
        },
      ],
      item_video: 'https://www.youtube.com/embed/8qcD40Dbo1w'
    }
  },
}
</script>

<style>
.contents {
  margin-top: 4rem;
}
.worlds {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  margin: 0 auto;
}
.worlds h2 {
  margin-top: 1rem;
  margin-bottom: 1rem;
} 
#step {
  margin-top: 2rem;
  margin-left: 2rem;
}
.video {
  position: relative;
  width: 95%;
  margin: 2rem 5rem 2rem 2rem;
}
.video::before{
  content:"";
  display: block;
  padding-top: 56.25%;
}
.video iframe{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
a img {
  width: 100%;
  cursor: pointer;
  transition-duration: 0.3s;
  margin-bottom: 0.5rem;
}
a img:hover {
  opacity: 0.6;
  transition-duration: 0.3s;
}
ol li {
  padding: 0.5rem 0;
}
p {
  margin-left: 1rem;
}
h2 {
  margin-top: 2rem;
  padding-left: 1rem;
  border-left: 0.5rem solid #0094ff;
  /* margin-bottom: 20px; */
}
.hero-description {
  position: absolute;
  bottom: 1rem;
  right: 0;
  padding: 1rem;
  border-top: 0.5vw solid #0094ff;
}
.hero-description h3 {
  letter-spacing: 3px;
}
.hero-description p {
  letter-spacing: 1px;
}
</style>
