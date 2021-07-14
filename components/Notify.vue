<template>
  <!-- <p>{{ data[0].title }}</p> -->
  
  <div id="container">
    <div id="content">
      <ul>
        <li v-for="(ntf, index) in topthree" :key="index">
          {{ntf.title}}
          {{ntf.text}}
          {{ntf.datetime}}
        </li>
      </ul>
      <button v-on:click="change_show()">全て見る</button>
    </div>
  </div>
</template>

<script>

export default {
  props: {
    data: Array
  },
  state: {
    show: false
  },
  computed: {
    topthree(){
      if(this.data.length < 3)return this.data;
      else return this.data.slice(0,3);
    },
    view(){
      if(this.state.show)return this.data;
      else return this.topthree;
    }
  },
  methods: {
    change_show(){
      this.state.show = !this.state.show;
    }
  },
  
}
</script>

<style>
#container {
  display: grid;
  grid-template-rows: 20px 1fr 20px;
  grid-template-columns: 70px 1fr 70px;
}

#content {
  grid-row: 2 / 3;
  grid-column: 2 / 3;
}
</style>