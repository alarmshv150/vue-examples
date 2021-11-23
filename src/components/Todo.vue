<template>
  <div>
    <h3>id:{{ todo.id }}</h3>
    <div><strong>Title:</strong>{{ todo.title }}</div>
    <div><strong>Completed:</strong>{{ todo.completed }}</div>
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

<style scoped></style>
