<template>

  <div>
    <nav-bar class="nav-bar">
      <div slot="center" class="nav-bar-center">
        商品分类
      </div>

    </nav-bar>
  </div>
</template>

<script>
import NavBar from "@/components/commonV/navbar/NavBar";

export default {
  name: "ClassifyNavBar",
  components: {
    NavBar
  },

}
</script>

<style scoped>
.nav-bar {
  position: relative;
  z-index: 9;
  background-color: var(--color-high-text);
}

.nav-bar-center {
  font-size: 23px;
  font-weight: bold;
  color: #ffffff;

}


</style>