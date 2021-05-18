<template>
  <div class="search">
    <input
      type="text"
      placeholder="请输入搜索内容"
      v-model="searchInput"
    >
    <view-list v-show="sss">
      <view-list-item
        v-for="(item,index) in searchInp"
        :key="index"
        class="ViewListItem"
      >
        <img
          v-lazy="item.image"
          :key="item.image"
          alt=""
          slot="img"
          @click="enterClick"
        >
        <p slot="p">{{ item.title }}</p>
        <span
          slot="span1"
          class="price"
        >¥{{ item.price }}</span>
        <span
          slot="span2"
          class="el-icon-star-on"
        >{{ item.cfav }}</span>
      </view-list-item>
    </view-list>
  </div>
</template>

<script>
import { getRecommend } from '@/network/detail'
import ViewList from '../../../pages/detail/detailView/viewList/ViewList.vue'
import ViewListItem from '../../../pages/detail/detailView/viewList/ViewListItem.vue'
import tools from "@/commonJ/tools"
export default {
  components: { ViewList, ViewListItem },
  name: "inputSearch",
  data() {
    return {
      name: '错误404',
      searchInput: '',
      recommends: [],
      sss: false
    }
  },
  created() {
    this.Recommend()
    console.log(this.recommends.filter(items => items.title.indexOf('秋季')));
  },
  methods: {
    Recommend() {
      //推荐数据
      getRecommend().then(res => {
        this.recommends = res.data.list
      }).catch(err => {
        console.log(err)
      })
    },
    enterClick() {
      let name = this.name
      this.$router.push({ path: '/supermarket', query: { name } })
    }

  },
  computed: {
    searchInp() {
      if (this.searchInput != '') {
        this.sss = true
        return this.recommends.filter(items => items.title.indexOf(this.searchInput) != -1)
      }
    }
  }
}
</script> 

<style scoped>
input {
  margin: 15px;
  line-height: 40px;
  width: 70vw;
}
.hot {
  margin: 20px 0;
  text-align: center;
  font-size: 20px;
  color: #dc143c;
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