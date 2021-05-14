<!-- 判断点击那个组件:
方法一: 准备两个插槽 一个是没点击状态下显示 一个是点击状态下显示的
通过 this.$route.path.indexOf(this.paths) !== -1 方法实现
      //this.$route.path当前活跃的路由path  indexOf(this.path)点击该组件获得的path  indexOf()没找到时 =-1
      //this.$route.path.indexOf(this.path) 表示this.$route.path 和 indexOf(this.paths) 是否相等
            console.log(this.$route.path.indexOf(this.path))
    //  当我点击组件 home 时 返回的内容
    // /home -> item1(/home) = 0 ture
    // /home -> item1(/classify) = -1 false
    // /home -> item1(/cat) = -1 false
    // /home -> item1(/profile) = -1 false
    在插槽内设置 v-if v-else
v-if="!isActive" 取反结果 表示 isActive = -1 表示 （在当前这个组件的path 不等于 活跃路由的path）时 即没点击状态下显示
v-else 表示 isActive != -1 表示（在当前这个组件的path 等于 活跃路由的path）时 即点击状态下显示


方法二:直接通过选择器来确定 点击了那个组件 该组件图片颜色就变浅
img:hover {
  filter: Alpha(opacity=30);
  -moz-opacity: 1;
  opacity: 0.3;
}

 -->


<template>
  <div class="tag-bar-item" v-on:click="itemClick">
    <!-- 定义插槽是为了让别人能直接在总文件 动态改变该文件的内容 -->
    <!-- v-if="!isActive" 取反结果 表示 isActive = -1 表示 （在当前这个组件的path 不等于 活跃路由的path）时 显示 -->
    <div v-if="!isActive">
      <slot name="item-icon"></slot>
    </div>
    <!-- v-else 表示 isActive != -1 表示（在当前这个组件的path 等于 活跃路由的path）时 显示 -->
    <div v-else>
      <slot name="item-icon-active"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "TagBarItem",
  //让别人传入一个路径
  props: {
    path: {
      type: String
    }
  },
  methods: {
    itemClick() {
      this.$router.replace(this.path).catch(err => {
        err
      })
    }
  },
  computed: {
    isActive() {
      return this.$route.path.indexOf(this.path) !== -1
    }
  }
}
</script>

<style scoped>

.tag-bar-item {
  flex: 1;
  text-align: center;
  height: 50px; /* 49为用户最好操作高度 */
}

img {
  width: 75px;
  height: 50px;
}

</style>
