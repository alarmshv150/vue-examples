<template>
  <div class="app">
    <button @click="counter--">decrease</button>
    <span>Counter:{{ counter }}</span>
    <button @click="counter++">increase</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      counter: 0,
    };
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.app {
  padding: 30px;
}
</style>

