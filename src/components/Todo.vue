<template>
  <div class="todo">
    <h3>id:{{ todo.id }}</h3>
    <div><strong>Title:</strong>{{ todo.title }}</div>
    <div><strong>Completed:</strong>{{ todo.completed }}</div>
    <div class="todo__btns">
      <button class="btn__rmv" @click="$emit('remove', todo)">delete</button>
      <button class="btn__td" @click="$router.push(`/todo/${todo.id}`)">
        todo
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    todo: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.todo {
  border: 3px solid rgb(19, 109, 11);
  margin-top: 20px;
  padding: 15px;
  display: block;
}
.todo__btns {
  display: flex;
}
.btn__rmv {
  border: 2px solid rgb(242, 7, 7);
  margin: 10px 4px;
  padding: 10px;
}
.btn__td {
  border: 2px solid rgb(35, 19, 182);
  margin: 10px 4px;
  padding: 10px;
}
</style>
