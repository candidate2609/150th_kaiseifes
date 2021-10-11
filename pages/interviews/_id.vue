<template>
  <div>
    <div class="person">
      <div
        class="person-title"
        :style="'border-top:0.5rem solid #' + person.color_code"
      >
        <h2>インタビュー</h2>
        <p v-if="!($vuetify.breakpoint.xs || $vuetify.breakpoint.sm)">
          {{ person.director }}
        </p>
      </div>
      <v-row
        class="d-flex justify-content-center align-items-center"
        style="background-color: white"
      >
        <v-col cols="12" md="6" class="person-img">
          <img :src="person.image" alt="" style="width: 100%" />
        </v-col>
        <v-col cols="12" md="6" class="person-info p-4">
          <span>{{ person.age }}</span>
          <h2 id="name">
            <span :style="'border-bottom:4px solid #' + person.color_code"
              >{{ person.last_name }}&nbsp;{{ person.first_name }}</span
            >
          </h2>
          <p>{{ person.director }}</p>
          <p>{{ person.director_description }}</p>
          <h3
            :style="
              'padding-left:1rem;border-left:5px solid #' + person.color_code
            "
          >
            開成での経歴
          </h3>
          <p v-html="person.carrer"></p>
        </v-col>
      </v-row>
    </div>

    <!-- カード -->
    <div class="d-flex flex-column align-items-center">
      <v-col
        cols="11"
        md="7"
        class="question-card"
        v-for="question in questions"
        :key="question"
      >
        <h3
          class="question-card-question-id"
          :style="'color:#' + person.color_code"
        >
          Q.{{ question.order }}
        </h3>
        <h3>{{ question.question }}</h3>
        <hr />
        <p v-html="question.answer"></p>
      </v-col>
    </div>
    <v-row>
      <v-spacer />
      <p style="margin-top: 10rem">
        {{ person.last_name }}&nbsp;{{
          person.first_name
        }}さん、ありがとうございました。
      </p>
      <v-spacer />
    </v-row>
  </div>
</template>
<style>
body {
  background-color: #f6f6f6;
}
.question-card {
  position: relative;
  background-color: white;
  margin-top: 8rem;
  padding: 3vw;
}
.question-card-question-id {
  position: absolute;
  top: calc(-20vh + 3vw);
  left: 1vw;
  font-family: 'Josefin San', cursive;
  font-size: 6rem;
}
.person {
  position: relative;
}
.person-title {
  position: absolute;
  top: 3vh;
  left: 3vw;
  writing-mode: vertical-lr;
  padding: 1rem;
  letter-spacing: 2px;
  background-color: white;
  z-index: 100;
}
.person-title p {
  margin-top: 1vw;
}
.person-info {
  letter-spacing: 1px;
}
</style>
<script>
export default {
  async asyncData({ $axios, params }) {
    const _questions = await $axios
      .$get(
        'https://kaiseifes-150th-backend.herokuapp.com/api/interviews/' +
          params.id
      )
      .then((res) => {
        return res
      })
    const _person = await $axios.$get(
      'https://kaiseifes-150th-backend.herokuapp.com/api/interviewees/' +
        params.id
    )
    return { questions: _questions, person: _person }
  },
}
</script>