<template>
  <div class="viewdataItem">
    <img v-lazy="showViewImg" alt=""
         @click="itemImageClick" :key="showViewImg">

    <div class="viewdataItem-info">
      <p>{{ viewdataItem.title }}</p>
      <span class="price">¥{{ viewdataItem.price }}</span>
      <span class="el-icon-star-on">{{ viewdataItem.cfav }}</span>
    </div>

  </div>
</template>

<script>
export default {
  name: "ViewdataListItem",
  data(){
    return {
      name:'错误404'
    }
  },
  props: {
    viewdataItem: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  computed:{
    showViewImg() {
      return  this.viewdataItem.show.img
    }
  },
  methods: {
    itemImageClick() {
      //query 传递参数 ？ 后 {path: '/detail', query: {iid}}
      //用params来传递参数的话要在路由path后添加:名字
       this.$router.push('/detail/' + this.viewdataItem.iid)
    }
  }
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