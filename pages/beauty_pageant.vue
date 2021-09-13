<template>
  <div>
    <landing-title
      title_ja="ミスコン"
      title_en="Beauty Pageant"
      background_color="#ffffff"
      style="margin-top: 5em; border-top: 1vw solid #e5bd54"
    />
    <div style="position: relative; margin-bottom: 5rem">
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
    <v-row>
      <v-col cols="11" md="4" lg="8" class="container-m mx-auto">
        <v-row style="margin-bottom: 2rem">
          <img src="/beauty_pageant/Mr.svg" alt="" class="container-img" />
          <div>
            <h2>Mr. 開成 候補者紹介</h2>
            <p>
              後夜祭を飾るビッグイベント。男たちが開成男児の頂点を賭けて戦う猛き姿を、その目に焼き付けろ。
            </p>
          </div>
        </v-row>

        <section v-for="(item, i) in items_mr" :key="i">
          <h3 class="section-title" style="border-bottom: 3px solid #9a0100">
            <span style="color: #bf9457">No.{{ i + 1 }} </span>{{ item.name }}
          </h3>
          <p v-html="item.description"></p>
          <p class="self-intro">{{ item.self_intro }}</p>
          <slide-show :imgs="item.imgs" />
        </section>

        <v-row style="margin-bottom: 2rem; margin-top: 5rem">
          <img src="/beauty_pageant/Ms.svg" alt="" class="container-img" />
          <div>
            <h2>Ms. 開成 候補者紹介</h2>
            <p>
              今年も一日だけ共学化！？開成女子たちが胸キュンと淡い青春をお届けします。
            </p>
          </div>
        </v-row>
        <section v-for="(item, i) in items_ms" :key="i">
          <h3 class="section-title" style="border-bottom: 3px solid #bf9457">
            <span style="color: #9a0100">No.{{ i + 1 }} </span>{{ item.name }}
          </h3>
          <p v-html="item.description"></p>
          <p class="self-intro">{{ item.self_intro }}</p>
          <slide-show :imgs="item.imgs" />
        </section>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items_mr: [
        {
          name: '中井 円大',
          description:
            '老若男女の心を鷲掴み<br />甘いマスクに熱いハート、勇往邁進とはまさに彼のこと<br />時には、真面目すぎるが故に抜けたところがあるのもまたキュート💕<br />そんな開成のシンバに釘付けになること間違いなし！',
          self_intro: '持ち前の体力で頑張ります！',
          imgs: [
            {
              src: 'https://pbs.twimg.com/media/E_FELWmVEAEGcsd?format=jpg&name=small',
            },
            {
              src: 'https://pbs.twimg.com/media/E_FELWmUcAUjybB?format=jpg&name=small',
            },
            {
              src: 'https://pbs.twimg.com/media/E_FELWmUUAA1-oz?format=jpg&name=small',
            },
            {
              src: 'https://pbs.twimg.com/media/E_FELWnVIAAFNq0?format=jpg&name=small',
            },
          ],
        },
        {
          name: '庄司 眞紘',
          description:
            '開成が誇る最強の男が満を辞して登場！！博学多才で容姿端麗、弓道部と野球部の二足の草鞋を履きこなす彼は多くの人のハートを"射抜き"、"打ち抜いて"きた。そんな彼の勇姿を是非ご覧あれ！',
          self_intro:
            '高校最後の文化祭なので、悔いのないように楽しみます！皆さんも一緒に文化祭を盛り上げませんか？',
          imgs: [
            {
              src: 'https://pbs.twimg.com/media/E_FELWmVEAEGcsd?format=jpg&name=small',
            },
            {
              src: 'https://pbs.twimg.com/media/E_FELWmUcAUjybB?format=jpg&name=small',
            },
            {
              src: 'https://pbs.twimg.com/media/E_FELWmUUAA1-oz?format=jpg&name=small',
            },
            {
              src: 'https://pbs.twimg.com/media/E_FELWnVIAAFNq0?format=jpg&name=small',
            },
          ],
        },
        {
          name: '岡部 哲平',
          description:
            '開成の誇るモテ男がMr.開成に登場だ！スケボーを乗りこなすイマドキ男子な一面もある一方で剣道の腕前も抜群！',
          self_intro:
            'コロナ禍で苦しい日々が続いてると思いますが、皆さんに少しでも楽しんで貰えるよう頑張ります！応援よろしくお願いします。',
          imgs: [
            {
              src: 'https://pbs.twimg.com/media/E_FELWmVEAEGcsd?format=jpg&name=small',
            },
            {
              src: 'https://pbs.twimg.com/media/E_FELWmUcAUjybB?format=jpg&name=small',
            },
            {
              src: 'https://pbs.twimg.com/media/E_FELWmUUAA1-oz?format=jpg&name=small',
            },
            {
              src: 'https://pbs.twimg.com/media/E_FELWnVIAAFNq0?format=jpg&name=small',
            },
          ],
        },
        {
          name: '小花 栄貴',
          description:
            '開成が誇るMr.パーフェクト<br>彼に当てはまる四字熟語は数知れず！<br>文武両道、眉目秀麗、唯一無二、質実剛健、開物成務、才色兼備、率先垂範、唯我独尊…ん？(？)<br>もとい、とにかく彼のカリスマ性は見るものを魅了して止まない<br>溢れ出る色気に心がビッタビタになるだろう',
          self_intro:
            '100の開成生より1の俺。人生で1番幸せな時間を約束します。会場中の全員が恋に落ちるんじゃない。俺が上がっていくだけ。本番はゴン攻めしていきます。',
          imgs: [
            {
              src: 'https://pbs.twimg.com/media/E_FELWmVEAEGcsd?format=jpg&name=small',
            },
            {
              src: 'https://pbs.twimg.com/media/E_FELWmUcAUjybB?format=jpg&name=small',
            },
            {
              src: 'https://pbs.twimg.com/media/E_FELWmUUAA1-oz?format=jpg&name=small',
            },
            {
              src: 'https://pbs.twimg.com/media/E_FELWnVIAAFNq0?format=jpg&name=small',
            },
          ],
        },
        {
          name: '小西 悠太',
          description:
            '開成からギャップの王様登場！ダンスもやってて第一印象はクールなのにしゃべってみたらちょーーユーモアだったり、実は天然でめちゃめちゃ優しかったり、。可愛いおちゃめな一面も。☺️',
          self_intro:
            '文化祭を全力で盛り上げていけたらなって思います！応援よろしくおねがいします！',
          imgs: [
            {
              src: 'https://pbs.twimg.com/media/E_FELWmVEAEGcsd?format=jpg&name=small',
            },
            {
              src: 'https://pbs.twimg.com/media/E_FELWmUcAUjybB?format=jpg&name=small',
            },
            {
              src: 'https://pbs.twimg.com/media/E_FELWmUUAA1-oz?format=jpg&name=small',
            },
            {
              src: 'https://pbs.twimg.com/media/E_FELWnVIAAFNq0?format=jpg&name=small',
            },
          ],
        },
      ],
      items_ms: [
        {
          name: '中井 円大',
          description:
            '老若男女の心を鷲掴み<br />甘いマスクに熱いハート、勇往邁進とはまさに彼のこと<br />時には、真面目すぎるが故に抜けたところがあるのもまたキュート💕<br />そんな開成のシンバに釘付けになること間違いなし！',
          self_intro: '持ち前の体力で頑張ります！',
          imgs: [
            {
              src: 'https://pbs.twimg.com/media/E_FELWmVEAEGcsd?format=jpg&name=small',
            },
            {
              src: 'https://pbs.twimg.com/media/E_FELWmUcAUjybB?format=jpg&name=small',
            },
            {
              src: 'https://pbs.twimg.com/media/E_FELWmUUAA1-oz?format=jpg&name=small',
            },
            {
              src: 'https://pbs.twimg.com/media/E_FELWnVIAAFNq0?format=jpg&name=small',
            },
          ],
        },
      ],
    }
  },
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Allison&display=swap');
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

.self-intro {
  position: relative;
  padding: 1.5rem 2rem;
  border: 1px solid #d8d8d8;
  border-radius: 10px;
}

.self-intro:before {
  position: absolute;
  bottom: -14px;
  left: 1em;
  width: 0;
  height: 0;
  content: '';
  border-width: 14px 12px 0 12px;
  border-style: solid;
  border-color: #d8d8d8 transparent transparent transparent;
}

.self-intro:after {
  position: absolute;
  bottom: -10px;
  left: 1em;
  width: 0;
  height: 0;
  content: '';
  border-width: 14px 12px 0 12px;
  border-style: solid;
  border-color: #ffffff transparent transparent transparent;
}

section {
  margin-bottom: 3rem;
}

.container-m {
}
.container-m h2 {
  letter-spacing: 1px;
}
.container-img {
  margin-right: 1rem;
  height: 5rem;
}
.section-title {
}

.section-title span {
  font-family: 'Allison';
  font-size: 4rem;
}
</style>
