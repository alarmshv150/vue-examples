<template>
  <div class="todos" v-if="todos.length > 0">
    <h3>Todos</h3>
    <transition-group name="user-list">
      <todo
        v-for="todo in todos"
        :todo="todo"
        :key="todo.id"
        @remove="$emit('remove', todo)"
      />
    </transition-group>
  </div>
  <h2 v-else style="color: red">The list of todos is empty</h2>
</template>

<script>
import Todo from "@/components/User/Todo";

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
.user-list-item {
  display: inline-block;
  margin-right: 10px;
}
.user-list-enter-active,
.user-list-leave-active {
  transition: all 0.4s ease;
}
.user-list-enter-from,
.user-list-leave-to {
  opacity: 0;
  transform: translateX(130px);
}
.user-list-move {
  transition: transform 0.4s ease;
}
</style>
