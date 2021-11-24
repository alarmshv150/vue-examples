import axios from "axios";
export default {
  data() {
    return {
      todo: {},
    };
  },
  methods: {
    async fetchTodoById(id) {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/todos/" + id
      );
      this.todo = response.data;
    },
  },
  mounted() {
    this.fetchTodoById(this.$route.params.id);
  },
}
