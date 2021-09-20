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
      <v-col cols="11" lg="8" class="container-m mx-auto">
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
          <h3
            class="section-title"
            style="border-bottom: 3px solid #9a0100; position: relative"
          >
            <img src="/beauty_pageant/rose.svg" alt="" style="height: 2rem" />
            <span class="section-title-num" style="color: #bf9457"
              >No.{{ i + 1 }}
            </span>
            <span v-html="item.name"></span>
          </h3>
          <p v-html="item.description"></p>
          <p class="self-intro">{{ item.self_intro }}</p>
          <slide-show :imgs="item.imgs" />
        </section>

        <v-row style="margin-bottom: 2rem; margin-top: 8rem">
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
            <img
              src="/beauty_pageant/rose_yellow.svg"
              alt=""
              style="height: 2rem"
            />
            <span class="section-title-num" style="color: #9a0100"
              >No.{{ i + 1 }} </span
            ><span v-html="item.name"></span>
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
          name: '<ruby>中井<rt>なかい</rt></ruby>&nbsp;<ruby>円大<rt>えんぞう</rt></ruby><span class="win" style="padding: 0.5rem;">優勝</span>',
          description:
            '老若男女の心を鷲掴み<br />甘いマスクに熱いハート、勇往邁進とはまさに彼のこと<br />時には、真面目すぎるが故に抜けたところがあるのもまたキュート💕<br />そんな開成のシンバに釘付けになること間違いなし！',
          self_intro: '持ち前の体力で頑張ります！',
          imgs: [...Array(9)]
            .map((_, i) => i + 1)
            .map((d) => {
              return { src: '/beauty_pageant/中井/' + d + '.JPG' }
            }),
        },
        {
          name: '<ruby>庄司<rt>しょうじ</rt></ruby>&nbsp;<ruby>眞紘<rt>まひろ</rt></ruby>',
          description:
            '開成が誇る最強の男が満を辞して登場！！博学多才で容姿端麗、弓道部と野球部の二足の草鞋を履きこなす彼は多くの人のハートを"射抜き"、"打ち抜いて"きた。そんな彼の勇姿を是非ご覧あれ！',
          self_intro:
            '高校最後の文化祭なので、悔いのないように楽しみます！皆さんも一緒に文化祭を盛り上げませんか？',
          imgs: [...Array(8)]
            .map((_, i) => i + 1)
            .map((d) => {
              return { src: '/beauty_pageant/庄司/' + d + '.JPG' }
            }),
        },
        {
          name: '<ruby>岡部<rt>おかべ</rt></ruby>&nbsp;<ruby>哲平<rt>てっぺい</rt></ruby>',
          description:
            '開成の誇るモテ男がMr.開成に登場だ！スケボーを乗りこなすイマドキ男子な一面もある一方で剣道の腕前も抜群！',
          self_intro:
            'コロナ禍で苦しい日々が続いてると思いますが、皆さんに少しでも楽しんで貰えるよう頑張ります！応援よろしくお願いします。',
          imgs: [...Array(10)]
            .map((_, i) => i + 1)
            .map((d) => {
              return { src: '/beauty_pageant/岡部/' + d + '.JPG' }
            }),
        },
        {
          name: '<ruby>小花<rt>おばな</rt></ruby>&nbsp;<ruby>栄貴<rt>はるき</rt></ruby>',
          description:
            '開成が誇るMr.パーフェクト<br>彼に当てはまる四字熟語は数知れず！<br>文武両道、眉目秀麗、唯一無二、質実剛健、開物成務、才色兼備、率先垂範、唯我独尊…ん？(？)<br>もとい、とにかく彼のカリスマ性は見るものを魅了して止まない<br>溢れ出る色気に心がビッタビタになるだろう',
          self_intro:
            '100の開成生より1の俺。人生で1番幸せな時間を約束します。会場中の全員が恋に落ちるんじゃない。俺が上がっていくだけ。本番はゴン攻めしていきます。',
          imgs: [...Array(9)]
            .map((_, i) => i + 1)
            .map((d) => {
              return { src: '/beauty_pageant/小花/' + d + '.JPG' }
            }),
        },
        {
          name: '<ruby>小西<rt>こにし</rt></ruby>&nbsp;<ruby>悠太<rt>ゆうた</rt></ruby>',
          description:
            '開成からギャップの王様登場！ダンスもやってて第一印象はクールなのにしゃべってみたらちょーーユーモアだったり、実は天然でめちゃめちゃ優しかったり、。可愛いおちゃめな一面も。☺️',
          self_intro:
            '文化祭を全力で盛り上げていけたらなって思います！応援よろしくおねがいします！',
          imgs: [...Array(10)]
            .map((_, i) => i + 1)
            .map((d) => {
              return { src: '/beauty_pageant/小西/' + d + '.JPG' }
            }),
        },
      ],
      items_ms: [
        {
          name: '<ruby>一条<rt>いちじょう</rt></ruby>&nbsp;ゆず',
          description:
            '気分屋でいつも慌ただしいパワーガール、気分でMsに参戦！気まぐれで思わせぶりな彼女の仕草に開成ボーイはタジタジ！',
          self_intro: '助けてください',
          imgs: [...Array(7)]
            .map((_, i) => i + 1)
            .map((d) => {
              return { src: '/beauty_pageant/松浦/' + d + '.JPG' }
            }),
        },
        {
          name: '<ruby>三栖<rt>みす</rt></ruby>&nbsp;<ruby>憂<rt>ゆう</rt></ruby>',
          description:
            '山梨と栃木のハーフがミス開成に登場！彼女に魅了された男はもう抜け出せないとか...麗しい笑顔のその裏には？',
          self_intro: 'どうせ私よりあの子が好きなんでしょ？',
          imgs: [...Array(4)]
            .map((_, i) => i + 1)
            .map((d) => {
              return { src: '/beauty_pageant/宮本/' + d + '.JPG' }
            }),
        },
        {
          name: '<ruby>五十嵐<rt>いがらし</rt></ruby>&nbsp;<ruby>咲羅<rt>さくら</rt></ruby>',
          description:
            'Ms.開成三番目はクール系女子！灰色の世界を覗くかの様な表情の彼女にも、時々花が開く様な笑顔が咲くんだとか。教室の窓から桜花を見る少女は何を考えているのか。いや、案外何も考えてなかったり…？',
          self_intro:
            '150周年という節目にこうしてMsに出場できたことを光栄に思います。精一杯頑張るので応援よろしくお願いします！',
          imgs: [...Array(4)]
            .map((_, i) => i + 1)
            .map((d) => {
              return { src: '/beauty_pageant/五十嵐/' + d + '.JPG' }
            }),
        },
        {
          name: '<ruby>木南<rt>きなみ</rt></ruby>&nbsp;ハルカ',
          description:
            'いつも笑顔溢れる女の子、木南ハルカがMs.開成に！その笑顔に周りも思わずニコニコしてしまう！',
          self_intro: 'Ms.開成よろしくお願いします！咲羅ちゃん可愛い…',
          imgs: [...Array(5)]
            .map((_, i) => i + 1)
            .map((d) => {
              return { src: '/beauty_pageant/楠/' + d + '.JPG' }
            }),
        },
      ],
    }
  },
}
</script>

<style>
.win {
  position: absolute;
  top: 1.3rem;
  right: -0.1rem;
  transform: rotate(20deg);
  font-size: 2rem;
  background-color: #9a0100;
  color: white;
}

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
  padding: 0.7rem 1rem;
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
  margin-bottom: 5rem;
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

.section-title-num {
  font-family: 'Allison', cursive;
  font-size: 3rem;
}
</style>
