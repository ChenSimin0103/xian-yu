<template>
  <div class="footer">
    <div class="item item2">闲置</div>
    <div class="item item2">鱼塘</div>
    <div class="item item1">
      <!-- 这里需要块级元素？ -->
      <span class="outbox">...</span>
      <p>发布</p>
    </div>
    <div v-show="0" class="login">
      <div class="head">
        <h1 class="guide">闲鱼赚钱指南</h1>
        <ul class="navbar">
          <li>
            <p class="title">卖什么更赚</p>
            <p class="tip">教你卖什么更赚钱</p>
          </li>
        </ul>
      </div>
    </div>
    <div class="item item2">消息</div>
    <div class="item item2">我的</div>
  </div>
</template>

<script>
export default {
  name: 'NavButton'
}
</script>

<style lang="stylus" scoped>

.footer
  position fixed
  width 100%
  height 1.6rem
  z-index 500
  display flex
  bottom 0
  left 0
  background-color #ccc
  .item
    width 100%
    height 100%
    color #888
    font-size .3rem
    text-align center
</style>
