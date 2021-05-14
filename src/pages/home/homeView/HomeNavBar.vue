<template>
  <nav-bar class="home-nav">
    <div slot="left" class="home-nav-left">
      <img src="~assets/img/home/benchi.jpg" alt="">
    </div>
    <div slot="center" class="home-nav-center">Bc-柠檬</div>
    <div slot="right" class="home-nav-right">
      <span @click="denglu">登录</span>
    </div>
  </nav-bar>
</template>

<script>
import NavBar from "@/components/commonV/navbar/NavBar";

export default {
  name: "HomeNavBar",
  components: {
    NavBar
  },
  methods:{
    denglu(){
      this.$router.push('/login')
    }
  }
}
</script>

<style scoped>
.home-nav {
  background-color: var(--color-tint);
  color: white;
  font-weight: bold;

}

.home-nav-left img {
  margin-top: 5px;
  width: 34px;
  height: 34px;
}

.home-nav-center {
  font-size: 30px;
}

.home-nav-right span {
  width: 28px;
  height: 21px;
  font-size: 19px;
}

</style>