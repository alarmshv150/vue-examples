<template>
  <div>
    <div>
      <h1>ID:{{ $route.params.id }}</h1>
      <p><strong>Title:</strong>{{ todo.title }}</p>
      <p><strong>Completed:</strong>{{ todo.completed }}</p>
    </div>
  </div>
</template>

<script>
import FetchIdMixin from "@/mixins/FetchIdMixin";
export default {
  mixins: [FetchIdMixin],
};
</script>

<style scoped></style>
