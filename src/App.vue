<template>
  <div class="app">
    <child />
    <div>
      <h1>Counter:{{ counter }}</h1>
      <button @click="decrement">Decrement</button>
      <button @click="increment">Increment</button>
    </div>
    <div>
      <h1>The number of elements:{{ incorrectLength }}</h1>
      <div v-for="elem in list" :key="elem.id">{{ elem }}</div>
      <button @click="addElement">Add element</button>
    </div>
    <div>
      <todo-form @create="createTodo" />
      <todo-list :todos="todos" />
    </div>
  </div>
</template>

<script>
import TodoForm from "@/components/TodoForm";
import TodoList from "@/components/TodoList";
import Child from "@/components/Child";
import CountMixin from "@/mixins/CountMixin";
import ListMixin from "@/mixins/ListMixin";

export default {
  mixins: [CountMixin, ListMixin],
  components: {
    TodoForm,
    TodoList,
    Child,
  },
  data() {
    return {
      todos: [
        { id: 0, title: "todo 1", completed: "true" },
        { id: 1, title: "todo 2", completed: "false" },
        { id: 2, title: "todo 3", completed: "true" },
      ],
      user: {
        name: "alarmshv",
        address: {
          street: "",
        },
      },
    };
  },
  provide() {
    return {
      user: this.user,
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
