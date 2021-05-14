<template>
  <div id="shop-item">
    <div class="item-selector">
      <check-button
        :is-checked="cartsMainList.checked"
        @click.native="checkedClick"
      />
    </div>

    <div class="item-img">
      <img :src="cartsMainList.image" alt="商品图片" />
    </div>

    <div class="item-info">
      <div class="item-title">
        <span class="el-icon-s-shop" />
        <span @click="shopClick">&nbsp;{{ cartsMainList.shopName }}</span>
        <button class="el-icon-delete" @click="delBtn" />
      </div>

      <div class="item-desc">商品描述: {{ cartsMainList.infoTitle }}</div>

      <div class="info-bottom">
        <div class="item-price left">¥{{ cartsMainList.price }}</div>

        <div class="item-count right">
          <button class="item-count-btn" @click="ajjClick" ref="btnAjj">
            -
          </button>
          <span class="item-count-text">{{ cartsMainList.count }}</span>
          <button class="item-count-btn" @click="addClick">+</button>
        </div>
      </div>

      <div class="showTime" v-show="isDelete">
        <div class="el-icon-warning-outline" />
        <p class="sure">确认删除此商品?</p>
        <div class="select">
          <span class="se select1" @click="inOff">取消</span>
          <span class="se select2" @click="inOn">删除</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CheckButton from "@/components/commonV/checkButton/CheckButton";

export default {
  name: "CartsMainList",
  props: {
    cartsMainList: {
      type: Object,
      default() {
        return {
          count: 0,
        };
      },
    },
  },
  data() {
    return {
      isDelete: false,
    };
  },
  components: {
    CheckButton,
  },
  methods: {
    checkedClick() {
      this.cartsMainList.checked = !this.cartsMainList.checked;
    },
    shopClick() {
      // const name = this.cartsMainList.shopName
      this.$router.push("/detail/" + this.cartsMainList.iid);
    },
    delBtn() {
      this.isDelete = true;
    },
    inOff() {
      this.isDelete = false;
    },
    inOn() {
      this.isDelete = false;
      this.$store.dispatch("delCartsList", this.cartsMainList.iid);
      this.$toast.showTime("删除商品成功", 1800);
    },
    ajjClick() {
      if (this.cartsMainList.count === 1) {
        this.$toast.showTime("商品1件起售");
      } else {
        this.$store.dispatch("delCount", this.cartsMainList);
      }
    },
    addClick() {
      this.$store.dispatch("pushCount", this.cartsMainList);
    },
  },
};
</script>

<style scoped>
#shop-item {
  width: 100%;
  display: flex;
  font-size: 0;
  padding: 5px;
  border-bottom: 1px solid #ccc;
}

.item-selector {
  width: 16%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.item-desc {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.item-img {
  padding: 5px;
  /*border: 1px solid #ccc;*/
}

.item-img img {
  width: 80px;
  height: 100px;
  display: block;
  border-radius: 5px;
}

.item-info {
  font-size: 17px;
  color: #333;
  padding: 5px 10px;
  position: relative;
  overflow: hidden;
}

.item-info .item-desc {
  font-size: 14px;
  color: #666;
  margin-top: 15px;
}

.el-icon-delete {
  position: absolute;
  right: 15px;
  color: #dc143c;
  font-size: 20px;
  font-weight: bold;
  border: 1px solid rgba(102, 102, 102, 0.1);
  background-color: rgba(102, 102, 102, 0.1);
}

.info-bottom {
  margin-top: 10px;
  position: absolute;
  bottom: 10px;
  left: 10px;
  right: 10px;
}

.info-bottom .item-price {
  color: orangered;
}

.item-count-text {
  font-size: 16px;
  padding: 0 10px 0 10px;
}

.item-count-btn {
  width: 20px;
  border: none;
  font-weight: bold;
  background-color: rgba(102, 102, 102, 0.1);
}

.showTime {
  position: fixed;
  top: 35%;
  left: 50%;
  transform: translate(-50%);
  padding: 10px;
  z-index: 9;
  width: 270px;
  border-radius: 15px;
  border: 1px solid #999999;
  background-color: #ffffff;
}

.el-icon-warning-outline {
  position: relative;
  left: 50%;
  transform: translate(-50%);
  margin: 4px 0;
  font-size: 55px;
  color: #dc143c;
}

.sure {
  font-size: 17px;
  margin: 10px 0;

  text-align: center;
}

.select {
  margin: 17px 0 3px 0;
}

.se {
  font-size: 13px;
  font-weight: bold;
  padding: 5px 39px;
  border-radius: 15px;
  text-align: center;
}

.select1 {
  margin: 0 0 0 10px;
  border: #666666 1px solid;
}

.select2 {
  background-color: #dc143c;
  color: #ffffff;
  margin: 0 13px 0 10px;
}
</style>
