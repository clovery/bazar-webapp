<template lang="jade">
.container
  router-view.site-content(keep-alive)
  global-bar
</template>

<style lang="stylus">
html, body
  margin: 0
  padding: 0
  height: 100%

body
  font-size: 14px

  @media screen and (min-width: 374px)
    // iPhone 6以上的屏幕字体放大
    font-size: 14px * 1.142857143

.container
  display: -webkit-box
  display: -ms-flexbox
  display: -webkit-flex
  display: flex
  -webkit-box-orient: vertical
  -webkit-flex-direction: column
  -ms-flex-direction: column
  flex-direction: column
  height: 100%

.site-content
  overflow: scroll
  -webkit-overflow-scrolling: touch
  -webkit-box-flex: 1
  -webkit-flex: 1 1 0px
  -ms-flex: 1 1 0px
  flex: 1 1 0px
</style>
