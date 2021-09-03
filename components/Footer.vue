<template>
  <v-footer padless dark>
    <v-card class="flex" flat tile>
      <v-card-title class="teal">
        <span class="subheading" style="letter-spacing: 3px"
          >創立150周年開成祭<br /><span style="font-size: 1rem"
            >夢、刻む</span
          ></span
        >

        <v-spacer></v-spacer>
        <div v-if="!($vuetify.breakpoint.xs || $vuetify.breakpoint.sm)">
          <v-btn text style="font-size: 15px" href="#お知らせ">お知らせ</v-btn>
          <v-btn text style="font-size: 15px" href="#開成祭">開成祭とは</v-btn>
          <v-btn text style="font-size: 15px" href="#オンライン祭"
            >オンライン祭とは</v-btn
          >
          <v-btn text style="font-size: 15px" href="history">開成の150年</v-btn>
        </div>
        <v-spacer></v-spacer>

        <div v-if="!($vuetify.breakpoint.xs || $vuetify.breakpoint.sm)">
          <v-btn
            v-for="icon1 in icons1"
            :key="icon1"
            class="mx-4"
            dark
            icon
            href="https://www.youtube.com/channel/UCd4nufEmpABSr1hdLWqWj6g"
            target="_blank"
          >
            <v-icon size="24px">
              {{ icon1 }}
            </v-icon>
          </v-btn>
          <v-btn
            v-for="icon2 in icons2"
            :key="icon2"
            class="mx-4"
            dark
            icon
            href="https://twitter.com/kaisei_festival"
            target="_blank"
          >
            <v-icon size="24px">
              {{ icon2 }}
            </v-icon>
          </v-btn>
        </div>
      </v-card-title>
      <v-card-text
        v-if="$vuetify.breakpoint.xs || $vuetify.breakpoint.sm"
        style="display: flex; flex-direction: column"
      >
        <v-btn text style="font-size: 15px" href="/#お知らせ">お知らせ</v-btn>
        <v-btn text style="font-size: 15px" href="/#開成祭">開成祭とは</v-btn>
        <v-btn text style="font-size: 15px" href="/#オンライン祭"
          >オンライン祭とは</v-btn
        ></v-card-text
      >
      <v-card-text>
        <div
          v-if="$vuetify.breakpoint.xs || $vuetify.breakpoint.sm"
          style="text-align: center"
        >
          <v-btn
            v-for="icon1 in icons1"
            :key="icon1"
            class="mx-4"
            dark
            icon
            href="https://www.youtube.com/channel/UCd4nufEmpABSr1hdLWqWj6g"
            target="_blank"
          >
            <v-icon size="24px">
              {{ icon1 }}
            </v-icon>
          </v-btn>
          <v-btn
            v-for="icon2 in icons2"
            :key="icon2"
            class="mx-4"
            dark
            icon
            href="https://twitter.com/kaisei_festival"
            target="_blank"
          >
            <v-icon size="24px">
              {{ icon2 }}
            </v-icon>
          </v-btn>
        </div>
      </v-card-text>
      <v-card-text>
        <div style="text-align: center">
          <img src="/icon.svg" alt="" style="width: 70px" />
        </div>
      </v-card-text>
      <v-card-text class="py-2 white--text text-center">
        {{ new Date().getFullYear() }} —
        <span>&copy;文化祭準備委員会 広報係</span>
      </v-card-text>
    </v-card>
  </v-footer>
</template>
<script>
export default {
  data: () => ({
    icons1: ['mdi-youtube'],
    icons2: ['mdi-twitter'],
  }),
}
</script>