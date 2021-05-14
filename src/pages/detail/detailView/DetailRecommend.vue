<!--推荐-->
<template>
  <div>
    <div class="hot">
      <span class="el-icon-s-shop"></span>
      热门推荐
    </div>
    <view-list>
      <view-list-item v-for="(item,index) in recommends"
                      :key="index" class="ViewListItem">
        <img v-lazy="item.image" :key="item.image" alt="" slot="img" @click="enterClick">
        <p slot="p">{{ item.title }}</p>
        <span slot="span1" class="price">¥{{ item.price }}</span>
        <span slot="span2" class="el-icon-star-on">{{ item.cfav }}</span>
      </view-list-item>
    </view-list>
  </div>
</template>

<script>
import {ViewList, ViewListItem} from '@/pages/detail/detailView/viewList'

export default {
  name: "DetailRecommend",
  data() {
    return {
      name: '错误404'
    }
  },
  props: {
    recommends: {
      type: Array,
      default() {
        return []
      }
    }
  },
  components: {
    ViewList, ViewListItem
  },
  methods: {
    enterClick() {
      let name = this.name
      this.$router.push({path: '/supermarket', query: {name}})
    }
  }
}
</script>

<style scoped>
.hot {
  margin: 20px 0;
  text-align: center;
  font-size: 20px;
  color: #DC143C;
  font-weight: bold;
}

.ViewListItem {
  padding-bottom: 40px;
  position: relative;
  width: 48%;
}

.el-icon-star-on {
  font-size: 13px;
}
</style>