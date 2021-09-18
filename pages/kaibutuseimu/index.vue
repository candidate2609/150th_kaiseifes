<template>
  <div>
    <h2
      style="margin: auto;margin-top: 1em;margin-bottom: 1em;width: 80%;text-align: center;"
    >
      ストーリーを追いながら校舎全体に隠された謎を解き、ゴールを目指せ！
    </h2>
    <article>
      <h3>全体の流れ</h3>
      <p>
        メインページの問題へをクリックし、オープニングから読み進めて下さい。下のほうに次の問題へというボタンがあるので、あとは問題を解き進めるだけです。
      </p>
      <p><strong>答えるものを間違えないように注意してください。</strong></p>
      <br />
      <h3>インターネットに関して</h3>
      <p>
        このページではクッキーを使用しておりますので、クッキーの設定を許可にしてください。
      </p>
    </article>
    <div style="text-align: center" class="button">
      <a href="/kaibutuseimu/questionindex" style="padding: 2em 2em">問題へ</a>
    </div>
  </div>
</template>

<style>
article {
  margin: auto;
  text-align: center;
  width: 80%;
  padding: 0.5em;
  border-radius: 1em;
  border: dashed #8f6e31;
  box-shadow: 0 0 0 1em #e4b867;
  position: relative;
}
article::before {
  background-color: #e4b867;
  content: 'ルール';
  font-weight: bold;
  position: absolute;
  padding: 0 1em;
  left: 1em;
  top: -1em;
}
</style>

<script>
export default {
  layout: 'kaibutuseimu',
  created() {
    if (String(this.$cookies.get('kaibutuseimu')).length !== 12)
      this.$cookies.set('kaibutuseimu', '000000000000', {
        maxAge: 60 * 60 * 24 * 7,
      })
  },
}
</script>
