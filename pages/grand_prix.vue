<template>
  <div>
    <landing-title
      title_ja="グランプリ"
      title_en="Grand Prix"
      background_color="#ffffff"
      style="margin-top: 5em; border-top: 1vw solid #9a0100"
    />
    <div style="position: relative; margin-bottom: 2rem">
      <img
        class="celeb-hero-img"
        src="/grand_prix/grand_prix.jpeg"
        alt=""
        style=""
      />
      <div
        v-if="!($vuetify.breakpoint.xs || $vuetify.breakpoint.sm)"
        class="hero-description"
        style="background-color: #ffffff"
      >
        <h3>参団の頂点、決定。</h3>
        <p>
          全ての参団が目指す頂点、参団グランプリ。来場者の投票がその行く末を左右する。<br />文化祭を制したのは、一体どこだ!?
        </p>
      </div>
    </div>
    <div class="d-flex justify-content-around" style="flex-wrap: wrap">
      <v-col cols="11" md="5" class="celeb-card" style="padding: 3rem">
        <img
          src="/grand_prix/frame_right.png"
          alt=""
          style="position: absolute; top: 0; right: 0; width: 6rem"
        />
        <img
          src="/grand_prix/frame_right_bottom.png"
          alt=""
          style="position: absolute; bottom: 0; right: 0; width: 6rem"
        />
        <img
          src="/grand_prix/frame_left.png"
          alt=""
          style="position: absolute; bottom: 0; left: 0; width: 6rem"
        />
        <img class="celeb-card-img" src="/grand_prix/rose.svg" alt="" />
        <h3 style="font-size: 2rem"><span>総合1位</span></h3>
        <div class="d-flex align-items-center">
          <p>
            <img
              src="https://i.imgur.com/lMvshQP.png"
              alt=""
              style="width: 4rem; height: 4rem; margin-right: 1rem"
            />
          </p>
          <h3 style="font-size: 1.5rem">開成ピアノの会</h3>
        </div>
      </v-col>
      <v-col cols="11" md="5" class="celeb-card" style="padding: 3rem">
        <img
          src="/grand_prix/frame_right.png"
          alt=""
          style="position: absolute; top: 0; right: 0; width: 6rem"
        />
        <img
          src="/grand_prix/frame_right_bottom.png"
          alt=""
          style="position: absolute; bottom: 0; right: 0; width: 6rem"
        />
        <img class="celeb-card-img" src="/grand_prix/rose.svg" alt="" />
        <h3 style="font-size: 2rem"><span>総合2位</span></h3>
        <div class="d-flex align-items-center">
          <p>
            <img
              src="https://i.imgur.com/DwoyWCx.png"
              alt=""
              style="width: 4rem; height: 4rem; margin-right: 1rem"
            />
          </p>
          <h3 style="font-size: 1.5rem">物理部</h3>
        </div>
      </v-col>
      <v-col cols="11" md="5" class="celeb-card" style="padding: 3rem">
        <img
          src="/grand_prix/frame_right_bottom.png"
          alt=""
          style="position: absolute; bottom: 0; right: 0; width: 6rem"
        />
        <img class="celeb-card-img" src="/grand_prix/rose.svg" alt="" />
        <h3 style="font-size: 2rem"><span>総合3位</span></h3>
        <div class="d-flex align-items-center">
          <p>
            <img
              src="https://i.imgur.com/RvApuk1.png"
              alt=""
              style="width: 4rem; height: 4rem; margin-right: 1rem"
            />
          </p>
          <h3 style="font-size: 1.5rem">折り紙研究部</h3>
        </div>
      </v-col>
      <v-col cols="11" md="5" class="celeb-card" style="padding: 3rem">
        <img
          src="/grand_prix/frame_right_bottom.png"
          alt=""
          style="position: absolute; bottom: 0; right: 0; width: 6rem"
        />
        <img class="celeb-card-img" src="/grand_prix/rose.svg" alt="" />
        <h3 style="font-size: 2rem"><span>HR参団部門</span></h3>
        <div class="d-flex align-items-center">
          <p>
            <img
              src="https://i.imgur.com/H2SQCGx.png"
              alt=""
              style="width: 4rem; margin-right: 1rem"
            />
          </p>
          <h3 style="font-size: 1.5rem">「VS快晴」高校1年6組</h3>
        </div>
        <p>
          ※HR(ホームルーム)参団とは、中学1年性と編入組の高校1年性がクラス単位で出展する参団のことです。
        </p>
      </v-col>
      <v-col cols="11" md="5" class="celeb-card" style="padding: 3rem">
        <img
          src="/grand_prix/frame_right_bottom.png"
          alt=""
          style="position: absolute; bottom: 0; right: 0; width: 6rem"
        />
        <img class="celeb-card-img" src="/grand_prix/rose.svg" alt="" />
        <h3 style="font-size: 2rem"><span>有志参団部門</span></h3>
        <div class="d-flex align-items-center">
          <p>
            <img
              src="https://i.imgur.com/ThaS9sf.png"
              alt=""
              style="width: 4rem; margin-right: 1rem"
            />
          </p>
          <h3 style="font-size: 1.5rem">バランスアクション！VR</h3>
        </div>
        <p>
          ※有志参団とは、部が出している参団でもHR参団でもない、やりたい人が集まって出展した参団です。
        </p>
      </v-col>
      <v-col cols="11" md="5" class="celeb-card" style="padding: 3rem">
        <img
          src="/grand_prix/frame_right_bottom.png"
          alt=""
          style="position: absolute; bottom: 0; right: 0; width: 6rem"
        />
        <img class="celeb-card-img" src="/grand_prix/rose.svg" alt="" />
        <h3 style="font-size: 2rem"><span>部活参団部門</span></h3>
        <div class="d-flex align-items-center">
          <p>
            <img
              src="https://i.imgur.com/DwoyWCx.png"
              alt=""
              style="width: 4rem; margin-right: 1rem"
            />
          </p>
          <h3 style="font-size: 1.5rem">物理部</h3>
        </div>
        <p>
          ※部活参団とは、部活単位で活動の一環として出展している参団のことです。
        </p>
      </v-col>
      <v-col cols="11" md="5" class="celeb-card" style="padding: 3rem">
        <img
          src="/grand_prix/frame_right_bottom.png"
          alt=""
          style="position: absolute; bottom: 0; right: 0; width: 6rem"
        />
        <img class="celeb-card-img" src="/grand_prix/rose.svg" alt="" />
        <h3 style="font-size: 2rem"><span>実演参団部門</span></h3>
        <div class="d-flex align-items-center">
          <p>
            <img
              src="https://i.imgur.com/lMvshQP.png"
              alt=""
              style="width: 4rem; height: 4rem; margin-right: 1rem"
            />
          </p>
          <h3 style="font-size: 1.5rem">開成ピアノの会定期演奏会</h3>
        </div>
        <p>
          ※実演参団とは、演奏や講演などをステージ上などで実際に行う参団です。
        </p>
      </v-col>
      <v-col cols="11" md="5" class="celeb-card" style="padding: 3rem">
        <img
          src="/grand_prix/frame_right_bottom.png"
          alt=""
          style="position: absolute; bottom: 0; right: 0; width: 6rem"
        />
        <img class="celeb-card-img" src="/grand_prix/rose.svg" alt="" />
        <h3 style="font-size: 2rem"><span>オンライン参団部門</span></h3>
        <div class="d-flex align-items-center">
          <p>
            <img
              src="https://i.imgur.com/DwoyWCx.png"
              alt=""
              style="width: 4rem; height: 4rem; margin-right: 1rem"
            />
          </p>
          <h3 style="font-size: 1.5rem">物理部</h3>
        </div>
        <p>
          物理部のオンラインコンテンツは<a
            href="https://150th-kaiseifes.vercel.app/online#%E7%89%A9%E7%90%86%E9%83%A8"
            >こちら</a
          >からご覧いただけます。
        </p>
        <p>
          ※オンライン参団とは、オンライン上にコンテンツを展示している参団です。<a
            href="https://150th-kaiseifes.vercel.app/online"
            >こちら</a
          >からご覧いただけます。
        </p>
      </v-col>
      <v-col cols="11" md="5" class="celeb-card" style="padding: 3rem">
        <img
          src="/grand_prix/frame_right_bottom.png"
          alt=""
          style="position: absolute; bottom: 0; right: 0; width: 6rem"
        />
        <img class="celeb-card-img" src="/grand_prix/rose.svg" alt="" />
        <h3 style="font-size: 2rem"><span>文準特別賞</span></h3>
        <p>
          ※文準特別賞とは、文準が定めたルールを遵守しモラルを守り続けた参団に送られる賞です。
        </p>
        <div class="d-flex align-items-center">
          <p>
            <img
              src="https://i.imgur.com/EVAFw2k.jpg"
              alt=""
              style="width: 4rem; height: 4rem; margin-right: 1rem"
            />
          </p>
          <h3 style="font-size: 1.5rem">襷のつなぎ方次第</h3>
        </div>
      </v-col>
    </div>
  </div>
</template>

<style>
body {
  background-color: #f6f6f6;
}
.celeb-hero-img {
  min-width: 100%;
  max-height: 40rem;
  max-width: 80%;
  object-fit: cover;
}
.celeb-card {
  position: relative;
  padding: 3rem;
  background-color: white;
  margin: 2rem;
}
.celeb-card a {
  color: #9a0100;
  border-bottom: 1px solid #9a0100;
}
.celeb-card-img {
  position: absolute;
  width: 5rem;
  top: -1.5rem;
  left: -1.5rem;
}
.celeb-card h3 {
  margin-bottom: 1.5rem;
  letter-spacing: 2px;
}
.celeb-card h3 span {
  border-bottom: 4px dotted #9a0100;
}
.hero-description {
  position: absolute;
  bottom: 1rem;
  right: 0;
  padding: 1rem;
  border-top: 0.5vw solid #9a0100;
}
.hero-description h3 {
  letter-spacing: 3px;
}
.hero-description p {
  letter-spacing: 1px;
}
</style>