<template>
  <div class="tag-control">
    <div v-for="(item,index) in tagConTitle"
         class="tag-control-item"
         :class="{active:tagConIndex === index }"
         @click="tagConItemClick(index)">
      <span>{{ item }}</span>
    </div>
  </div>
</template>

<script>

export default {
  name: "TagControl",
  data() {
    return {
      tagConIndex: 0
    }
  },
  methods: {
    tagConItemClick(index) {
      this.tagConIndex = index
      this.$emit('TagControlClick', index)
    }
  },
  props: {
    tagConTitle: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>

<style scoped>

.tag-control {
  display: flex;

  line-height: 40px;
}

.tag-control-item {
  flex: 1;
  text-align: center;

  font-size: 15px;

  color: var(--color-text);
  box-shadow: 0 3px 4px rgba(100, 100, 100, .5);
  background-color: white;
}

.active {
  color: var(--color-high-text);
}

.active span {
  border-bottom: #DC143C solid 3px;

}
</style>