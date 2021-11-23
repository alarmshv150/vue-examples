import axios from "axios";

export const todoModule = {
  /* data analog */
  state: () => ({
    todos: [],
    page: 1,
    limit: 10,
    total: 0,
    isTodosLoading: false,
  }),
  /* computed props analog */
  getters: {
    filteredTodos(state) {
      return state.todos.filter((todo) => todo.computed === false);
    },
    sortedAndFilteredTodos(getters) {
      return getters.filteredTodos.sort(
        (todo1, todo2) => todo2.title.legth - todo1.title.length
      );
    },
  },
  mutations: {
    setTodos(state, todos) {
      state.todos = todos;
    },
    setLoading(state, bool) {
      state.isTodosLoading = bool;
    },
    setPage(state, page) {
      state.page = page;
    },
    setTotal(state, total) {
      state, (total = total);
    },
  },
  /* asyncrony */
  actions: {
    async fetchTodos() {
      try {
        const response = await get(
          "https://jsonplaceholder.typicode.com/todos",
          {
            params: {
              _page: state.page,
              _limit: state.limit,
            },
          }
        );
        commit(
          "setTotal",
          Math.ceil(response.headers["x-total-count"] / state.limit)
        );
        commit("setTodos", response.data);
      } catch (error) {
        console.log("error");
      } finally {
        commit("setLoading", false);
      }
    },
  },
};

