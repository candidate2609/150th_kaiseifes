<template>
  <main>
    <div id="title">
      <p>開成の150年</p>
    </div>
    <section>
      <era-title>設立</era-title>
      <dl>
        <dt>1871</dt>
        <dd>
          3月、旧加賀藩の砲術師範であった佐野鼎によって開成の前身となる共立学校の「学範」と
          「共立学校規則」が制定された。当時としては珍しく外国人にも通用する正則英語を用いた
          授業を行っていた。
        </dd>
        <dt>1877</dt>
        <dd>
          明治初期の東京は、教育制度の整備が不十分であったこともあり、私立学校が乱立していた。
          そんな中、佐野はコレラに罹患する。共立学校は廃校状態になったが、後に
        </dd>
      </dl>
    </section>
  </main>
</template>

<style scope>

main {
  background-color: black;
  color: white;
  font-weight: 600;
}

section,
#title {
  padding: 16px;
  font-family: 'Shippori Mincho';
  margin: 0 auto;
  max-width: 1100px;
}

dl dt {
  font-weight: 800;
  /* mobile */
  margin-top: 28px;
  margin-bottom: 11px;
}

#title {
  height: 335px;
  overflow: hidden;
  background-image: url(/icon_large.svg);
  /* mobile */
  background-size: 500px;
  background-clip: margin-box;
  background-position: left 18px top 23px;
}

#title p {
  position: absolute;
  top: 295px;
  font-size: 45px;
  font-weight: 700;
  letter-spacing: -0.025em;
}

@media screen and (min-width: 532px) {
  dl {
    display: grid;
    grid-template-columns: 1fr 3fr;
  }

  dl dt {
    margin: 0px;
  }

  #title {
    background-position: right 18px top 23px;
    background-clip: content-box;
  }
}
</style>

<script>

</script>
