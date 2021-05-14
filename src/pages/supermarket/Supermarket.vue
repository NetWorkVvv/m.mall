<template class="supp">
  <div class="sup">
    <nav-bar class="nav">
      <div slot="left" class="nav-bar-left" @click="navClick">
        <img src="@/assets/img/commonV/back.svg" alt="">
      </div>
      <div slot="center">
        <h2>
          <span class="el-icon-s-shop"
                v-if="this.name != '错误404'"
                style="color: #DC143C"/>
          <span class="el-icon-loading"
                v-else/>
          {{ name }}
        </h2>
      </div>
      <div slot="right">
        <h3 class="el-icon-loading"
            v-if="this.name == '错误404'"/>
        <h3 class="el-icon-chat-dot-round"
            v-else/>
      </div>
    </nav-bar>
    <div class="divv">
      <h2>别看我了</h2>
      <h3>快快回去</h3>
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/commonV/navbar/NavBar";

export default {
  name: "Supermarket",
  data() {
    return {
      name: {}
    }
  },
  components: {
    NavBar
  },
  created() {
    this.name = this.$route.query.name

  },
  methods: {
    navClick() {
      history.back()
    }
  }
}
</script>

<style scoped>
.nav-bar-left {
  position: relative;
  top: 6px;
}

.divv {
  display: flex;
  background-color: #DC143C;
  position: relative;
  top: 200px;
  font-size: 50px;
}

.divv h2 {
  flex: 1;
}

h3 {
  width: 70px;
}

.sup {
  height: 100vh;
  position: relative;
  z-index: 1;
  background-color: #fff;
}
</style>