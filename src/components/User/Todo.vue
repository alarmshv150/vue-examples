<template>
  <div class="todo">
    <h3>id:{{ todo.id }}</h3>
    <div><strong>Title:</strong>{{ todo.title }}</div>
    <div><strong>Completed:</strong>{{ todo.completed }}</div>
    <div class="todo__btns">
      <button class="btn__dl" @click="$emit('remove', todo)">delete</button>
      <button
        class="btn__info"
        @click="$router.push(`/todo/${todo.id}`)"
        v-if="todo.id < 201"
      >
        info
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
.btn__dl {
  border: 2px solid rgb(242, 7, 7);
  margin: 14px 0px;
  padding: 10px;
  width: 70px;
}
.btn__info {
  border: 2px solid rgb(35, 19, 182);
  margin: 14px 10px;
  padding: 10px;
  width: 70px;
}
</style>
