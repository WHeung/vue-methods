<template>
  <div :class="$style.loading" v-if="show">
    <div :class="$style.circle">
      <div :class="$style.circular"></div>
      <div :class="$style.circular"></div>
      <div :class="$style.circular"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'mixLoading-component',
  computed: {
    show () {
      return this.$store.state.global.mixLoading
    }
  }
}
</script>

<style lang="stylus" module>
.loading
  top 0
  left 0
  width 100%
  height 100%
  display flex
  justify-content center
  align-items center
  position fixed
  z-index 99
  background-color rgba(255,255,255,.6)

.circle
  width 42px
  height 42px
  position relative
  opacity .5

.circular
  height 100%
  width 100%
  border-radius 50%
  position absolute
  animation loading-rotate 3s linear infinite
  transform-origin 48% 48%
  mix-blend-mode screen
  &:first-child
    background-color #0801fb
  &:nth-child(2)
    animation-delay -1s
    background-color #1ffe27
  &:last-child
    animation-delay -2s
    background-color #fd1a20

@keyframes loading-rotate
  to
    transform rotate(360deg)
</style>
