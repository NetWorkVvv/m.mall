<template>

    <swiper>
      <swiper-item v-for="(item,index) in banners" :key="index">
        <a :href="item.link" >
          <img :src="item.image" @load="imageLoad" alt="" >
        </a>
      </swiper-item>
    </swiper>

</template>

<script>
import {Swiper, SwiperItem} from "@/components/commonV/swiper";

export default {
  name: "HomeSwiper",
  data() {
    return {
      isLoad: true
    }
  },
  components: {
    Swiper,
    SwiperItem
  },
  props: {
    banners: {
      type: Array,
      default() {
        return []
      }
    }
  },
  methods: {
    //因为图片加载会影响页面offset的判断 所以在 HomeSwiper 设置了图片加载完成后的事件监听
    //为了不让他发出多次加载完成监听事件 所以设置了条件 让发出事件只进行一次 发出
    imageLoad() {
      if (this.isLoad) {
        this.$emit('SwiperImageLoad')
        this.isLoad = false
      }
    }
  }
}
</script>

<style scoped>

</style>