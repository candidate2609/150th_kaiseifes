<template>
  <main>
    <div id="title">
      <p>開成の150年</p>
    </div>
    <section>
      <era-title id="establish">設立</era-title>
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
        <dt>1877</dt>
        <dd>
          明治初期の東京は、教育制度の整備が不十分であったこともあり、私立学校が乱立していた。
          そんな中、佐野はコレラに罹患する。共立学校は廃校状態になったが、後に
        </dd>
        <dt>1877</dt>
        <dd>
          明治初期の東京は、教育制度の整備が不十分であったこともあり、私立学校が乱立していた。
          そんな中、佐野はコレラに罹患する。共立学校は廃校状態になったが、後に
        </dd>
        <dt>1877</dt>
        <dd>
          明治初期の東京は、教育制度の整備が不十分であったこともあり、私立学校が乱立していた。
          そんな中、佐野はコレラに罹患する。共立学校は廃校状態になったが、後に
        </dd>
      </dl>
    </section>
    <section>
      <era-title id="establish">設立</era-title>
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
        <dt>1877</dt>
        <dd>
          明治初期の東京は、教育制度の整備が不十分であったこともあり、私立学校が乱立していた。
          そんな中、佐野はコレラに罹患する。共立学校は廃校状態になったが、後に
        </dd>
        <dt>1877</dt>
        <dd>
          明治初期の東京は、教育制度の整備が不十分であったこともあり、私立学校が乱立していた。
          そんな中、佐野はコレラに罹患する。共立学校は廃校状態になったが、後に
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

<script>
// /* eslint-disable */
export default {
  mounted: () => {
    const animation = (entries) => {
      // border に era-title-border-animation クラスを追加
      entries.forEach((entry) => {
        if (entry.intersectionRatio > 0) {
          entry.target.classList.add('era-title-border-animation')
          observer.unobserve(entry.target)
        } else {
          entry.target.classList.remove('era-title-border-animation')
        }
      })
    }
    const intersectionOptions = {
      rootMargin: '-10px',
      threshold: 1.0,
    }
    const observer = new IntersectionObserver(animation, intersectionOptions)
    const titleBorders = document.getElementsByClassName('era-title-border')
    titleBorders.forEach((element) => {
      observer.observe(element)
    })
  },
}
</script>

<style scope>
main {
  background-color: black;
  color: white;
  font-weight: 600;
}

section,
#title {
  padding: 0 16px;
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

/* ANIMATIONS */

/* この部分は JS で呼び出す */

.era-title-border-animation {
  animation-name: era-title-border;
  animation-fill-mode: forwards;
  animation-duration: 0.7s;
  animation-timing-function: ease-out;
}

@keyframes era-title-border {
  0% {
    width: 0px;
  }
  100% {
    width: 100px;
  }
}
</style>