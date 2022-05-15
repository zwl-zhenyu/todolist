// 状态管理可以实现数据数据共享，每个组件都可以使用
import { createStore } from 'vuex'

export default createStore({
  // 定义所需要状态
  state: {
    list: [
      {
        title: '吃饭',
        complete: false
      },
      {
        title: '睡觉',
        complete: false
      },
      {
        title: '学习',
        complete: true
      }
    ]
  },

  getters: {},
  // 同步修改state， 里面都是方法
  // 第一个参数state，第二个参数是需要修改的值
  mutations: {
    // 添加任务
    // eslint-disable-next-line space-before-function-paren
    addToDo(state, payload) {
      state.list.push(payload)
    },
    // 删除任务 splice(下标，个数)
    // eslint-disable-next-line space-before-function-paren
    delToDo(state, payload) {
      state.list.splice(payload, 1)
    },
    // 删除已完成 splice(下标，个数)
    // eslint-disable-next-line space-before-function-paren
    clear(state, payload) {
      // 把过滤后的数组传进来
      state.list = payload
    }
  },
  // 异步提交mutations
  // 第一个参数是整个store对象 第二个参数是要修改的值
  actions: {
    // eslint-disable-next-line space-before-function-paren
    // asyncSetName() {
    // setTimeout(() => {
    // commit是用来提交mutation 调用mutation的方法
    // 要修改的数据
    // eslint-disable-next-line no-undef
    // store.commit('setName', params)}, 2000)}
  },
  // 模块化
  modules: {}
})
