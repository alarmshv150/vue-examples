<template>
  <div>
    <form @submit.prevent class="form">
      <h4>create todo</h4>
      <my-input v-model="todo.title" type="text" placeholder="title" />
      <my-input v-model="todo.completed" type="text" placeholder="completed?" />
      <button @click="createTodo" class="btn">create</button>
    </form>
  </div>
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
  },
};
</script>

<style scoped>
.form {
  margin-top: 20px;
  display: block;
}
.btn {
  border: 2px solid #008000;
  align-self: flex-end;
  margin-top: 10px;
  padding: 10px 15px;
  color: green;
  background: none;
  width: 100px;
}
</style>
