<template>
  <div class="viewdataItem" @click="goToDetail">
    <img v-lazy="showViewImg" alt="" :key="showViewImg">

    <div class="viewdataItem-info">
      <p>{{ item.title }}</p>
      <span class="price">¥{{ item.price }}</span>
      <span class="el-icon-star-on">{{ item.cfav }}</span>
    </div>

  </div>
</template>

<script>
export default {
  name: "GridViewItem",
  data(){
    return {

    }
  },
  props: {
    item: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  computed:{
    showViewImg() {
      return  this.item.img
    }
  },
  methods: {
    goToDetail() {

      // 2.跳转到详情页面
      this.$router.push('/detail/'+ this.item.iid)
    }
  },

}
</script>

<style scoped>
.viewdataItem {
  padding-bottom: 40px;
  position: relative;
  width: 48%;
}

.viewdataItem img {
  width: 100%;
  border-radius: 5px;
}

.viewdataItem-info {
  font-size: 13px;
  position: absolute;
  bottom: 5px;
  left: 0;
  right: 0;
  text-align: center;
}

.viewdataItem-info p {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 3px;
}

.viewdataItem-info .price {
  color: red;
  font-size: 15px;
  font-weight: bolder;
  margin-right: 20px;
}

.el-icon-star-on {
  font-size: 13px;
}
</style>