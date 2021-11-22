<template>
  <div class="app">
    <h1>Counter:{{ counter }}</h1>
    <button @click="counter--">Decrement</button>
    <button @click="counter++">Increment</button>

    <h1>The number of elements:{{ incorrectLength }}</h1>
    <div v-for="elem in list" :key="elem.id">{{ elem }}</div>
    <button @click="list.push(list.length + 1)">Add element</button>

    <todo-form @create="createTodo" />
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
      counter: 0,
      list: [1, 2],

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
  computed: {
    incorrectLength() {
      console.log("called");
      return this.list.length + 1;
    },
  },
  watch: {
    counter(newValue) {
      console.log(newValue);
    },
    todos: {
      handler(newValue) {
        console.log(newValue);
      },
      deep: true,
    },
    list: {
      handler(newValue) {
        console.log(newValue);
      },
      deep: true,
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
