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

<style lang="scss">
#loading {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  z-index: 9999;
  position: fixed;
  background-color: rgba(#000, 0.5);
}
</style>

<script>
export default {
  data: () => ({
    loading: false,
  }),
  created() {
    this.$nuxt.$on('toggleLoading', (loading) => {
      this.loading = loading
    })
  },
}
</script>