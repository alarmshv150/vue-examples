<template>
  <div class="app">
    <input v-model="inputValue" type="text" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      inputValue: "",
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
