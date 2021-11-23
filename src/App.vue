<template>
  <div class="app">
    <counter />
    <list />
    <todo-form @create="createTodo" />
    <todo-list :todos="todos" />
  </div>
</template>

<script>
import Counter from "@/components/Counter";
import List from "@/components/List";
import TodoForm from "@/components/TodoForm";
import TodoList from "@/components/TodoList";

export default {
  components: {
    Counter,
    List,
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
    };
  },
  methods: {
    createTodo(todo) {
      this.todos.push(todo);
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
  mounted() {
    console.log("app mounted");
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
