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
import TodoForm from "@/components/User/TodoForm";
import TodoList from "@/components/User/TodoList";
import PageWrapper from "@/components/User/PageWrapper";
import FetchMixin from "@/mixins/FetchMixin";

export default {
  components: {
    TodoForm,
    TodoList,
    PageWrapper,
  },
  mixins: [FetchMixin],
};
</script>

<style scoped></style>




