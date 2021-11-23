<template>
  <div class="app">
    <todo-form @create="createTodo" />
    <div v-if="!isTodosLoading">
      <todo-list :todos="todos" />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import TodoForm from "@/components/TodoForm";
import TodoList from "@/components/TodoList";

export default {
  components: {
    TodoForm,
    TodoList,
  },
  data() {
    return {
      todos: [],
      page: 1,
      limit: 20,
      total: 0,
      isTodosLoading: false,
    };
  },
  methods: {
    createTodo(todo) {
      this.todos.push(todo);
    },
    async fetchTodos() {
      try {
        this.isTodosLoading = true;
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/todos",
          {
            params: {
              _page: this.page,
              _limit: this.limit,
            },
          }
        );
        this.todos = response.data;
        this.total = Math.ceil(response.headers["x-total-count"] / this.limit);
      } catch (error) {
        console.log("error");
      } finally {
        this.isTodosLoading = false;
      }
    },
  },
  watch: {
    todos: {
      handler(newValue) {
        console.log(newValue);
      },
      deep: true,
    },
  },
  mounted() {
    this.fetchTodos();
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.app {
  padding: 30px;
}
</style>
