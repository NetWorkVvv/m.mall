<!--商品详细-->
<template>
  <div v-if="Object.keys(LookInfo).length !== 0" class="looks-info">

    <div class="info-desc clear-fix">
      <div class="start">
      </div>
      <div class="desc">{{ LookInfo.desc }}</div>
      <div class="end"></div>
    </div>

    <div v-for="item in LookInfo.detailImage">
      <div class="info-key">{{ item.key }}</div>
      <div class="info-list">
        <img v-for="(item1, index1) in item.list"
             v-lazy="item1" :key="index1" alt="" @load="imgLoad">
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: "DetailLookInfo",
  data() {
    return {
      imgNum: 0,
      imgLength: 0,
    }
  },
  props: {
    LookInfo: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  //因为图片加载会影响页面offset的判断 所以在 HomeSwiper 设置了图片加载完成后的事件监听
  //等请求的图片全部加载完,在一次性渲染出来
  methods: {
    imgLoad() {
      // this.imgNum += 1
      if (++this.imgNum === this.imgLength) {
        this.$emit('LookInfoImg')
      }
    }
  },
  watch: {
    LookInfo() {
      this.imgLength = this.LookInfo.detailImage[0].list.length
    }
  },

}
</script>

<style scoped>
.looks-info {
  padding: 20px 0;
  border-bottom: var(--border);
}

.info-desc {
  padding: 0 15px;
}

.info-desc .start, .info-desc .end {
  width: 90px;
  height: 1px;
  background-color: #a3a3a5;
  position: relative;
}

.info-desc .start {
  float: left;
}

.info-desc .end {
  float: right;
}

.info-desc .start::before, .info-desc .end::after {
  content: '';
  position: absolute;
  width: 5px;
  height: 5px;
  background-color: #333;
  bottom: 0;
}

.info-desc .end::after {
  right: 0;
}

.info-desc .desc {
  padding: 15px 0;
  font-size: 14px;
}

.info-key {
  margin: 10px 0 10px 15px;
  color: #333;
  font-size: 15px;
}

.info-list img {
  width: 100%;
}
</style>