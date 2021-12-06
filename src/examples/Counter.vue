<template>
  <div>
    <h1>Counter:{{ counter }}</h1>
    <button @click="increment">Increment</button>
    <button @click="decrement">Decrement</button>
  </div>
</template>

<script>
import CountMixin from "@/mixins/CountMixin";

export default {
  mixins: [CountMixin],
};
</script>

<style scoped></style>
