<template>
  <div>
    <a id="link" :href="href" class="btnarrow4">{{ text }}</a>
  </div>
</template>

<script>
export default {
  props: ['text', 'href'],
}
</script>


<style>
@charset "utf-8";

/*矢印が右に移動する*/
.btnarrow4 {
  /*矢印と下線の基点とするためrelativeを指定*/
  position: relative;
  /*形状*/
  display: inline-block;
  padding: 0 20px;
  color: #333;
  letter-spacing: 1px;
  text-decoration: none;
}

/*矢印と下線の形状*/
.btnarrow4::before {
  content: '';
  /*絶対配置で下線の位置を決める*/
  position: absolute;
  bottom: -8px;
  left: 15%;
  /*下線の形状*/
  width: 85%;
  height: 1px;
  background: #333;
  /*アニメーションの指定*/
  transition: all 0.3s;
}

.btnarrow4::after {
  content: '';
  /*絶対配置で矢印の位置を決める*/
  position: absolute;
  bottom: -3px;
  right: 0;
  /*矢印の形状*/
  width: 15px;
  height: 1px;
  background: #333;
  transform: rotate(35deg);
  /*アニメーションの指定*/
  transition: all 0.3s;
}

/*hoverした際の移動*/
.btnarrow4:hover::before {
  left: 20%;
  text-decoration: none;
}

.btnarrow4:hover::after {
  right: -5%;
  text-decoration: none;
}
</style>