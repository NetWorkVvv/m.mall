<template>
  <div class="recommend">
    <div v-for="item in recommends" class="recommend-item">
      <a :href="item.link" class="item">
        <img :src="item.image" alt="">
        <div>{{ item.title }}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeRecommend",
  props: {
    recommends: {
      type: Array,
      default(){
        return []
      }
    }
  }
}
</script>

<style scoped>
.recommend {
  display: flex;

  width: 100%;
  height: 159px;

  padding: 18px 0 18px 0;

  border-bottom: #eee 8px solid;
}

.recommend-item {
  flex: 1;
  text-align: center;
}

.recommend-item img {
  width: 77px;
  height: 80px;
}

.recommend-item div {
  margin-top: 10px;

  font-size: 13px;
  font-weight: bold;
}
</style>