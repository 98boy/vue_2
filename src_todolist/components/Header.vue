<template>
  <div class="todo-header">
    <input type="text" placeholder="请输入你的任务名称，按回车键确认" @keyup.enter="addT" v-model="content" />
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data() {
    return {
      content: ""
    };
  },
  props: {
    // addTodo: Function
  },
  methods: {
    addT() {
      // 收集数据
      let content = this.content;
      let id = Date.now();
      let isOver = false;
      // 添加到todos里
      if (content.trim()) {
        let obj = {
          id,
          content,
          isOver
        };
        // this.addTodo(obj);   props通信
        this.$emit("addTodo", obj); //自定义通信 子传父
      }
      this.content = "";
    }
  }
};
</script>

<style scoped>
.todo-header input {
  width: 560px;
  height: 28px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 4px 7px;
}

.todo-header input:focus {
  outline: none;
  border-color: rgba(82, 168, 236, 0.8);
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075),
    0 0 8px rgba(82, 168, 236, 0.6);
}
</style>
