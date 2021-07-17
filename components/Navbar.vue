<template>
  <div>
    <v-app-bar
      color="accent-1"
      light
      flat
      style="background-color: rgba(246, 246, 246, 1); z-index: 1500"
    >
      <v-img class="mr-3" src="icon.svg" max-height="40" max-width="40"></v-img>
      <v-toolbar-title style="font-weight: 400; letter-spacing: 2px"
        >開成祭</v-toolbar-title
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

      <v-app-bar-nav-icon
        @click="drawer = true"
        v-if="$vuetify.breakpoint.xs || $vuetify.breakpoint.sm"
      ></v-app-bar-nav-icon>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" temporary fixed style="z-index: 1000">
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6"> Application </v-list-item-title>
          <v-list-item-subtitle> subtext </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>
      <v-list nav dense>
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
          <v-list-item href="#お知らせ" @click="drawer = false">
            <v-list-item-title>お知らせ</v-list-item-title>
          </v-list-item>

          <v-list-item href="#開成祭" @click="drawer = false">
            <v-list-item-title>開成祭について</v-list-item-title>
          </v-list-item>

          <v-list-item href="#オンライン開成祭" @click="drawer = false">
            <v-list-item-title>オンライン開成祭について</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      Items: ['アクセス', '現地企画', 'お食事処', 'オンライン企画', 'お知らせ'],
    }
  },
  watch: {
    group() {
      this.drawer = false
    },
  },
}
</script>
