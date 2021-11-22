<template>
  <div>
    <h3>{{ todo.id }}</h3>
    <div><strong>Title:</strong>{{ todo.title }}</div>
    <div><strong>Completed:</strong>{{ todo.completed }}</div>
    <teleport to="body">
      <div>lifting to body</div>
    </teleport>
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
