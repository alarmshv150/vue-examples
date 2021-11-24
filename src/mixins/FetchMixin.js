import axios from "axios";
export default {
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
