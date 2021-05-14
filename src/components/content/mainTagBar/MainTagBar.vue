<template>
  <div class="main-tag-bar">
    <tag-bar>
      <tag-bar-item path="/home">
        <!--DOM引用别名需要加入~  import 则直接使用-->
        <img slot="item-icon" src="@/assets/img/tagbar/home.png" alt="">
        <img slot="item-icon-active" src="@/assets/img/tagbar/home_active.png" alt="">
      </tag-bar-item>

      <tag-bar-item path="/classify">
        <img slot="item-icon" src="@/assets/img/tagbar/classify.png" alt="">
        <img slot="item-icon-active" src="@/assets/img/tagbar/classify_active.png" alt="">
      </tag-bar-item>

      <tag-bar-item path="/carts">
        <img slot="item-icon" src="@/assets/img/tagbar/carts.png" alt="">
        <img slot="item-icon-active" src="@/assets/img/tagbar/carts_active.png" alt="">
      </tag-bar-item>

      <tag-bar-item path="/profile">
        <img slot="item-icon" src="@/assets/img/tagbar/profile.png" alt="">
        <img slot="item-icon-active" src="@/assets/img/tagbar/profile_active.png" alt="">
      </tag-bar-item>
    </tag-bar>
  </div>
</template>

<script>
import TagBar from "components/commonV/tagbar/TagBar"
import TagBarItem from 'components/commonV/tagbar/TagBarItem'


export default {
  name: "MainTagBar",
  components: {
    TagBar,
    TagBarItem
  }
}
</script>

<style scoped>

</style>
