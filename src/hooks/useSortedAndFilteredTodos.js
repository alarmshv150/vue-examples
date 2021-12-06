import { computed } from "vue";

export default function useSortedAndFilteredTodos(filteredTodos) {
  const sortedAndFilteredTodos = computed(() => {
    return filteredTodos.value.sort(
      (td1, td2) => td1.title.length - td2.title.length
    );
  });
  return {
    sortedAndFilteredTodos,
  };
}
