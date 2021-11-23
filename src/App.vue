<template>
  <div class="app">
    <todo-form @create="createTodo" />
    <todo-list :todos="todos" />
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
    };
  },
  methods: {
    createTodo(todo) {
      this.todos.push(todo);
    },
    async fetchTodo() {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/todos"
        );
        this.todos = response.data;
      } catch (error) {
        console.log("error");
      } finally {
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
  /* life cycle methods for fetching API data */
  mounted() {
    this.fetchTodo();
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
