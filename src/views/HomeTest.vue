<template>
  <div>{{ num }}</div>
  <div>{{ name }}</div>
</template>

<script>
import { defineComponent, reactive, computed } from 'vue'
import { useStore } from 'vuex'

export default defineComponent({
  name: 'HomeView',
  // 接收父组件数据
  props: {},
  // 定义子组件
  components: {},
  // eslint-disable-next-line space-before-function-paren
  setup(props, ctx) {
    // const num = ref(10)
    // const name = ref('jack')
    // const arr = ref(['a', 'b', 'c', 'd'])
    // const obj = ref({
    //   age: 20
    // })
    const store = useStore()
    const list = computed(() => {
      return store.state.list
    })
    const data = reactive({
      name: 'jack',
      age: 20,
      obj: {
        price: 20
      },
      arr: ['a', 'b', 'c', 'd']
    })

    return {
      data,
      list
      // num,
      // name,
      // arr,
      // obj
    }
  }
})
</script>

<style scoped lang="scss"></style>
