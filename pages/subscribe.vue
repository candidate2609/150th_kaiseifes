<template>
  <div style="">
    <landing-title
      title_ja="開成通信"
      title_en="Email Newsletter"
      background_color="#ffffff"
      style="margin-top: 5em; border-top: 1vw solid #2a4073"
    />
    <div style="position: relative">
      <img
        src="/subscribe/paper.png"
        alt=""
        style="min-width: 100%; min-height: 250px"
      />
      <div
        class="hero-description"
        style="background-color: #ffffff"
        v-if="!($vuetify.breakpoint.xs || $vuetify.breakpoint.sm)"
      >
        <h3>メールでいち早くお届け。</h3>
        <p>
          開成祭は毎日着々と準備が進められます。日々の新情報をメールでいち早くお届けします。
        </p>
      </div>
    </div>
    <v-row>
      <v-spacer></v-spacer>
      <v-col cols="11" md="4" lg="8">
        <div class="form">
          <h2>メルマガ登録</h2>
          <p>
            お名前と、新情報を受け取りたいメールアドレスを入力してください。
          </p>
          <v-form v-model="valid">
            <v-container>
              <v-row>
                <v-col cols="12" md="12" lg="6">
                  <v-text-field
                    v-model="name"
                    :counter="20"
                    :rules="nameRules"
                    label="お名前を入力"
                    required
                  ></v-text-field>
                  <v-text-field
                    v-model="email1"
                    :rules="emailRules"
                    label="メールアドレスを入力"
                    required
                  ></v-text-field>
                </v-col>
              </v-row>
            </v-container>
            <v-btn @click="register">登録</v-btn>
          </v-form>
        </div>
        <div class="form">
          <h2>メルマガ解除</h2>
          <p>解除したいメールアドレスを入力してください。</p>
          <v-form v-model="valid">
            <v-container>
              <v-row>
                <v-col cols="12" md="12" lg="6">
                  <v-text-field
                    v-model="email2"
                    :rules="emailRules"
                    label="メールアドレスを入力"
                    required
                  ></v-text-field>
                </v-col>
              </v-row>
            </v-container>
            <v-btn @click="lift">解除</v-btn>
          </v-form>
        </div>
      </v-col>

      <v-spacer></v-spacer>
    </v-row>
  </div>
</template>

<style>
.form {
  margin-top: 4rem;
}
.form h2 {
  padding-left: 1rem;
  border-left: 0.5rem solid #2a4073;
  margin-bottom: 20px;
}
.hero-description {
  position: absolute;
  bottom: 1rem;
  right: 0;
  padding: 1rem;
  border-top: 0.5vw solid #2a4073;
}
.hero-description h3 {
  letter-spacing: 3px;
}
.hero-description p {
  letter-spacing: 1px;
}
</style>

<script>
export default {
  data: () => ({
    valid: false,
    name: '',
    nameRules: [
      (v) => !!v || 'この欄は必須です。',
      (v) => (v && v.length <= 20) || '名前が長すぎます。',
    ],
    email1: '',
    email2: '',
    emailRules: [
      (v) => !!v || 'この欄は必須です。',
      (v) => /.+@.+/.test(v) || '無効なメールアドレスです。',
    ],
  }),
  methods: {
    register() {
      const data = {
        name: this.name,
        email: this.email1,
      }
      const url =
        'https://kaiseifes-150th-backend.herokuapp.com/api/subscribe/register'
      this.$axios
        .$post(url, data)
        .then((response) => {
          alert('登録が完了しました。')
        })
        .catch((err) => {
          if (err.response.status === 400) {
            alert('すでに同じメールアドレスが登録されています。')
          } else if (err.response.status === 500) {
            alert('申し訳ございません。しばらくしてからやり直してください。')
          }
        })
    },
    lift() {
      const data = {
        email: this.email2,
      }
      const url =
        'https://kaiseifes-150th-backend.herokuapp.com/api/subscribe/cancel'
      this.$axios
        .$post(url, data)
        .then((response) => {
          alert('登録を解除しました。')
        })
        .catch((err) => {
          if (err.response.status === 404) {
            alert('このメールアドレスは登録されていません。')
          }
        })
    },
  },
}
</script>