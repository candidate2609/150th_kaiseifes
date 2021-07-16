<template>
  <v-footer padless dark style="margin-top: 10rem">
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
          <v-btn text style="font-size: 15px" href="#オンライン開成祭"
            >オンライン開成祭とは</v-btn
          >
        </div>
        <v-spacer></v-spacer>

        <div v-if="!($vuetify.breakpoint.xs || $vuetify.breakpoint.sm)">
          <v-btn
            v-for="icon in icons"
            :key="icon"
            class="mx-4"
            dark
            icon
            href="https://twitter.com/kaisei_festival?s=20"
            target="_blank"
          >
            <v-icon size="24px">
              {{ icon }}
            </v-icon>
          </v-btn>
        </div>
      </v-card-title>
      <v-card-text
        v-if="$vuetify.breakpoint.xs || $vuetify.breakpoint.sm"
        style="display: flex; flex-direction: column"
      >
        <v-btn text style="font-size: 15px" href="#お知らせ">お知らせ</v-btn>
        <v-btn text style="font-size: 15px" href="#開成祭">開成祭とは</v-btn>
        <v-btn text style="font-size: 15px" href="#オンライン開成祭"
          >オンライン開成祭とは</v-btn
        ></v-card-text
      >
      <v-card-text>
        <div
          v-if="$vuetify.breakpoint.xs || $vuetify.breakpoint.sm"
          style="text-align: center"
        >
          <v-btn
            v-for="icon in icons"
            :key="icon"
            class="mx-4"
            dark
            icon
            href="https://twitter.com/kaisei_festival?s=20"
            target="_blank"
          >
            <v-icon size="24px">
              {{ icon }}
            </v-icon>
          </v-btn>
        </div>
      </v-card-text>
      <v-card-text>
        <div style="text-align: center">
          <img src="icon.svg" alt="" style="width: 70px" type=”image/svg+xml”/>
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
    icons: ['mdi-facebook', 'mdi-twitter', 'mdi-instagram'],
  }),
}
</script>