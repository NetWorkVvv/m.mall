<template>
  <div>
    <div class="icon-selector" :class="{'checked': isChecked}">
      <img src="@/assets/img/carts/tick.svg" alt="">
       <slot name="text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "CheckButton",
  props: {
    isChecked: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      // isChecked:true
    }
  },
  methods:{

  }
}
</script>

<style scoped>
.icon-selector {
  position: relative;
  margin: 7px;
  width: 22px;
  height: 22px;
  border-radius: 50%;
  border: 2px solid #ccc;
  cursor: pointer;
}
.icon-selector img {
  width: 17px;
  height: 17px;
  margin: 1px 1px;
}
.checked {
  background-color: var(--color-high-text);
  border-color: var(--color-high-text);
}
</style>
