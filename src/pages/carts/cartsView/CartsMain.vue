<template>
  <div class="CartsMainContent">
    <use-scroll class="use-scroll" ref="useScroll">
      <carts-main-list
        v-for="(item,index) in getCartsList"
        :carts-main-list="item"
        :key="index" />
      <div>

      </div>
    </use-scroll>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import UseScroll from "@/components/commonV/scroll/UseScroll";
import CartsMainList from "@/pages/carts/cartsView/CartsMainList";

export default {
  name: "CartsMain",
  components: {
    UseScroll,
    CartsMainList,

  },
  computed: {
    ...mapGetters(['getCartsList'])
  },
  activated() {
    //刷新一次界面
    this.$refs.useScroll.bs.refresh()
  },

}
</script>

<style scoped>
.use-scroll {
  height: calc(100vh - 93px - 44px);
  overflow: hidden;
}
</style>