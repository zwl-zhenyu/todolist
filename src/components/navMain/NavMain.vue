<template>
  <div>
    <div v-if="list.length > 0">
      <div v-for="(item, index) in list" :key="index">
        <div class="item">
          <input type="checkbox" v-model="item.complete" />
          {{ item.title }}
          <button class="del" @click="del(item, index)">删除</button>
        </div>
      </div>
    </div>
    <div v-else>暂无待办任务</div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'NavMain',
  props: {
    list: {
      type: Array,
      required: true
    }
  },
  emits: ['del'],
  // eslint-disable-next-line space-before-function-paren
  setup(props, ctx) {
    // 删除任务
    const del = (item, index) => {
      ctx.emit('del', index)
    }
    return {
      del
    }
  }
})
</script>

<style scoped lang="scss">
.item {
  height: 35px;
  line-height: 35px;
  width: 185px;
  position: relative;
  cursor: pointer;
  z-index: 99;
  button {
    position: absolute;
    right: 20px;
    top: 6px;
    // 默认按钮隐藏
    display: none;
  }
  // &表示当前类名
  &:hover {
    background-color: #ddd;
    button {
      display: block;
    }
  }
}
</style>
