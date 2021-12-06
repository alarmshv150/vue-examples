import axios from "axios";
import { ref, onMounted } from "vue";

export function useFetch(limit) {
  const todos = ref([]);
  const total = ref(0);
  const isTodosLoading = ref(true);

  const fetchTodos = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/todos",
        {
          params: {
            _page: 1,
            _limit: limit,
          },
        }
      );
      total.value = Math.ceil(response.headers["x-total-count"] / limit);
      todos.value = response.data;
    } catch (error) {
      console.log("error");
    } finally {
      isTodosLoading.value = false;
    }
  };
  onMounted(fetchTodos);
  return {
    todos,
    total,
    isTodosLoading,
  };
}
