<template>
  <div id="app">
    <router-view></router-view>
    <Toast></Toast>
    <aDialog></aDialog>
    <Loading></Loading>
    <ApiLoading></ApiLoading>
    <popUp></popUp>
  </div>
</template>

<script>
import Toast from './components/Toast.vue'
import aDialog from './components/Dialog.vue'
import Loading from './components/loading.vue'
import ApiLoading from './components/ApiLoading.vue'
import popUp from './components/popUp.vue'

export default {
  name: 'app',
  components: { Toast, aDialog, Loading, ApiLoading, popUp }
}
</script>

<style lang="stylus">
html,body
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  background-color #f7f7f7
  margin 0
  padding 0
#app
  font-family 'Avenir', Helvetica, Arial, sans-serif
  text-align center
  color #2c3e50
</style>
