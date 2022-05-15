<template>
  <div>
    <nav-header @add="add"></nav-header>
    <nav-main :list="list" @del="del"></nav-main>
    <nav-footer :list="list" @clear="clear"></nav-footer>
  </div>
</template>

<script>
import NavHeader from '@/components/navHeader/NavHeader.vue'
import NavMain from '@/components/navMain/NavMain.vue'
import NavFooter from '@/components/navFooter/NavFooter.vue'
import { defineComponent, ref, computed } from 'vue'
import { useStore } from 'vuex'

export default defineComponent({
  name: 'HomeView',
  components: {
    NavHeader: NavHeader,
    NavMain: NavMain,
    NavFooter: NavFooter
  },
  // eslint-disable-next-line space-before-function-paren
  setup() {
    const store = useStore()
    const list = computed(() => {
      return store.state.list
    })
    const value = ref('')
    // 添加任务
    const add = (val) => {
      value.value = val
      // 判断该任务是否已经存在
      let flag = true
      // eslint-disable-next-line array-callback-return
      list.value.map((item) => {
        if (item.title === value.value) {
          flag = false
          alert('任务已存在！')
        }
      })
      // 调用mutation 和定义的list保持一致
      if (flag) {
        store.commit('addToDo', {
          title: value.value,
          complete: false
        })
      }
    }
    // 删除任务
    const del = (val) => {
      // 调用删除的mutation
      store.commit('delToDo', val)
    }
    // 清除已完成任务
    const clear = (val) => {
      store.commit('clear', val)
    }
    return {
      add,
      del,
      clear,
      value,
      list
    }
  }
})
</script>

<style scoped lang="scss"></style>
