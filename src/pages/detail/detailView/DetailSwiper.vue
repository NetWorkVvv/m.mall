<!--detail轮播图-->
<template>

  <swiper class="swiper-list" :interval="2000">
    <swiper-item v-for="(item,index) in topImages" :key="index">
      <img v-bind:src="item" alt="">
    </swiper-item>
  </swiper>

</template>

<script>
import {Swiper, SwiperItem} from "@/components/commonV/swiper";

export default {
  name: "DetailSwiper",
  components: {
    Swiper, SwiperItem,
  },
  props: {
    topImages: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>

<style scoped>
.swiper-list {
  height: 375px;
  overflow: hidden;
}
</style>