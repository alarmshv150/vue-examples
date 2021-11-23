<template>
  <div>
    <div>
      <h1>ID:{{ $route.params.id }}</h1>
      <p><strong>Title:</strong>{{ todo.title }}</p>
      <p><strong>Completed:</strong>{{ todo.completed }}</p>
    </div>
  </div>
</template>

<script>
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
};
</script>

<style scoped></style>
