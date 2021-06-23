<template>
  <div>
    <v-app-bar color="accent-1" light flat>
      <v-img
        class="mr-3"
        src="icon.svg"
        max-height="40"
        max-width="40"
        contain
      ></v-img>
      <v-toolbar-title>開成祭</v-toolbar-title>

      <v-spacer></v-spacer>
      <div v-if="!($vuetify.breakpoint.xs || $vuetify.breakpoint.sm)">
        <v-btn text>アクセス</v-btn>
        <v-btn text>現地企画</v-btn>
        <v-btn text>お食事処</v-btn>
        <v-btn text>オンライン企画</v-btn>
        <v-btn text>お知らせ</v-btn>
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
    <v-app>
      <v-navigation-drawer v-model="drawer" fixed temporary>
        <v-list v-for="(item, i) in Items" :key="i" nav dense>
          <v-list-item-group>
            <v-list-item>
              <v-list-item-title v-text="item" />
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-navigation-drawer>
    </v-app>
  </div>
</template>

<script>
import constants from 'assets/js/constants'

export default {
  data() {
    return {
      drawer: false,
      menuItems: constants.menuItems,
      Items: ['アクセス', '現地企画', 'お食事処', 'オンライン企画', 'お知らせ'],
    }
  },
}
</script>


<style>
body,
.v-application {
  font-family: 'SourceHanSerif-Regular' !important;
}
</style>