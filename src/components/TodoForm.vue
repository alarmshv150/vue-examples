<template>
  <form @submit.prevent>
    <h4>create todo</h4>
    <input
      ref="inputref"
      v-model="todo.title"
      type="text"
      placeholder="title"
    />
    <input v-model="todo.completed" type="text" placeholder="completed" />
    <button @click="createTodo">create</button>
    <button @click="getRef">get element</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      todo: {
        title: "",
        completed: "",
      },
    };
  },
  methods: {
    createTodo() {
      this.todo.id = Date.now();
      this.$emit("create", this.todo);
      this.todo = {
        title: "",
        completed: "",
      };
    },
    getRef() {
      this.$refs.inputref.focus();
      console.log(this.$refs.inputref);
    },
  },
};
</script>

<style scoped></style>
