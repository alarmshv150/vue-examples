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
import { useFetch } from "@/hooks/useFetch";
import useFilteredTodos from "@/hooks/useFilteredTodos";
import useSortedAndFilteredTodos from "@/hooks/useSortedAndFilteredTodos";

export default {
  components: {
    TodoForm,
    TodoList,
    PageWrapper,
  },
  data() {
    return {};
  },
  setup(props) {
    const { todos, total, isTodosLoading } = useFetch(10);
    const { filteredTodos } = useFilteredTodos(todos);
    const { sortedAndFilteredTodos } = useSortedAndFilteredTodos(filteredTodos);
    return {
      todos,
      total,
      isTodosLoading,
      filteredTodos,
      sortedAndFilteredTodos,
    };
  },
};
</script>

<style scoped></style>
