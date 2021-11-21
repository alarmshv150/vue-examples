<template>
  <form @submit.prevent>
    <h4>create todo</h4>
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
</template>

<script>
export default {};
</script>

<style scoped></style>
