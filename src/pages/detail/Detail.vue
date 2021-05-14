<!--
watch监听数据的变化 传递数据
-->

<template>
  <div class="detail">
    <detail-nav-bar @navBarIndex="navBarIndex" ref="nav"/>

    <use-scroll class="use-scroll" ref="useScroll"
                :probe-type="3" @scrollMoveAdv="scrollMovement">
      <!--轮播图-->
      <detail-swiper :top-images="topImage"/>
      <!--主要信息-->
      <detail-base-Info :goods="goods"/>
      <!--评论-->
      <detail-evaluate :eva="eva"/>
      <!--商铺信息-->
      <detail-shop-info :shop="shop" ref="shop"/>
      <!--详细-->
      <detail-look-info :look-info="LookInfo" @LookInfoImg="LookInfoImg"/>
      <!--参数-->
      <detail-params-info :params-info="paramsInfo" ref="params"/>
      <!--推荐-->
      <detail-recommend :recommends="recommends" ref="recommend"/>

    </use-scroll>
    <back-top @click.native="backTopClick" v-show="isShowBackTop"/>
    <detail-bottom-bar @addCartsAdv="addToCarts" :shop="shop"/>
  </div>
</template>

<script>
//子组件
import DetailNavBar from "@/pages/detail/detailView/DetailNavBar";
import DetailSwiper from "@/pages/detail/detailView/DetailSwiper";
import DetailBaseInfo from "@/pages/detail/detailView/DetailBaseInfo";
import DetailEvaluate from "@/pages/detail/detailView/DetailEvaluate";
import DetailShopInfo from "@/pages/detail/detailView/DetailShopInfo";
import DetailLookInfo from "@/pages/detail/detailView/DetailLookInfo";
import DetailParamsInfo from "@/pages/detail/detailView/DetailParamsInfo";
import DetailRecommend from "@/pages/detail/detailView/DetailRecommend";
import DetailBottomBar from "@/pages/detail/detailView/DetailBottomBar";
//公共组件
import UseScroll from "@/components/commonV/scroll/UseScroll";
import BackTop from "@/components/content/backTop/BackTop";
//网络请求
import {getDetail, Goods, Shop, Evaluate, GoodsParam, getRecommend} from "@/network/detail";
//工具
import {debounce} from "@/commonJ/tools";

export default {
  name: "Detail",
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailEvaluate,
    DetailLookInfo,
    DetailParamsInfo,
    DetailRecommend,
    DetailBottomBar,

    UseScroll,
    BackTop
  },
  data() {
    return {
      iid: null,
      topImage: [],
      goods: {},
      eva: {},
      shop: {},
      LookInfo: {},
      paramsInfo: {},
      recommends: [],
      //offset
      moveWhereY: [],
      navIndex: 0,
      isShowBackTop: false,
    }
  },
  created() {
    //1.保存从viewdataListItem 传过来的iid
    this.iid = this.$route.params.iid

    /**
     *  2.网络请求
     */
    //根据iid请求得的到数据进行划分
    getDetail(this.iid).then(res => {
      const data = res.result;
      //获得顶部轮播图数据
      this.topImage = data.itemInfo.topImages
      //商品信息和保障信息
      this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services, data.skuInfo)
      //用户评价
      this.eva = new Evaluate(data.rate)
      //商家信息
      this.shop = new Shop(data.shopInfo)
      //商品详细信息
      this.LookInfo = data.detailInfo
      //商品及商家详细信息
      this.paramsInfo = new GoodsParam(data.itemParams.info, data.itemParams.rule)
    }).catch(err => {
      console.log(err)
    })
    //推荐数据
    getRecommend().then(res => {
      this.recommends = res.data.list
    }).catch(err => {
      console.log(err)
    })

  },
  methods: {
    /**
     * 监听处理
     */
    //详细商品监听
    LookInfoImg() {
      //refresh 刷新界面 即让数据重新渲染 防止图片加载导致 计算错误 导致scroll不能滚动
      //console.log('证明我在Detail界面的时候才会进行监听')

      //$nextTick是将回调延迟到下次 DOM 更新循环之后执行 在修改数据之后立即使用它 然后等待 DOM 更新
      //在数据加载完成回调这个函数 callback 按钮跳转
      //因为 数据加载完成 但是图片渲染速度慢
      this.$nextTick(() => {
        this.$refs.useScroll.bs.refresh()

        this.moveWhereY = []
        this.moveWhereY.push(0)
        this.moveWhereY.push(this.$refs.shop.$el.offsetTop - 44)
        this.moveWhereY.push(this.$refs.params.$el.offsetTop - 54)
        this.moveWhereY.push(this.$refs.recommend.$el.offsetTop - 70)
        this.moveWhereY.push(Number.MAX_VALUE)
        // console.log(this.moveWhereY)
      })
    },
    //navbar 处理
    navBarIndex(index) {
      this.$refs.useScroll.bs.scrollTo(0, -this.moveWhereY[index], 100)
    },
    //useScroll 传过来的事件监听
    scrollMovement(y) {
      //去scroll 滚动的 y
      const scrollY = -y
      // console.log(this.moveWhereY.length)
      for (let i = 0; i < this.moveWhereY.length; i++) {
        //   普通方法
        //   if (this.navIndex !== i && //第一次 0 !=1 第二次 1 != 2
        //     //因为数组从下标开始遍历 i=0计数 第1次遍历 i=0+1 =1 而数组下标是0
        //     (
        //       (
        //         scrollY >= this.moveWhereY[i] &&
        //         scrollY < this.moveWhereY[i + 1])
        //       ||
        //       (
        //         scrollY >= this.moveWhereY[i])
        //     )
        //   ) {
        //     this.navIndex = i
        //     this.$refs.nav.defaultIndex = this.navIndex
        //   }

        //  性能优化
        if (this.navIndex !== i &&
          (scrollY >= this.moveWhereY[i] &&
            scrollY < this.moveWhereY[i + 1])) {
          this.navIndex = i
          this.$refs.nav.defaultIndex = this.navIndex
        }
      }
      //决定盒子是否显示
      this.isShowBackTop = (-y) > this.moveWhereY[1]
    },
    //返回顶部
    backTopClick() {
      //通过ref获取DOM节点从而获取其属性方法
      //这里的scrollTo()是在UseScroll设置好的API 封装思想
      this.$refs.useScroll.bs.scrollTo(0, 0, 200)
    },

    //VueX
    //在购物车添加点击事件监听并把 事件发送给父组件
    addToCarts() {
      //获取需要展示到购物车的信息
      const product = {}
      product.image = this.topImage[0]
      product.infoTitle = this.goods.title
      product.price = this.goods.nowPrice
      product.iid = this.iid
      product.shopName = this.shop.name

      //将信息添加到购物车  根据vuex给的文档 把操作都应该放在actions
      //通过Promise 回调加入成功
      this.$store.dispatch('actCartsList',product).then(res => {
        this.$toast.showTime(res,1700)
      })
    },

  }
}
</script>

<style scoped>
.detail {
  height: 100vh;
  position: relative;
  z-index: 1;
  background-color: #fff;
}

.use-scroll {
  height: calc(100% - 93px);
  overflow: hidden;
}
</style>