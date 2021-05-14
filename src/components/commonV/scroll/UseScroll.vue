<template>
  <div class="use-scroll" ref="scroll">
    <div class="scroll-list">
      <slot></slot>
      <div class="pull-up-tips">
        <div v-if="!isPullUpLoad">
          <span>上拉加载更多</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// 导入batter-scroll
import BScroll from 'better-scroll'

export default {
  name: "UseScroll",
  //封装思想 让别人来定义是否要实时监听 因为一直回调会影响性能
  props: {
    //0.1默认不监听 2不监听惯性部分 3全监听
    probeType: {
      type: Number,
      default: 0
    },
    pullUpLoad: {
      type: Boolean,
      default: false
    },

  },
  data() {
    return {
      bs: null,
      isPullUpLoad: false,
    }
  },
  mounted() {
    //ref $refs.$el 相当于document获取DOM节点内的所有属性和方法 不过ref能精准拿到想要的
    this.bs = new BScroll(this.$refs.scroll, {
      probeType: this.probeType,
      pullUpLoad: this.pullUpLoad,
      //observe 重新计算大小和属性 等价于 bs.refresh() 实时监听 类似事件总线
      //触发内部的refresh方法
      observeImage: {
        //类似防抖函数 等需要发送网络请求的统一加载完成后再统一发送请求
        debounceTime: 200 // ms
      },
      observeDOM: true,
      mouseWheel: true,
      click: true,
    })
    //监听滚动位置
    if (this.probeType === 2 || this.probeType === 3) {
      this.bs.on('scroll', ({y}) => {
        // console.log(y)
        this.$emit('scrollMoveAdv', y)
      })
    }
    //监听上拉加载事件
    if (this.pullUpLoad) {
      this.bs.on('pullingUp', () => {
        this.pullingUpTips
        this.$emit('pullingUpAdv')
      })
    } else {
      this.isPullUpLoad = true
    }
  },
  async pullingUpTips() {
    this.isPullUpLoad = true
  },


}
</script>

<style scoped>

.pull-up-tips {
  padding: 20px;
  text-align: center;
  color: #999;
}
</style>