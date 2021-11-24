<template>
  <div>
    <h1>Page with todos</h1>
    <todo-form @create="createTodo" />
    <todo-list
      :todos="sortedAndFilteredTodos"
      @remove="removeTodo"
      v-if="!isTodosLoading"
    />
    <div v-else>Loading...</div>
    <page-wrapper :total="total" :page="page" @change="changePage" />
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions, mapMutations } from "vuex";
import TodoForm from "@/components/TodoForm";
import TodoList from "@/components/TodoList";
import PageWrapper from "@/components/PageWrapper";

export default {
  components: {
    TodoForm,
    TodoList,
    PageWrapper,
  },
  methods: {
    ...mapMutations({
      setPage: 'todo/setPage',
    }),
    ...mapActions({
      fetchTodos: 'todo/fetchTodos',
    }),
    createTodo(todo) {
      this.todos.push(todo);
    },
    removeTodo(todo) {
      this.todos = this.todos.filter((t) => t.id !== todo.id);
    },
    /* changePage(number) {
      this.page = number;
      this.fetchTodos();
    }, */
  },
/*   mounted() {
    this.fetchTodos();
  }, */

  computed: {
    ...mapState({
      todos: (state) => state.todo.todos,
      isTodosLoading: (state) => state.todo.isTodosLoading,
      page: (state) => state.todo.page,
      limit: (state) => state.todo.limit,
      total: (state) => state.todo.total,
    }),
    ...mapGetters({
      filteredTodos: 'todo/filteredTodos',
      sortedAndFilteredTodos: 'todo/sortedAndFilteredTodos',
    }),
  }
};
</script>

<style scoped></style>
