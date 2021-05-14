<template>
  <div id="bottom-bar">
    <check-button class="checkbox" :is-checked="isSelectAll" @click.native="isSelectAllClick"/>
    <span class="checkbox-text" slot="text">
        <div class="checkbox-all">全选</div>
        <div class="checkbox-incs">总计:¥{{ totalPrice.toFixed(2) }}</div>
        <div class="checkbox-mai" @click="payClick">去结算({{ checkedNum }})</div>
      </span>


  </div>
</template>、

<script>
import CheckButton from "@/components/commonV/checkButton/CheckButton";
import {mapGetters} from 'vuex'

export default {
  name: "CartsBottomBar",
  data() {
    return {
      isInc: true
    }
  },
  components: {
    CheckButton
  },
  computed: {
    ...mapGetters(['getCartsList', 'getCartsLength']),
    totalPrice() {
      return this.getCartsList.filter(item => {
        return item.checked
      }).reduce((pre, item) => {
        return pre + item.count * item.price
      }, 0)
    },
    checkedNum() {
      return this.getCartsList.filter(item => {
        return item.checked
      }).length
    },
    isSelectAll() {
      // ! (在getCartsList寻找 checked没选中的实例 找到为 true 否则为 false)
      return !(this.getCartsList.find(item => !item.checked))
    }
  },
  methods: {
    isSelectAllClick() {
      if (this.isSelectAll) {
        //判断 isSelectAll 是否为真 真则全选状态 所以通过 forEach 拿出数组的每个元素改掉checked 并将元素传递给回调函数
        this.getCartsList.forEach(item => item.checked = false)
      } else {
        this.getCartsList.forEach(item => item.checked = true)
      }
    },
    payClick() {
      if(!this.getCartsList.find(item => item.checked)) {
        this.$toast.showTime('还未选中商品',1500)

      }
    }
  },

}
</script>

<style scoped>
#bottom-bar {
  width: 100vw;
  height: 44px;

  background-color: rgba(245, 245, 245, .5);
  position: fixed;
  bottom:7.5%;
}

.checkbox {
  position: relative;
  left: 3px;
  top: 6px;
}

.checkbox-text {
  position: relative;
  left: 3px;
  top: 5px;
  color: #DC143C;
}

.checkbox-all {
  position: absolute;
  left: 6px;
  bottom: 10px;
  width: 40px;
  margin: 0 25px;
  font-size: 13px;
}

.checkbox-incs {
  position: absolute;
  left: 110px;
  bottom: 8px;
  width: 150px;
  font-size: 15px;
}

.checkbox-mai {
  position: absolute;
  left: 62vw;
  bottom: 4px;
  text-align: center;
  width: 130px;
  padding: 7px 0;
  color: white;
  background-color: #DC143C;
  border-radius: 20px;
}

</style>