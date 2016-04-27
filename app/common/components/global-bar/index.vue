<template lang="jade">
.global-bar
  nav.mui-flex.align-center
    .nav-item.cell.align-stretch(v-for='nav in navs')
      div(v-link='{ name: nav.route }')
        i.icon
        span {{ nav.name }}
</template>

<script>
export default {
  data() {
    return {
      navs: [
        {
          name: '首页',
          route: 'home'
        },
        {
          name: '逛'
        },
        {
          name: '购物车',
          route: 'cart'
        },
        {
          name: '我的',
          route: 'mine'
        }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
.global-bar
  nav
    border-top: 1px solid #E7E7E7
    border-bottom: 1px solid #F8F8F8
    padding-top: 4px
    width: 100%
    height: 38px
    display: -webkit-box
    display: -moz-box
    display: -ms-flexbox
    display: flex
    -webkit-box-pack: justify
    -moz-box-pack: justify
    -ms-flex-pack: justify
    -webkit-box-align: center
    -moz-box-align: justify
    -ms-flex-align: center
    justify-content: space-between
    align-content: center
    background-color: #fff
  .nav-item
    color: #5D656B
    -webkit-box-flex: 1
    -moz-box-flex: 1
    -webkit-flex: 1
    -ms-flex: 1
    flex: 1
    text-align: center
    box-sizing: border-box
    display: block
    line-height: 38px
</style>
