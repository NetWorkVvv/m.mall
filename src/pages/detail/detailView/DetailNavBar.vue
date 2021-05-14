<template>

  <nav-bar class="nav-bar" >
    <div slot="left" class="nav-bar-left" @click="leftBackClick">
      <img src="@/assets/img/commonV/back.svg" alt="">
    </div>
    <div slot="center" class="nav-bar-center">
      <span v-for="(item,index) in titles"
            :class="{active:index === defaultIndex}"
            @click="centerListClick(index)">
        {{ item }}
      </span>
    </div>

  </nav-bar>

</template>

<script>
import NavBar from "@/components/commonV/navbar/NavBar";

export default {
  name: "DetailNavBar",
  components: {
    NavBar,
  },
  data() {
    return {
      titles: ['商品','详细', '参数', '推荐'],
      defaultIndex: 0
    }
  },
  methods: {
    leftBackClick() {
      history.back()
    },
    centerListClick(index) {
      this.defaultIndex = index
      this.$emit('navBarIndex',index)
    }
  }
}
</script>

<style scoped>
.nav-bar-left {
  padding: 5px 0 0 0;
}

.nav-bar-center {
  display: flex;
  margin-left: 15px;
}

.nav-bar-center span {
  flex: 1;
  font-size: 14px;
}

.active {
  color: #DC143C;
}
</style>