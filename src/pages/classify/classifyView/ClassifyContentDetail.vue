<template>
  <grid-view>
    <grid-view-item v-for="(item, index) in categoryDetail" :key="index" :item="item"/>
  </grid-view>
</template>

<script>
import GridView from "@/pages/classify/classifyView/gridView/GridView";
import GridViewItem from "@/pages/classify/classifyView/gridView/GridViewItem";
export default {
  name: "ClassifyContentDetail",
  components: {
    GridView,
    GridViewItem,

  },
  props: {
    categoryDetail: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>

<style scoped>

</style>
