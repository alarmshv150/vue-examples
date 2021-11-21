<template>
  <div>
    <h3>todos</h3>
    <todo v-for="todo in todos" :todo="todo" :key="todo.id" />
  </div>
</template>

<script>
import Todo from "@/components/Todo";

export default {
  components: { Todo },

  props: {
    todos: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped></style>
