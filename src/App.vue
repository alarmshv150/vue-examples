<template>
  <div class="app">
    <div v-for="elem in list" :key="elem.id">
      {{ elem.id }} - {{ elem.name }}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        { id: 1, name: "elem 1" },
        { id: 2, name: "elem 2" },
        { id: 3, name: "elem 3" },
      ],
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
