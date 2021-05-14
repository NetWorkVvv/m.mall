<template>
  <div class="navbar">
    <!--    <div slot="left" @click="cartsNavbar">-->
    <!--      <span class="el-icon-arrow-left"></span>-->
    <!--    </div>-->
   <nav-bar>
     <div slot="center" class="navbar-center">
       <span class="title">购物车</span>
       <span class="num" v-show="getCartsLength !==0">({{ getCartsLength }})</span>
     </div>
     <div slot="right">
       <span class="el-icon-more-outline" @click="messageClick"/>
     </div>
   </nav-bar>
  </div>
</template>

<script>
import NavBar from "@/components/commonV/navbar/NavBar";
// mapGetters 辅助函数仅仅是将 store 中的 getter 映射 到局部计算属性
// Action 也可以
import {mapGetters} from 'vuex'

export default {
  name: "CartsNavBar",
  components: {
    NavBar
  },
  computed: {
    ...mapGetters(['getCartsLength'])
    //或  ...mapGetters({ length:'cartsLength' }) 自己重新命名
  },
  methods: {
    messageClick() {
      this.$toast.showTime('请先登录哦')
    }
  }
}
</script>

<style scoped>
.navbar {
  background-color: var(--color-tint);
  color: white;

  font-size: 23px;
  height: 44px;
  line-height: 44px;
}

.el-icon-arrow-left {
  margin: 10px -45px 10px 20px;
  font-size: 26px;
}

.navbar-center {
  text-align: center;
}
.el-icon-more-outline {
  color: #ffffff;
  font-size: 23px;
}
</style>