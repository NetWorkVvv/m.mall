<template>
  <div class="no-carts">
    <img src="@/assets/img/commonV/cats.jpg" alt="">
    <div class="tiShi">购物车空的呢！快去购物吧</div>
    <div class="line">
      <span class="like">你可能喜欢哟</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "NoCarts",
  components :{

  }
}
</script>

<style scoped>

.no-carts {
  position: relative;
  width: 100vw;
  height: 100vh;
  background-color:#fff;
}

.no-carts img {
  position: absolute;
  top: 14%;
  left: 50%;
  transform: translate(-50%);
  width: 200px;
  height: 200px;
}

.no-carts .tiShi {
  position: absolute;
  margin: 15px 0 0 0;
  top: 50%;
  left: 20%;

  font-size: 19px;
  color: black;
}


.line {
  position: absolute;
  top: 62%;
  height: 1px;
  width: 100vw;
  border-top: 1px solid #ddd;
  text-align: center;

}

.like {
  position: absolute;
  left: 53%;
  transform: translate(-50%);
  padding: 0 45px 0;
  margin: -9px;
  font-size: 13px;
  color: #999999;
  background-color: #fff;
}
</style>