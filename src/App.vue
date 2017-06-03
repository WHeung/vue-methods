<template>
  <div id="app">
    <img src="./assets/logo.png">
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

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
