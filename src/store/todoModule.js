import axios from "axios";

export const todoModule = {
    state: () => ({
        todos: [],
        page: 1,
        limit: 10,
        total: 0,
        isTodosLoading: false,
    }),
    getters: {
        filteredTodos(state) {
            return state.todos.filter((todo) => todo.completed === false || todo.completed === "false");
        },
        sortedAndFilteredTodos(getters) {
            return getters.filteredTodos.sort(
                (todo1, todo2) => todo2.title.length - todo1.title.length
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
            state.total = total;
        },
    },
    actions: {
        async fetchTodos({state, commit}) {
            try {
                commit('setLoading', true);
                const response = await axios.get(
                    "https://jsonplaceholder.typicode.com/todos",
                    {
                        params: {
                            _page: state.page,
                            _limit: state.limit,
                        }
                    }
                );
                commit(
                    'setTotal',
                    Math.ceil(response.headers["x-total-count"] / state.limit)
                );
                commit('setTodos', response.data);
            } catch (e) {
                console.log(e);
            } finally {
                commit('setLoading', false);
            }
        },
    },
    namespaced: true,
};
