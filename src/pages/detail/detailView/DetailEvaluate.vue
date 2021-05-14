<!--评论-->
<template>
  <div class="eva">
    <div class="eva-title">
      <h4>评价</h4>
      <p>{{ eva.cRate }}</p>
    </div>
    <div class="eva-middle" v-for="user in eva.list">
      <el-tag class="eva-middle-tag">软柔舒适</el-tag>
      <el-tag type="success" class="eva-middle-tag">毫不起球</el-tag>
      <el-tag type="warning" class="eva-middle-tag">质量很好</el-tag>
      <el-tag type="danger" class="eva-middle-tag">穿戴舒服</el-tag>
    </div>
    <div class="eva-bottom" v-for="user in eva.list">
      <img :src="user.user.avatar" alt="">
      <p>{{ user.user.uname }}</p>
    </div>
    <div class="eva-content" v-for="(img,imgIndex) in eva.list" :key="imgIndex">
      <div class="eva-content-img">
        <img v-for="img1 in img.images" :src="img1" alt="">
      </div>
      <div v-for="item in eva.list" class="eva-content-con">
        <p class="eva-content-con1">{{ item.content }}</p>
        <p class="eva-content-con2">
          <span>{{ item.created | showDate}}</span>
          <span>{{ item.style }}</span>
        </p>
      </div>
      <div class="eva-last">
        <div class="enter-shop" @click="evaClick">查看全部评论</div>
      </div>
    </div>


  </div>

</template>

<script>
import {formatDate} from "@/commonJ/tools";

export default {
  name: "DetailEvaluate",
  props: {
    eva: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  data() {
    return {
      name: ''
    }
  },
  filters: {
    //value 是上面 item.created给的  左边数据 | 右边格式 时间戳的格式化转化
    showDate(value) {
      const date = new Date(value*1000)
      return formatDate(date,'yyyy-MM-dd')
    }
  },
  methods: {
    evaClick() {
      let name = this.eva.list[0].rateId
      this.$router.push({path: '/supermarket', query: {name}})
    }
  }
}
</script>

<style scoped>


.eva-title {
  margin: 13px 17px;
  display: flex;
  color: black;
  border-left: 3px solid red;
}

.eva-title h4 {
  margin: 0 11px 0;
}

.eva-title p {
  font-size: 10px;
  margin: 5px -2px 0;
  font-weight: bolder;
}

.eva-middle {
  margin: 16px 27px;
}

.eva-middle-tag {
  margin: 0 4px;
}

.eva-bottom {
  display: flex;
  padding: 10px 0 5px;
}

.eva-bottom img {
  width: 42px;
  height: 42px;
  border-radius: 50%;
}

.eva-bottom p {
  font-weight: bold;
  font-size: 15px;
  margin: 15px 15px 0;
}

.eva-content {
  margin: 10px 20px 10px 20px;
}

.eva-content-img img {
  margin: 0 0 10px 12px;
  width: 25%;
  height: 25%;
}

.eva-content-con {
  margin: 10px 0 0 10px;
}

.eva-content-con2 {
  margin: 20px 0 15px 0;
  font-size: 10px;
  color: #ccc;
}

.eva-content-con2 span {
  margin: 0 10px 0 0;
}

.eva-last {
  text-align: center;
  margin: 20px 0 15px;
}

.enter-shop {
  display: inline-block;
  font-size: 14px;
  background-color: #f2f5f8;
  width: 150px;
  height: 30px;
  text-align: center;
  line-height: 30px;
  border-radius: 10px;
}
</style>