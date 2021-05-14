<!--店铺信息-->
<template>
  <div class="shop-info">
    <!--招牌-->
    <div class="shop-top">
      <img v-lazy="shop.shopLogo" :key="shop.shopLogo" alt="">
      <span class="title">{{ shop.name }}</span>
    </div>

    <!--品种、销量-->
    <div class="shop-middle">
      <div class="shop-middle-item shop-middle-left">
        <div class="info-sells">
          <div class="sells-count">
            <!-- filters:过滤器：插值表达式左边是我们要展示的数据  | 右边是局部过滤器的名字 -->
            {{ shop.cSells | sellCountFilter }}
          </div>
          <div class="sells-text">总销量</div>
        </div>
        <div class="info-goods">
          <div class="goods-count">
            {{ shop.cGoods }}
          </div>
          <div class="goods-text">全部宝贝</div>
        </div>
      </div>
      <div class="shop-middle-item shop-middle-right">
        <table>
          <tr v-for="(item, index) in shop.score" :key="index">
            <td>{{ item.name }}</td>
            <td class="price" :class="{'better-price': item.isBetter}">{{ item.score }}</td>
            <td class="quality" :class="{'better-quality': item.isBetter}"><span>{{ item.isBetter ? '高' : '低' }}</span>
            </td>
          </tr>
        </table>
      </div>
    </div>
    <div class="shop-bottom" @click="enterShopClick">
      <div class="enter-shop" >进店逛逛</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailShopInfo",
  props: {
    shop: {
      type: Object
    }
  },
  data(){
    return{
    name:''
    }
  },
  filters: {
    sellCountFilter: function (value) {
      if (value < 10000) return value;
      return (value / 10000).toFixed(1) + '万'
    }
  },
  methods: {
    enterShopClick(){
      //params 实现路由跳转要在路由Path后添加:name
      // this.$router.push('/supermarket/' + this.shop.name)
      //query 传递参数 ？ 后 {path: '/detail', query: {iid}}
      let name = this.shop.name
      this.$router.push({path: '/supermarket', query: {name}})
    }
  }
}
</script>

<style scoped>
.shop-info {
  padding: 25px 8px;
  border-bottom: var(--border);
  border-top: var(--border);
}

.shop-top {
  line-height: 45px;
  /* 让元素垂直中心对齐 */
  display: flex;
  align-items: center;
}

.shop-top img {
  width: 15%;
  height: 15%;
  border-radius: 50%;
  border: 1px solid rgba(0, 0, 0, .1);
}

.shop-top .title {
  margin-left: 10px;
  font-size: 17px;
  font-weight: bold;
  vertical-align: center;
}

.shop-middle {
  margin-top: 15px;
  display: flex;
  align-items: center;
}

.shop-middle-item {
  flex: 1;
}

.shop-middle-left {
  display: flex;
  justify-content: space-evenly;
  color: #333;
  text-align: center;
  border-right: 1px solid rgba(0, 0, 0, .1);
}

.sells-count, .goods-count {
  font-size: 18px;
}

.sells-text, .goods-text {
  margin-top: 10px;
  font-size: 12px;
}

.shop-middle-right {
  font-size: 13px;
  color: #333;
}

.shop-middle-right table {
  width: 120px;
  margin-left: 30px;
}

.shop-middle-right table td {
  padding: 5px 0;
}

.shop-middle-right .price {
  color: #5ea732;
}

.shop-middle-right .better-price {
  color: #f13e3a;
}

.shop-middle-right .quality span {
  background-color: #5ea732;
  color: #fff;
  text-align: center;
}

.shop-middle-right .better-quality span {
  background-color: #f13e3a;
}

.shop-bottom {
  text-align: center;
  margin-top: 10px;
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

