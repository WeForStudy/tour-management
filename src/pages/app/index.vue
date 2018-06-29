<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
  }
}
</script>

<style lang="stylus">
  #app
    position absolute
    top 0
    bottom 0
    left 0
    right 0
    .router-wrapper
      position absolute
      top 0
      bottom 50px
      left 0
      right 0
    .tabWrapper
      position absolute
      bottom 0
      left 0
      right 0
</style>
