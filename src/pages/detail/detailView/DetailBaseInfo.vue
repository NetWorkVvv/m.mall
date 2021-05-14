<!--主要信息-->
<template>
  <!--Object.keys()Es6语法 内部自动将keys转化成Array {keys：values}-->
  <!--判断传入的goods是否有值-->
  <div v-if="Object.keys(goods).length !== 0" class="base-info">
    <!--商品基本信息-->
    <div class="info-title">{{ goods.title }}</div>
    <div class="info-price">
      <span class="n-price">{{ goods.nowPrice }}</span>
      <span class="o-price">{{ goods.oldPrice }}</span>
      <span class="discount" v-if="Object.keys(goods.discount).length != 0">{{ goods.discount }}</span>
      <span class="discount" v-else>劲爆价</span>
    </div>
    <div class="info-columns">
      <span class="el-icon-shopping-bag-1">{{ goods.columns[0] }}</span>
      <span class="el-icon-star-off">{{ goods.columns[1] }}</span>
      <span class="el-icon-truck">{{ goods.columns[2] }}</span>
    </div>

    <!--选择框-->
    <div class="info-select">
      <el-collapse>
        <!--款式信息-->
        <el-collapse-item>
          <div slot="title" class="info-select-title">
            <span class="el-icon-shopping-bag-2"/>
            选择
          </div>
          <!--衣服款式-->
          <div class="info-select-style-color">
            <div>
            <p>颜色</p>
            <el-radio-group size="small" class="info-select-style-button"
                            v-for="(color,colorIndex) in this.goods.style[0].list"
                            :key="colorIndex" :value="radio1">
              <el-radio-button name="1">
                <span>{{ color.name }}</span>
              </el-radio-button>
            </el-radio-group>
            </div>
            <!--衣服尺寸-->
            <div>
              <p>尺码</p>
              <el-radio-group size="small" class="info-select-style-button "
                              v-for="(size,sizeIndex) in this.goods.style[1].list"
                              :key="sizeIndex" :value="radio2">
                <el-radio-button name="2">
                  <span>{{ size.name }}</span>
                </el-radio-button>
              </el-radio-group>
            </div>
          </div>


        </el-collapse-item>
        <!--保障信息-->
        <el-collapse-item>
          <div slot="title" class="info-select-title">
            <span class="el-icon-circle-check"/>
            保障
          </div>
          <div v-for="(item,index) in goods.services"
               class="info-select-service-message" :key="index">
            <img :src="item.icon" alt="">
            <span> {{ item.name }}</span>
          </div>
        </el-collapse-item>
      </el-collapse>
    </div>

  </div>
</template>

<script>
export default {
  name: "DetailBaseInfo",
  data() {
    return {
      // color: this.goods.style[0].list.name
      radio1: '',
      radio2: '',
    }
  },
  props: {
    goods: {
      type: Object,
      default() {
        return {}
      }
    }
  },

}
</script>

<style scoped>

.base-info {
  margin-top: 10px;
  padding: 0 2px;
  color: #999;
  border-bottom: 6px solid rgba(100, 100, 100, .1);
}

.info-title {
  color: black;
  font-size: 18px;

}

.info-price {
  margin-top: 10px;
}

.n-price {
  font-size: 24px;
  color: var(--color-high-text);
}

.o-price {
  text-decoration: line-through;
  font-size: 15px;
  margin: 0 8px 0;
}

.discount {
  color: white;
  border: #DC143C solid 1px;
  border-radius: 8px;
  background-color: #DC143C;
  padding: 3px 4px;
  /*让元素上浮一些: 使用相对定位即可*/
  position: relative;
  top: -7px;
  left: 3px;
}

.info-columns {
  display: flex;
  margin-top: 15px;
  padding: 0 2px 3px;
  border-bottom: 3px solid rgba(100, 100, 100, .1);
}

.el-icon-shopping-bag-1 {
  font-size: 14px;
}

.el-icon-star-off {
  flex: 1;
  text-align: center;
  font-size: 14px;
}

.el-icon-truck {
  font-size: 14px;
}

.info-select {
  margin: 13px 0;
  box-shadow: 2px 2px 4px rgba(100, 100, 100, .5);
}

.info-select-title {
  font-size: 16px;
  margin: 0 10px 0;
  font-weight: bold;
  color: black;
}

.info-select-title span {
  font-size: 19px;
  margin: 0 7px 0 0;
}

.info-select-style-color {
  margin: 5px 0 10px;
}

.info-select-style-button {
  margin: 3px 5px;
}

.info-select-service-message {
  font-size: 15px;
}

.info-select-service-message img {
  margin: 0 15px 0;
  width: 14px;
}

</style>