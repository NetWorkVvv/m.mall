<template>
  <div class="iphone">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "Slide"
}
</script>

<style scoped>
.iphone {
  width: 100%;
  flex-shrink: 0;
}

.iphone img {
  width: 100%;
}
</style>
