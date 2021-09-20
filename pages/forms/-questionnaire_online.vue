<template>
  <div>
    <h2 class="title">夢、刻む オンライン企画アンケート</h2>
    <p style="text-align: center; font-size: 13px">
      ご来場ありがとうございます。<br />アンケートへのご協力よろしくお願いします。
    </p>

    <v-row>
      <v-spacer />
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLSdlKlSdkimP6zRRBTIZf839wDErE5AStuCcxN-HgCMG2OTQ5A/viewform?embedded=true"
        height="1000px"
        frameborder="0"
        marginheight="0"
        marginwidth="0"
        style="width: 100%"
        >読み込んでいます…</iframe
      >
      <v-spacer />
    </v-row>
  </div>
</template>

<style>
iframe {
  margin: 1rem;
}
.title {
  margin-top: 2rem;
  font-size: 1.3rem;
  letter-spacing: 1px;
  text-align: center;
}
ul {
  margin-top: 1rem;
}
ul li {
  margin-left: 1rem;
  margin-bottom: 0.5rem;
}
</style>

<script>
export default {}
</script>
