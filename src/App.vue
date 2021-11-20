<template>
  <div class="app">
    <button @click="decrease">decrease</button>
    <span>Counter:{{ counter }}</span>
    <button @click="increase">increase</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      counter: 0,
    };
  },
  methods: {
    decrease() {
      this.counter -= 1;
    },
    increase() {
      this.counter += 1;
    },
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
