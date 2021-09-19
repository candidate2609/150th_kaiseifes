<template>
  <div>
    <v-app-bar
      color="accent-1"
      light
      flat
      style="background-color: rgba(246, 246, 246, 1); z-index: 1500"
    >
      <v-img
        class="mr-3"
        src="/icon.svg"
        max-height="40"
        max-width="40"
      ></v-img>
      <v-toolbar-title style="font-weight: 400; letter-spacing: 2px"
        ><a href="/" style="text-decoration: none; color: black"
          >開成祭</a
        ></v-toolbar-title
      >

      <div v-if="!($vuetify.breakpoint.xs || $vuetify.breakpoint.sm)">
        <v-btn text style="font-size: 15px" href="/history">開成の150年</v-btn>
        <v-btn text style="font-size: 15px" href="/info_local"
          >現地用サイト</v-btn
        >
        <v-btn text style="font-size: 15px" href="/beauty_pageant"
          >ミスコン</v-btn
        >
        <v-btn text style="font-size: 15px" href="/online">online企画</v-btn>
        <v-btn text style="font-size: 15px" href="/live">ライブ配信会場</v-btn>
        <v-btn text style="font-size: 15px" href="/cluster">cluster</v-btn>
        <v-btn text style="font-size: 15px" href="/lecture">講演会</v-btn>
      </div>
      <v-spacer
        v-if="$vuetify.breakpoint.xs || $vuetify.breakpoint.sm"
      ></v-spacer>
      <v-app-bar-nav-icon
        v-if="$vuetify.breakpoint.xs || $vuetify.breakpoint.sm"
        @click="drawer = true"
      />
      <!---
      <v-btn
        icon
        @click="drawer = true"
        v-if="$vuetify.breakpoint.xs || $vuetify.breakpoint.sm"
      >
        <v-icon>mdi-chevron-left</v-icon>
      </v-btn>
      <-->
    </v-app-bar>
    <v-navigation-drawer
      v-model="drawer"
      temporary
      left
      absolute
      style="z-index: 1000"
    >
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6"> </v-list-item-title>
          <v-list-item-subtitle> </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>
      <v-list nav dense>
        <v-list-item-group active-class="text--accent-4">
          <v-list-item href="/history" @click="drawer = false">
            <v-list-item-title>開成の150年</v-list-item-title>
          </v-list-item>

          <v-list-item href="/info_local" @click="drawer = false">
            <v-list-item-title>現地用サイト</v-list-item-title>
          </v-list-item>

          <v-list-item href="/beauty_pageant" @click="drawer = false">
            <v-list-item-title>ミスコン</v-list-item-title>
          </v-list-item>

          <v-list-item href="/online" @click="drawer = false">
            <v-list-item-title>online企画</v-list-item-title>
          </v-list-item>

          <v-list-item href="/live" @click="drawer = false">
            <v-list-item-title>ライブ配信</v-list-item-title>
          </v-list-item>

          <v-list-item href="/cluster" @click="drawer = false">
            <v-list-item-title>cluster</v-list-item-title>
          </v-list-item>

          <v-list-item href="/lecture" @click="drawer = false">
            <v-list-item-title>講演会</v-list-item-title>
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
    }
  },
  watch: {
    group() {
      this.drawer = false
    },
  },
}
</script>
