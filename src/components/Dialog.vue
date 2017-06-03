<template>
  <transition name="dialog">
    <div :class="$style.dialogWrap" v-if="show">
      <div :class="$style.dialog" v-html="content"></div>
    </div>
  </transition>
</template>

<script>

export default {
  name: 'dialog-component',
  computed: {
    content () {
      return this.$store.state.global.dialog.content
    },
    show () {
      return this.$store.state.global.dialog.show
    }
  }
}
</script>

<style lang="stylus" module>
.dialogWrap
  position fixed
  z-index 1000
  width 100%
  left 0
  bottom 80px
  display flex
  justify-content center

.dialog
  flex 0 0 auto
  font-size 13px
  background-color rgba(0, 0, 0, .8)
  border-radius 8px
  height 40px
  line-height 40px
  color #fff
  padding 0 25px
  white-space nowrap

.dialog-enter-active
  transition all .3s ease

.dialog-leave-active
  transition all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0)

.dialog-enter,
.dialog-leave-active
  transform translateX(10px)
  opacity 0

</style>
