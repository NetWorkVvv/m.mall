<template>
  <div class="ViewListItem">

    <slot name="img"></slot>

    <div class="ViewListItem-info">
      <slot name="p"></slot>
      <slot name="span1"></slot>
      <slot name="span2"></slot>
    </div>

  </div>
</template>

<script>
export default {
  name: "ViewListItem",

}
</script>

<style scoped>
.ViewListItem {
  padding-bottom: 40px;
  position: relative;
  width: 32%;
}

.ViewListItem img {
  width: 100%;
  border-radius: 5px;
}

.ViewListItem-info {
  font-size: 13px;
  position: absolute;
  bottom: 5px;
  left: 0;
  right: 0;
  text-align: center;
}

.ViewListItem-info p {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 3px;
}

.ViewListItem-info .price {
  color: red;
  font-size: 15px;
  font-weight: bolder;
  margin-right: 20px;
}


</style>