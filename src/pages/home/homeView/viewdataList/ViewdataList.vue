<template>
  <div class="viewdata">
    <viewdata-list-item v-for="(item, index) in viewdata"
                        :viewdata-item="item" :key="index"/>
  </div>
</template>

<script>
import ViewdataListItem from "@/pages/home/homeView/viewdataList/ViewdataListItem";
export default {
  name: "ViewdataList",
  components: {
    ViewdataListItem
  },
  props: {
    viewdata: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>

<style scoped>
.viewdata{
  display: flex;
  flex-wrap: wrap;
  padding: 3px;
  /*内容均等分*/
  justify-content: space-around;
  margin-top: 10px;
}
</style>