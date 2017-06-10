<template>
  <div class="container" ref="container" @touchmove.prevent="">
    <div class="scrollwrap" ref="scrollwrap" v-i-scroll>
      <div class="hello">
        <h1>{{ msg }}</h1>
        <h2>Toast</h2>
        <button @click="toast">click me</button>
        <h2>mixLoading</h2>
        <button @click="mixLoading">click me</button>
        <h2>背景渐变动画</h2>
        <div class="gradientBg"></div>
        <h2>使用iScroll横向滚动页面</h2>
        <div class="eventPassthrough" v-i-scroll="{ eventPassthrough: true, scrollX: true, scrollY: false }">
          <div>
            <div>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
            <div>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
            <div>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to vue-methods'
    }
  },
  created () {
    this.$store.dispatch(this.$types.CLOSE_LOADING)
  },
  mounted () {
    this.$refs.scrollwrap.style.height = window.innerHeight - this.$refs.container.offsetTop + 'px'
  },
  methods: {
    toast () {
      this.$store.dispatch(this.$types.OPEN_TOAST, { content: 'hello' })
    },
    mixLoading () {
      this.$store.dispatch(this.$types.OPEN_MIX_LOADING)
      setTimeout(() => {
        this.$store.dispatch(this.$types.CLOSE_MIX_LOADING)
      }, 5000)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
h1, h2
  margin-top 0
  padding-top 20px
  font-weight normal

.scrollwrap
  overflow hidden

.hello
  height 10000px

.eventPassthrough
  display flex
  >div
    flex 0 0 auto
    display flex
    >div
      width 200px
      flex 0 0 auto
      margin 20px
      border 1px solid #d8d8d8

.gradientBg
  position relative
  overflow hidden
  width 80%
  height 80px
  margin 40px auto
  &:before
    content ''
    position absolute
    top -100%
    left -100%
    bottom -100%
    right -100%
    background linear-gradient(45deg, #ffc700 0%, #e91e1e 50%, #6f27b0 100%)
    background-size 100% 100%
    animation bgposition 8s infinite linear alternate
    z-index -1

@keyframes bgposition
  0%
    transform translate(30%, 30%)
  25%
    transform translate(30%, -30%)
  50%
    transform translate(-30%, -30%)
  75%
    transform translate(-30%, 30%)
  100%
    transform: translate(30%, 30%);
</style>
