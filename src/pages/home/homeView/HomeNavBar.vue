<template>
  <div class="home-nav-bar" @click="search">
    <nav-bar>
      <div class="el-icon-s-fold" slot="left"/>
      <div class="center " slot="center">
        <span class="el-icon-search">search</span>
      </div>
    </nav-bar>
  </div>
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
    },
     search() {
       this.$router.replace("/inputSearch")
    }
  }
}
</script>

<style scoped>
.home-nav-bar {
  background-color: #DC143C;;
}
.el-icon-s-fold {
  font-size: 24px;
}
.center {
  margin: 4px 15px;
  width: 70vw;
  height: 35px;
  font-size: 18px;
  background-color: #ffffff;
  border-radius: 30px;
}
.el-icon-headset {
  font-size: 24px;
}

</style>