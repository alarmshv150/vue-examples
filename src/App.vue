<template>
  <div class="app">
    <h1>Counter:{{ counter }}</h1>
    <button @click="counter--">Decrement</button>
    <button @click="counter++">Increment</button>

    <!-- incorrectLength() without computed -->
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
  /* called only with changing of the list length */
  computed: {
    incorrectLength() {
      console.log("called");
      return this.list.length + 1;
    },
  },

  /* increment() {
      this.counter++;
    },
    decrement() {
      this.counter--;
    },
    addElement() {
      this.list.push(this.list.length + 1);
    }, */
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
