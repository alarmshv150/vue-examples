import { computed } from "vue";

export default function useFilteredTodos(todos) {
  const filteredTodos = computed(() => {
    return todos.value.filter(
      (todo) => todo.completed === false || todo.completed === "false"
    );
  });
  return {
    filteredTodos,
  };
}
