<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <!-- <Header :addTodo="addTodo"></Header> -->
      <!-- <Header @addTodo="addTodo"></Header> -->
      <Header ref="add"></Header>
      <Main :todos="todos" :updateOne="updateOne" :deleteOne="deleteOne"></Main>
      <!-- <Footer :todos="todos" :updateAll="updateAll" :deleteAll="deleteAll"></Footer> -->
      <!-- 全局总线 -->
      <Footer :todos="todos" :updateAll="updateAll"></Footer>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import Header from "@/components/Header";
import Main from "@/components/Main";
import Footer from "./components/Fotter";
export default {
  components: {
    Main,
    Header,
    Footer
  },
  mounted() {
    this.$refs.add.$on("addTodo", this.addTodo);
    this.$bus.$on("deleteAll", this.deleteAll);
  },
  data() {
    return {
      todos: JSON.parse(localStorage.getItem("todos_key")) || [
        { id: 1, content: "我", isOver: false },
        { id: 2, content: "奈", isOver: true },
        { id: 3, content: "你", isOver: false }
      ]
    };
  },
  methods: {
    addTodo(obj) {
      this.todos.unshift(obj);
    },
    updateOne(index, val) {
      this.todos[index].isOver = val;
    },
    deleteOne(index) {
      this.todos.splice(index, 1);
    },
    updateAll(val) {
      this.todos.forEach(item => (item.isOver = val));
    },
    deleteAll() {
      this.todos = this.todos.filter(item => !item.isOver);
    }
  },
  watch: {
    // 浅监视
    // todos(newVal, oldVal) {
    //   // 数据发生变化 就把新数据存到localStorage
    //   localStorage.setItem("todos_key", JSON.stringify(newVal));
    // }
    // 深监视
    todos: {
      deep: true,
      handler(newVal, oldVal) {
        localStorage.setItem("todos_key", JSON.stringify(newVal));
      }
    }
  },
  beforeDestroy() {
    // this.$refs.add.$off("addTodo", this.addTodo);
  }
};
</script>

<style scoped>
.todo-container {
  width: 600px;
  margin: 0 auto;
}
.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>
