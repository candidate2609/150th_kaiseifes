<template>
  <!-- <p>{{ data[0].title }}</p> -->
  
  <div id="content">
    <div id="cards">
      <div class="card">
        <h2>注意</h2>
        <p v-for="(note, index) in notes" :key="index">{{ note.title }}</p>
      </div>
      <div class="card">
        <h2>重要</h2>
        <p v-for="(important, index) in importants" :key="index">{{ important.title }}</p>
      </div>
    </div>
    
    <!-- <ul>
      <li v-for="(ntf, index) in topthree" :key="index">
        {{ntf.title}}
        {{ntf.text}}
        {{ntf.datetime}}
      </li>
    </ul> -->
    <!-- <button v-on:click="change_show">全て見る</button> -->
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
    notes(){
      const res = [];
      for(let i = 0;i < this.data.length;i++){
        if(this.data[i].is_important)res.push(this.data[i]);
      }
      return res;
    },
    importants(){
      const res = [];
      for(let i = 0;i < this.data.length;i++){
        if(this.data[i].is_important)res.push(this.data[i]);
      }
      return res;
    },
    topthree(){
      if(this.data.length < 3)return this.data;
      else return this.data.slice(0,3);
    },
    view(){
      if(this.state.show)return this.data;
      else return this.topthree;
    }
  },
  watch: {

  },
  methods: {
  },
  
}
</script>

<style>



@media screen and (min-width: 1152px) {
  #content {
    position: absolute;
    left: 0;
    top: 0;
    margin-left: 387px;
  }

  /* cards */
  #cards{
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 0px;

    position: static;
    width: 694px;
    height: 212px;
    left: 0px;
    top: 0px;

    flex: none;
    order: 0;
    flex-grow: 0;
    margin: 27px 0px;
  }

  /* card */
  .card {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 20px;

    position: static;
    width: 327px;
    /* height: 212px; */
    left: 0px;
    top: 0px;

    background: #F6F6F6;
    
    flex: none;
    order: 0;
    flex-grow: 1;
    margin: 0px 40px;
  }

  .card p {
    margin: 0;
  }
}
@media screen and (max-width: 1152px) {
  
}
@media screen and (max-width: 800px) {
  #content {
    width: 100vw;
    display: flex;
    justify-content: center;
  }
  #cards {
  }
  .card {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 15px;

    position: static;
    max-width: 327px;
    width: calc(100vw - 30px);
    /* height: 130px; */
    left: 15px;
    top: 232px;

    background: #F6F6F6;

    flex: none;
    order: 1;
    align-self: stretch;
    flex-grow: 0;
    margin: 26px 0px;
  }
}
</style>