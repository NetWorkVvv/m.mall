// 封装库

//提示
import Toast from "@/components/commonV/toast/Toast";

const obj = {}

//在入口文件中use这个插件 然后执行下面的方法
obj.install = (Vue) => {
// 构造一个函数 并继承 在Vue实例中的 组件Toast
  const toastConstructor = Vue.extend(Toast)
//  创建实例
  const toast = new toastConstructor
//  将实例 手动挂载 到新创建的元素标签上
  toast.$mount(document.createElement('div'))
//  把 toast实例 上的 el添加到 新创建的元素标签上 因为创建就要添加
  document.body.appendChild(toast.$el)
// 在Vue原型上添加
  Vue.prototype.$toast = toast
}
export default obj