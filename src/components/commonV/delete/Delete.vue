<template>
  <div class="delete">
    <div class="showTime">
      <div class="el-icon-warning-outline" />
      <p class="sure">确认删除此商品?</p>
      <div class="select">
        <span class="se select1">取消</span>
        <span class="se select2">删除</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Delete",
  data() {
    return {
      message: ''
    }
  },
  methods: {}
}
</script>

<style scoped>
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
  width: 240px;
  text-align: center;
}

.select {
  margin: 17px 0 3px 0;
}

.se {
  font-size: 13px;
  font-weight: bold;
  padding: 5px 41px;
  border-radius: 15px;
}

.select1 {
  margin: 0 0 0 10px;
  border: #666666 1px solid;
}

.select2 {
  background-color: #dc143c;
  color: #ffffff;
  margin: 0 10px 0 10px;
}

.login-bg {
  background-color: rgba(0, 0, 0, 0.4);
  width: 100%; /*宽度设置为100%，这样才能使隐藏背景层覆盖原页面*/
  height: 100%;
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
}
</style>