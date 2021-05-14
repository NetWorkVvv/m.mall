import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


const store = new Vuex.Store({
  state: {
    cartsList: []
  },
  mutations: {
    //添加商品数量
    addToCount(state, payload) {
      //添加一个key count
      payload.count++
    },
    //添加新的商品
    addToCartsList(state, payload) {
      payload.checked = true
      state.cartsList.push(payload)
    },
    //增加数量
    addCount(state, payload) { 
      payload.count++
    },
    //删除数量
    ajjCount(state, payload) {
      if (state.count === 1) {
        payload.count = 1
      } else {
        payload.count--
      }
    },
    //删除商品
    delCartsList(state, iid) {
      state.cartsList.splice(iid, 1)
    }
  },
  actions: {
    //添加商品
    //{state,commit} 解构 context
    actCartsList({ state, commit }, payload) {
      return new Promise((resolve, reject) => {
        // 判断cartsList内是否存在payload添加的商品信息 如果存在就赋值给oldProduct
        let oldProduct = state.cartsList.find(item => item.iid === payload.iid)
        //find 返回布尔值 如果找到了就数量 +1
        if (oldProduct) {
          // oldProduct.count += 1
          commit('addToCount', oldProduct)
          resolve('商品已加入购物车')
        } else {
          //否则给crtsList 添加进去
          payload.count = 1
          // state.cartsList.push(payload)
          commit('addToCartsList', payload)
          resolve('商品成功加入购物车')
        }
      })
    },
    // //增加数量
    pushCount({ state, commit },payload) {
      state.cartsList.forEach(item => {
        if (item.iid === payload.iid) {
          commit('addCount',payload)
        }
      })
    },
    //删除数量
    delCount({ state, commit }, payload) {
      state.cartsList.forEach(item => {
        if (item.iid === payload.iid) {
          commit('ajjCount',payload)
        }
      })
    },
    //删除商品
    delCartsList({ state, commit }, iid) {
      state.cartsList.forEach(item => {
        if (item.iid === iid) {
          commit('delCartsList')
        }
      })
    }
  },
  getters: {
    getCartsList(state) {
      return state.cartsList
    },
    getCartsLength(state) {
      return state.cartsList.length
    }
  }
})
export default store