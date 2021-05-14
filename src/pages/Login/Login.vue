<template>
  <div>
    <div class="login-header">
      <a @click= 'link' id='link' href="Javascript:">点击弹出登录框</a>
    </div>
    <div class="login" id="login">
      <div class="login-title" id='title' @mousedown="loginTitle($event)">会员登录
        <span>
        <a @click="closeBtn" id='closeBtn' href='Javascript:' class="close-login">关闭</a>
      </span>
      </div>
      <div class="login-input-content">
        <!-- from action='向那个URL提交数据' 提交数据是:input中的属性name='?query'-->
        <form action='/profile'>
          <div class="login-input">
            <label for="username">用户名&nbsp;&nbsp;&nbsp;</label>
            <input type="text" placeholder="请输入用户名"  name="username" id= 'username' class="username">
            <!-- placeholder="" 文本框显示提示内容，当鼠标获取该文本框焦点并输出数据时 提示内容消失 -->
          </div>
          <div class="login-input">
            <label for='password'>登录密码</label>
            <input type="password" placeholder="请输入登录密码" name="password" class="password" id="password">
          </div>
          <div class="login-button"><input type="submit" value="提交登录" ></div>
        </form>
      </div>
    </div>
    <!-- 遮盖层 -->
    <div id="bg" class="login-bg"></div>
  </div>


</template>

<script>


export default {
  name: "Login",
  methods:{
    link(){
      document.querySelector('.login').style.display = 'block';
      document.querySelector('.login-bg').style.display = 'block';
    },
    closeBtn(){
      document.querySelector('.login').style.display = 'none';
      document.querySelector('.login-bg').style.display = 'none';
    },
    loginTitle($event){
      let x = $event.pageX - document.querySelector('.login').offsetLeft;
      let y = $event.pageY - document.querySelector('.login').offsetTop;

      function move($event){
        document.querySelector('.login').style.left = $event.pageX - x + 'px';
        document.querySelector('.login').style.top = $event.pageY - y + 'px';
      }
      document.addEventListener('mousemove',move);
      document.querySelector('.login-title').addEventListener('mouseup',function(){
        document.removeEventListener('mousemove',move);
      })
    }
  }
}
</script>

<style scoped>

.login-header{
  margin: 100px;
  text-align: center;
  font-size: 28px;
  font-weight:bolder;
}

#link{
  color: black;
}

.login-title{
  text-align: center;
  padding:30px;
  line-height: 40px;
  font-size: 18px;
  font-weight: bold;
  width: auto;
  height: auto;
  background-color:white;

}

.close-login{
  text-decoration:none;
  color: black;
  font-size: 15px;
  position: relative;
  top:0;
  left: 0;
}

.login-title span{
  position: absolute;
  right: -23px;
  top:-15px;
  background: #ffffff;
  border: #ebebeb solid 1px;
  width: 40px;
  height: 40px;
  border-radius: 40px;
}

.login-input label{
  width: 90px;
  padding-right: 30px;
  line-height: 35px;
  height: 35px;
  font-size: 17px;
}

.login-input-content{
  width: 500px;
  height: 150px;
}

.login-input input{
  width: 300px;
  height: 30px;
  border: solid	#F0F8FF 1px;
  margin: 10px;
}

.login{
  background:#ffffff;
  border: #ebebeb solid 1px;
  width: 512px;
  height: 280px;
  box-shadow: 0 0 20px #ddd;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  z-index: 3;
  /* z-index 要在有定位的时候使用  z-index:值大的一方在上层显示*/
  display: none;
}

.login-bg{
  background-color:rgba(0, 0, 0, .4);
  width:100%;  /*宽度设置为100%，这样才能使隐藏背景层覆盖原页面*/
  height:100%;
  display:none;
  position:fixed;
  top: 0;
  left: 0;
  z-index: 2;
}

.login-button {
  height: 40px;
  border: solid 1px white;
  width: 100px;
  box-shadow: 0 0 20px azure;
  position: relative;
  right: -43%;
  top:-10%;
}




</style>
