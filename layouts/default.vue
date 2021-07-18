<template>
  <div>
    <div id="loading" v-if="loading">
      <v-progress-circular indeterminate />
    </div>
    <Navbar id="navbar" />
    <Nuxt />
    <Footer id="footer" />
  </div>
</template>
