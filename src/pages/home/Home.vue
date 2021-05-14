<template>
  <div id="home">

    <home-nav-bar/>
    <!--吸顶 通过offset来完成-->
    <tag-control :tagConTitle="tagConTitle" ref="tagControl1"
                 @TagControlClick="TagControlClick"
                 class="TopTagControl" v-show="tagControlFixed"
                 @click.native="BackTopTagControl"/>
    <use-scroll ref="useScroll" :probe-type="3"
                @scrollMoveAdv="scrollMovement" class="use-scroll"
                :pull-up-load="true" @pullingUpAdv="pullingUpLoadMore">
      <home-swiper :banners="banners" @SwiperImageLoad="swiperImageLoad"/>
      <home-recommend :recommends="recommends"/>
      <home-shop-mall/>
      <tag-control :tagConTitle="tagConTitle" ref="tagControl2"
                   @TagControlClick="TagControlClick"/>
      <viewdata-list :viewdata="showView" class="viewdataItem"/>

    </use-scroll>
    <!-- .native监听组件事件 -->
    <back-top @click.native="backTopClick" v-show="isShowBackTop"/>

  </div>
</template>

<script>
//子组件
import HomeNavBar from "./homeView/HomeNavBar"
import HomeSwiper from "./homeView/HomeSwiper";
import HomeRecommend from "@/pages/home/homeView/HomeRecommend";
import HomeShopMall from "@/pages/home/homeView/HomeShopMall";
import ViewdataList from "@/pages/home/homeView/viewdataList/ViewdataList";
//公共组件
import TagControl from "@/components/content/tagControl/TagControl";
import UseScroll from "@/components/commonV/scroll/UseScroll";
import BackTop from "@/components/content/backTop/BackTop";

//网络请求
import {getHomeMultidata, getHomeViewdata} from "@/network/home";

//工具函数

export default {
  name: "Home",
  components: {
    HomeNavBar,
    HomeSwiper,
    HomeRecommend,
    HomeShopMall,
    ViewdataList,

    TagControl,
    UseScroll, //选用
    BackTop
  },
  data() {
    return {
      banners: [],
      recommends: [],
      tagConTitle: ['流行', '热销', '上新'],
      views: {//类型:数据存储  views=type:数据存储（page,细分存储）
        'pop': {page: 0, list: []},
        'sell': {page: 0, list: []},
        'new': {page: 0, list: []},
      },
      defaultType: 'pop',
      isShowBackTop: false,
      tagControlOffsetTop: 0,
      tagControlFixed: false,
      saveY: 0
    }
  },
  created() {
    /**
     * 在页面创建完成后调用数据  生命周期分为三大块 页面创建、el挂载完成渲染、销毁
     * 数据请求
     */
    this.Multidata()
    this.Viewdata('pop')
    this.Viewdata('sell')
    this.Viewdata('new')

  },
  methods: {
    /**
     *事件监听相关
     */
    //决定显示那一组的数据
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
      this.$refs.tagControl1.tagConIndex = index
      this.$refs.tagControl2.tagConIndex = index
    },
    //返回顶部
    backTopClick() {
      //通过ref获取DOM节点从而获取其属性方法
      //这里的scrollTo()是在UseScroll设置好的API 封装思想
      this.$refs.useScroll.bs.scrollTo(0, 0, 200)
    },
    //返回tagControl2顶部
    BackTopTagControl() {
      this.$refs.useScroll.bs.scrollTo(0, -608, 200)
    },
    //滚动内的样式操作
    scrollMovement(y) {
      //小于1150 为 false 大于1150 为true 因为isShowBackTop默认值为false
      //决定是否显示返回顶部盒子
      this.isShowBackTop = (-y) > 925

      //决定tagControl是否吸顶 (-y)>this.tagControlOffsetTop 为true
      this.tagControlFixed = (-y) > this.tagControlOffsetTop
    },
    //数据加载完请求下一页数据 baster-scroll 完成的
    pullingUpLoadMore() {
      //加载更多在请求一次数据 因为数据都是一页一页传的
      this.Viewdata(this.defaultType)
    },
    //因为图片加载会影响页面offset的判断 所以在 HomeSwiper 设置了图片加载完成后的事件监听
    //等请求的图片全部加载完,在一次性渲染出来 然后再发送事件监听保证其 offset没收到图片影响
    //因为js执行机制的问题,主线程是单线程 其他的子线程是多线程 数据请求在渲染在子线程内执行 所以拿到的offset 不是数据渲染完成后拿到的
    //所以 拿到的offset才有偏差 所以要等 子线程渲染完成后再拿offset
    //且为了使用vm.$nextTick也行
    swiperImageLoad() {
      this.tagControlOffsetTop = this.$refs.tagControl2.$el.offsetTop
      // console.log('证明我在home界面的时候才会进行监听')
      // console.log(this.tagControlOffsetTop)
    },

    /**
     *网络请求相关
     */
    Multidata() {
      getHomeMultidata().then(res => {
        //  作用域链 他会现在自身寻找 然后往上层寻找
        this.banners = res.data.banner.list  //把数据保存在banners 因为回收机制
        this.recommends = res.data.recommend.list
      }).catch(err => {
        console.log(err)
      })
    },
    Viewdata(type) {
      const pageNum = this.views[type].page + 1
      getHomeViewdata(type, pageNum).then(res => {
        //type是变量 所以views[type] 拿到的是 { page,list }的数据
        this.views[type].list.push(...res.data.list)
        this.views[type].page += 1
        // 监测到上拉刷新的动作之后 pullingUp 事件的消费机会只有一次 因此你需要调用 finishPullUp()来告诉 BetterScroll 来提供下一次 pullingUp 事件的消费机会
        //这里的finishPullUp()是在UseScroll设置好的API 封装思想
        this.$refs.useScroll.bs.finishPullUp()
      })
    },

  },
  computed: {
    showView() {
      return this.views[this.defaultType].list
    },
  },
  //记录离开时的位置
  activated() {
    this.$refs.useScroll.bs.refresh()
    this.$refs.useScroll.bs.scrollTo(0, this.saveY, 50)
  },
  deactivated() {
    this.saveY = this.$refs.useScroll.bs.y
  },
}
</script>

<style scoped>
#home {
  height: 100vh;
}

.TopTagControl {
  position: relative;
  z-index: 9;
}

.use-scroll {
  /* calc 计算属性 会影响到tagControl 所以用绝对定位*/
  position: absolute;
  top: 44px;
  bottom: 49px;
  overflow: hidden;
}

</style>
