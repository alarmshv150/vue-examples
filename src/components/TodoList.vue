<template>
  <div class="todos" v-if="todos.length > 0">
    <h3>Todos</h3>
    <todo
      v-for="todo in todos"
      :todo="todo"
      :key="todo.id"
      @remove="$emit('remove', todo)"
    />
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

<style scoped>
.todos {
  margin-top: 15px;
}
</style>
