<template>
  <div style="absolute" class="landarticle">
    <div class="container">
      <div class="row">
        <div class="col-md-6 landflame" :class="imgLocation">
          <a :href="link_to">
            <div class="expand">
              <img
                :src="picture_name"
                :alt="picture_alt"
                style="width: 100%; height: auto; position: relative"
                class="eximg"
              />
              <h1 class="exh1">{{ picture_alt }}</h1>
            </div>
          </a>
        </div>
        <div class="col-md-6 landflame d-flex align-items-center order-md-1">
          <div style="padding: 5vw">
            <h1 style="font-size: 30px">{{ title }}</h1>
            <br />
            <p>{{ text }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: [
    'title',
    'text',
    'picture_name',
    'picture_alt',
    'link_to',
    'imgLocation',
  ],
}
</script>

<style>
.landarticle {
  display: block;
  position: relative;
  margin: 10px auto;
  padding: auto;
  width: 100vw;
  vertical-align: sub;
}
.landflame {
  padding: 2vw;
}
.expand:hover {
  transform: scale(1.05, 1.05);
  transition: 0.5s all;
  background-color: #000000;
}
.expand h1 {
  color: white;
  left: 50%;
  margin: 0;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  opacity: 0;
}
.expand:hover .eximg {
  opacity: 0.7;
}
.expand:hover .exh1 {
  opacity: 1;
}

.landarticle h1 {
  font-size: 20px;
  letter-spacing: 0.5vw;
  margin: 0px;
}
.landarticle p {
  font-size: 16px;
  margin: auto;
  padding: 0px;
}
</style>