<template>
  <div>
    <h1>Counter:{{ counter }}</h1>
    <button @click="decrement">Decrement</button>
    <button @click="increment">Increment</button>
  </div>
</template>

<script>
import CountMixin from "@/mixins/CountMixin";
export default {
  mixins: [CountMixin],
};
</script>

<style scoped></style>
