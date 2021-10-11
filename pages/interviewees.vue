<template>
  <div>
    <landing-title
      title_ja="インタビュー"
      title_en="Interview"
      background_color="#ffffff"
      style="margin-top: 4em; border-top: 1vw solid #44617b"
    />
    <div style="position: relative; margin-bottom: 5rem">
      <img
        class="celeb-hero-img"
        src="/lecture/hero.png"
        alt=""
        style="width: 100%; min-height: 250px; object-fit: cover"
      />
      <div
        v-if="!($vuetify.breakpoint.xs || $vuetify.breakpoint.sm)"
        class="hero-description"
        style="background-color: #ffffff"
      >
        <h3>リーダーたちの本音に迫る。</h3>
        <p>
          150th文化祭を引っ張ってきた文化祭準備委員会・委員長団の長たちに、<br />色々とお聞きしました。
        </p>
      </div>
    </div>
    <div>
      <div class="d-flex flex-wrap justify-content-around">
        <div
          v-for="person in people"
          :key="person"
          class="person-card col-11 col-md-3 mb-5 mr-3 ml-3"
          style="display: block; position: relative"
        >
          <a target="_blank" :href="'/interviews/' + person.id"></a>
          <div class="d-flex align-items-center">
            <v-col cols="5" style="margin-right: 1rem">
              <img
                :src="person.face"
                alt=""
                :style="
                  'filter: drop-shadow(0.5rem 0.5rem 0px #' +
                  person.color_code +
                  ');'
                "
              />
            </v-col>
            <div>
              <h3>
                <span :style="'border-bottom:3px solid #' + person.color_code"
                  >{{ person.last_name }}&nbsp;{{ person.first_name }}</span
                >
              </h3>
              <p>{{ person.director }}</p>
            </div>
          </div>
          <hr />
          <p>{{ person.director_description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.person-card {
  position: relative;
  display: flex;
  background-color: white;
  align-items: center;
}
.person-card a {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: 100;
  transition: 0.3s;
}
.person-card a:hover {
  opacity: 0.3;
  box-shadow: 0 15px 30px -5px rgba(0, 0, 0, 0.4), 0 0 5px rgba(0, 0, 0, 0.3);
}
.person-card img {
  width: 100%;
}
.hero-description {
  position: absolute;
  bottom: 1rem;
  right: 0;
  padding: 1rem;
  border-top: 0.5vw solid #44617b;
}
.hero-description h3 {
  letter-spacing: 3px;
}
.hero-description p {
  letter-spacing: 1px;
}
body {
  background-color: #f6f6f6;
}
</style>

<script>
export default {
  async asyncData({ $axios }) {
    const interviewee = await $axios
      .$get('https://kaiseifes-150th-backend.herokuapp.com/api/interviewees')
      .then((res) => {
        return res
      })
    return { people: interviewee }
  },
}
</script>