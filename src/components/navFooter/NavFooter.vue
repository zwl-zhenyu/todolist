<template>
  <div class="container">
    <div>已完成{{ isComplete }} / 全部{{ list.length }}</div>
    <div v-if="isComplete > 0" class="btn">
      <button @click="clear">清除已完成</button>
    </div>
  </div>
</template>

<script>
import { computed, defineComponent } from 'vue'
export default defineComponent({
  name: 'NavFooter',
  props: {
    list: {
      type: Array,
      required: true
    }
  },
  emits: ['clear'],
  // eslint-disable-next-line space-before-function-paren
  setup(props, ctx) {
    // 清除已完成任务
    // 把clear函数放在iscomplete下面会报错,很奇怪
    const clear = () => {
      // 过滤未完成的
      const arr = props.list.filter((item) => {
        return item.complete === false
      })
      ctx.emit('clear', arr)
    }
    const isComplete = computed(() => {
      // 过滤已完成的
      const arr = props.list.filter((item) => {
        return item.complete
      })
      return arr.length
    })
    return {
      isComplete,
      clear
    }
  }
})
</script>

<style scoped lang="scss">
.container {
  display: flex;
  align-items: center;
  .btn {
    margin-left: 10px;
  }
}
</style>
