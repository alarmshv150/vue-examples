<template>
  <div>
    <h1>Page with todos</h1>
    <todo-form @create="createTodo" />
    <todo-list
      :todos="sortedAndFilteredTodos"
      @remove="removeTodo"
      v-if="!isTodosLoading"
    />
    <div v-else><h1>Loading...</h1></div>
    <page-wrapper :total="total" :page="page" @change="changePage" />
  </div>
</template>

<script>
import axios from "axios";
import TodoForm from "@/components/User/TodoForm";
import TodoList from "@/components/User/TodoList";
import PageWrapper from "@/components/User/PageWrapper";

export default {
  components: {
    TodoForm,
    TodoList,
    PageWrapper,
  },
  data() {
    return {
      todos: [],
      page: 1,
      limit: 10,
      total: 0,
      isTodosLoading: false,
    };
  },
  methods: {
    createTodo(todo) {
      this.todos.push(todo);
    },
    removeTodo(todo) {
      this.todos = this.todos.filter((t) => t.id !== todo.id);
    },
    changePage(number) {
      this.page = number;
      this.fetchTodos();
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
  computed: {
    filteredTodos() {
      return this.todos.filter(
        (todo) => todo.completed === false || todo.completed === "false"
      );
    },
    sortedAndFilteredTodos() {
      return this.filteredTodos.sort(
        (td1, td2) => td1.title.length - td2.title.length
      );
    },
  },
  mounted() {
    this.fetchTodos();
  },
};
</script>

<style scoped></style>
