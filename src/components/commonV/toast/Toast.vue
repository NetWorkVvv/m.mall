<template>
  <div class="toast" v-show="isShow">
    <span class="el-icon-circle-check"/>
    <span class="text">{{ message }}</span>
  </div>
</template>

<script>
export default {
  name: "Toast",
  data() {
    return {
      message: '',
      isShow: false
    }
  },
  methods: {
    showTime(text = '默认文字', time = 2500) {
      //添加定时器
      const timer = setTimeout(() => {
        this.isShow = true
        this.message = text
      },0)
      //添加一个清除定时器
      setTimeout(() => {
        clearTimeout(timer)
        this.isShow = false
        this.message = ''
      }, time)
    }
  }
}
</script>

<style scoped>
.toast {
  position: fixed;
  top: 45%;
  left: 50%;
  transform: translate(-50%);
  padding: 10px;

  z-index: 999;

  color: white;
  border-radius: 15px;
  background-color: rgba(100,100,100, .8);
}
.el-icon-circle-check {
  font-size: 23px;
}
.text {
  width: auto;
  font-size: 18px;
  position: relative;
  left: 2px;
  bottom: 3px;
}
</style>