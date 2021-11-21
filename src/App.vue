<template>
  <div class="app">
    <!-- prevent default browser behavior -->
    <form @submit.prevent>
      <h4>create todo</h4>
      <!--model binding and input event handling-->
      <input
        :value="title"
        @input="title = $event.target.value"
        type="text"
        placeholder="title"
      />
      <input
        :value="completed"
        @input="completed = $event.target.value"
        type="text"
        placeholder="completed"
      />
      <button @click="createTodo">create</button>
    </form>
    <h3>todos</h3>
    <div v-for="todo in todos" :key="todo.id">
      <h3>{{ todo.id }}</h3>
      <div><strong>Title:</strong>{{ todo.title }}</div>
      <div><strong>Completed:</strong>{{ todo.completed }}</div>
    </div>
  </div>
</template>

<script>
export default {
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

    /* input event handling
    inputTitle(event) {
      this.title = event.target.value;
    },
    inputComp(event) {
      this.completed = event.target.value;
    }, */
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

