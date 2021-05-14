<template>
  <div class="bottom-bar">
    <div class="bar-item bar-left">
      <div>
        <i class="icon service"></i>
        <span class="text">客服</span>
      </div>
      <div @click="enterShopClick">
        <i class="icon shop"></i>
        <span class="text">店铺</span>
      </div>

      <div @click="selectClick">
        <div v-if="!cola">
          <i class="icon select"></i>
          <span class="text">收藏</span>
        </div>
        <div v-else>
          <i class="icon select1"></i>
          <span class="text">收藏</span>
        </div>
      </div>

      <div @click="toCarts">
        <i class="el-icon-shopping-cart-1"></i>
        <span class="text">购物车</span>
      </div>
    </div>

    <div class="bar-item bar-right">
      <div class="cart" @click="addToCarts">加入购物车</div>
      <div class="buy">购买</div>
    </div>

  </div>
</template>

<script>

export default {
  name: "DetailBottomBar",
  data() {
    return {
      cola: 0,
      name: '',
    }
  },
  props: {
    shop: {
      type: Object
    },

  },
  methods: {
    addToCarts() {
      this.$emit('addCartsAdv')
    },

    selectClick() {
      if (this.cola == 0) {
        return this.cola = 1
      } else {
        return this.cola = 0
      }
    },
    enterShopClick() {
      //params 实现路由跳转要在路由Path后添加:name
      // this.$router.push('/supermarket/' + this.shop.name)
      //query 传递参数 ？ 后 {path: '/detail', query: {iid}}
      let name = this.shop.name
      this.$router.push({path: '/supermarket', query: {name}})
    },
    toCarts() {
      this.$router.push({path: '/carts',})
    }
  },
  components: {}
}
</script>

<style scoped>
.bottom-bar {
  height: 58px;
  position: fixed;
  background-color: #fff;
  left: 0;
  right: 0;
  bottom: 0;

  display: flex;
  text-align: center;
}

.bar-item {
  flex: 1;
  display: flex;
}

.bar-item > div {
  flex: 1;
}

.bar-left .text {
  font-size: 13px;
}

.bar-left .icon {
  display: block;
  width: 22px;
  height: 22px;
  margin: 10px auto 3px;
  background: url("~assets/img/detail/detail_bottom.png") 0 0/100%;
}

.el-icon-shopping-cart-1 {
  display: block;
  font-size: 23px;
  width: 22px;
  height: 22px;
  margin: 10px auto 3px;
}

.bar-left .service {
  background-position: 0 -52px;
}

.bar-left .shop {
  background-position: 0 -98px;
}

.bar-left .select1 {
  background-position: 0 -27px;
}

.bar-right {
  font-size: 15px;
  color: #fff;
  line-height: 58px;
}

.bar-right .cart {
  padding: 0 15px 0;
  background-color: #ffe817;
  color: #333;
  font-size: 15px;
}

.bar-right .buy {
  background-color: #f69;
}

</style>
