//回到顶部
import BackTop from "@/components/content/backTop/BackTop";

export const backTopMixin = {
  data() {
    return {
      isShowBackTop: false,
    }
  },
  components: {
    BackTop
  },
  methods: {
    backTopClick() {
      //通过ref获取DOM节点从而获取其属性方法
      //这里的scrollTo()是在UseScroll设置好的API 封装思想
      this.$refs.useScroll.bs.scrollTo(0, 0, 200)
    },
  }
}
export const tagControlMixin = {
  data() {
    return {
      defaultType: 'pop'
    }
  },
  methods: {
    TagControlClick(index) {
      switch (index) {
        case 0:
          this.defaultType = 'pop'
          break;
        case 1:
          this.defaultType = 'sell'
          break
        case 2:
          this.defaultType = 'new'
          break
      }
      console.log(this.defaultType)
      this.$refs.tagControl1.tagConIndex = index
      // this.$refs.tagControl2.tagConIndex = index
    },
  }
}
