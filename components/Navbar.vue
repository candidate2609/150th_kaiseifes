<template>
  <div>
    <v-app-bar
      color="accent-1"
      light
      flat
      style="background-color: rgba(246, 246, 246, 0.5)"
    >
      <v-img
        class="mr-3"
        src="icon.svg"
        max-height="40"
        max-width="40"
        contain
      ></v-img>
      <v-toolbar-title
        style="font-family: 'SourceHanSerif-Medium'; letter-spacing: 2px"
        >開成祭</v-toolbar-title
      >

      <v-spacer></v-spacer>
      <div v-if="!($vuetify.breakpoint.xs || $vuetify.breakpoint.sm)">
        <v-btn text style="font-size: 15px">アクセス</v-btn>
        <v-btn text style="font-size: 15px">現地企画</v-btn>
        <v-btn text style="font-size: 15px">お食事処</v-btn>
        <v-btn text style="font-size: 15px">オンライン企画</v-btn>
        <v-btn text style="font-size: 15px">お知らせ</v-btn>
      </div>
      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-menu bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-btn icon v-bind="attrs" v-on="on">
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>
      </v-menu>

      <v-app-bar-nav-icon
        @click="drawer = true"
        v-if="$vuetify.breakpoint.xs || $vuetify.breakpoint.sm"
      ></v-app-bar-nav-icon>
    </v-app-bar>
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


<style>
body,
.v-application {
  font-family: 'SourceHanSerif-Regular' !important;
}
</style>