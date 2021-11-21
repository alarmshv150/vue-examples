<template>
  <div class="app">
    <todo-form />
    <!-- missing required prop: "todos" without binding  -->
    <todo-list :todos="todos" />
  </div>
</template>

<script>
import TodoForm from "@/components/TodoForm";
import TodoList from "@/components/TodoList";

export default {
  components: {
    TodoForm,
    TodoList,
  },

  data() {
    return {
      todos: [
        { id: 0, title: "todo 1", completed: "true" },
        { id: 1, title: "todo 2", completed: "false" },
        { id: 2, title: "todo 3", completed: "true" },
      ],
      title: "",
      completed: "",
    };
  },
  methods: {
    createTodo() {
      const newTodo = {
        id: Date.now(),
        title: this.title,
        completed: this.completed,
      };
      this.todos.push(newTodo);
      this.title = "";
      this.completed = "";
    },
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.app {
  padding: 30px;
}
</style>
