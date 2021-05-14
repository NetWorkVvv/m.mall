<template>
  <div class="carts">
    <carts-nav-bar/>
    <div v-if="Object.keys(getCartsList).length !== 0">
      <carts-main/>
      <carts-bottom-bar/>
    </div>
    <div  v-else>
      <no-carts/>
    </div>

  </div>
</template>

<script>
//子组件
import CartsNavBar from "@/pages/carts/cartsView/CartsNavBar";
import CartsMain from "@/pages/carts/cartsView/CartsMain";
import CartsBottomBar from "@/pages/carts/cartsView/CartsBottomBar";
import NoCarts from "@/pages/carts/cartsView/NoCarts";
//公共
import {mapGetters} from 'vuex'

export default {
  name: "Cats",
  components: {
    CartsNavBar,
    CartsMain,
    CartsBottomBar,
    NoCarts
  },
  data() {
    return {}
  },
  computed: {
    ...mapGetters(['getCartsList'])
  }
}
</script>

<style scoped>
.carts {
  height: 100vh;
  background-color: #ffffff;
}


</style>