<template>
  <div id="app">
    <!--要先分析问题产生的原因 在寻找解决原因的方法-->
    <!--Detail 的NavBar随scroll滚动 重点-->
    <!--不让Detail保存缓存 让他能重新请求数据-->
    <keep-alive exclude="Detail,Supermarket" :max="20">
      <router-view/>
    </keep-alive>
    <main-tag-bar class="tagbar"/>
    <icon></icon>
    <svg-icon></svg-icon>
  </div>
</template>
<script>
import MainTagBar from 'components/content/mainTagBar/MainTagBar'
import Icon from "@/components/content/Icon/Icon";
import SvgIcon from "@/components/content/Icon/svg"

export default {

  name: 'App',
  components: {
    MainTagBar,
    Icon, SvgIcon

  }
}
</script>

<style>
/* 因为不是在Js中引用 所以要用 @ 固定的格式 */
@import "assets/css/base.css";
</style>
