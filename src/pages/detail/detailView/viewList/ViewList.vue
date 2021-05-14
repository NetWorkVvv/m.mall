<template>
  <div class="viewdata">
   <slot></slot>
  </div>
</template>

<script>
export default {
  name: "ViewList"
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