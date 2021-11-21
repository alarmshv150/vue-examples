<template>
  <h3>todos</h3>
  <div v-for="todo in todos" :key="todo.id">
    <h3>{{ todo.id }}</h3>
    <div><strong>Title:</strong>{{ todo.title }}</div>
    <div><strong>Completed:</strong>{{ todo.completed }}</div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped></style>
