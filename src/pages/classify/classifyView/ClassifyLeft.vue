<template>

  <div class="classify-left">
    <use-scroll class="scroll">
      <div class="classify-left-item"
           :class="{active : index === defaultIndex}"
           v-for="(item,index) in categories" :key="index"
           @click="itemClick(index)">
        {{ item.title }}
      </div>
    </use-scroll>
  </div>

</template>

<script>
import UseScroll from "@/components/commonV/scroll/UseScroll";

export default {
  name: "ClassifyLeft",
  components: {
    UseScroll
  },
  props: {
    categories: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      defaultIndex: 0
    }
  },
  methods: {
    itemClick(index) {
      this.defaultIndex = index
      this.$emit('leftItemAdv',index)
    }
  }
}
</script>

<style scoped>
.scroll {
  height: calc(100% - 94px);
}

.classify-left {
  background-color: #f6f6f6;
  height: 100%;
  width: 100px;
  box-sizing: border-box;
}

.classify-left-item {

  height: 45px;
  line-height: 45px;
  text-align: center;
  font-size: 14px;
}

.active {
  font-weight: 700;
  color: var(--color-high-text);
  background-color: #fff;
  border-left: 3px solid var(--color-high-text);
}
</style>